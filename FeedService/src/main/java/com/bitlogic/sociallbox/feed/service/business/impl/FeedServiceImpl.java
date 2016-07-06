package com.bitlogic.sociallbox.feed.service.business.impl;


import io.getstream.client.StreamClient;
import io.getstream.client.apache.StreamClientImpl;
import io.getstream.client.config.ClientConfiguration;
import io.getstream.client.exception.InvalidFeedNameException;
import io.getstream.client.exception.StreamClientException;
import io.getstream.client.model.feeds.Feed;
import io.getstream.client.model.filters.FeedFilter;
import io.getstream.client.service.FlatActivityServiceImpl;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.AsyncResult;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.concurrent.ListenableFuture;

import com.bitlogic.Constants;
import com.bitlogic.sociallbox.data.model.Event;
import com.bitlogic.sociallbox.data.model.EventImage;
import com.bitlogic.sociallbox.data.model.Meetup;
import com.bitlogic.sociallbox.data.model.MeetupImage;
import com.bitlogic.sociallbox.data.model.StreamsAPIConfig;
import com.bitlogic.sociallbox.data.model.User;
import com.bitlogic.sociallbox.data.model.feed.CreateFeedRequest;
import com.bitlogic.sociallbox.data.model.feed.CreateMeetupActivity;
import com.bitlogic.sociallbox.data.model.feed.EventInterestActivity;
import com.bitlogic.sociallbox.data.model.feed.EventRegisterActivity;
import com.bitlogic.sociallbox.data.model.feed.MeetupPhotoActivity;
import com.bitlogic.sociallbox.data.model.feed.UserActivity;
import com.bitlogic.sociallbox.data.model.feed.UserActivityType;
import com.bitlogic.sociallbox.data.model.feed.UserFeed;
import com.bitlogic.sociallbox.data.model.feed.entity.UserActivityEntity;
import com.bitlogic.sociallbox.feed.service.dao.EventDAO;
import com.bitlogic.sociallbox.feed.service.dao.FeedDAO;
import com.bitlogic.sociallbox.feed.service.dao.MeetupDAO;
import com.bitlogic.sociallbox.feed.service.dao.UserDAO;
import com.bitlogic.sociallbox.feed.service.utils.LoggingService;
import com.bitlogic.sociallbox.service.business.FeedService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.base.Function;
import com.google.common.collect.Lists;

@Transactional
@Service("feedService")
public class FeedServiceImpl extends LoggingService implements FeedService{

	private static final Logger LOGGER = LoggerFactory.getLogger(FeedServiceImpl.class);
	private static SimpleDateFormat DATE_FORMAT = new SimpleDateFormat(Constants.FEED_TIME_FORMAT);
	
	@Override
	public Logger getLogger() {
		return LOGGER;
	}
	
	@Autowired
	private FeedDAO feedDAO;
	
	@Autowired
	private StreamsAPIConfig streamsAPIConfig;
	
	@Autowired
	private UserDAO userDAO;
	
	@Autowired
	private EventDAO eventDAO;
	
	@Autowired
	private MeetupDAO meetupDAO;
	
	@Override
	@Async
	public ListenableFuture<String> createFeeds(CreateFeedRequest<?> createFeedRequest) {
		String LOG_PREFIX = "FeedServiceImpl-createFeeds";
		logInfo(LOG_PREFIX, "Feed : {}", createFeedRequest);
		
		UserActivityType feedType = createFeedRequest.getActivityType();
		
		logInfo(LOG_PREFIX, "Feed Type {}", feedType);
		//Prepare To List
		List<Long> friendIds = this.userDAO.getUserFriends(createFeedRequest.getActorId());
		if(friendIds==null || friendIds.isEmpty() || friendIds.size()<1){
			return new AsyncResult<String>("No friends for user");
		}
		
		UserActivityEntity activityEntity = new UserActivityEntity();
		activityEntity.setActivityType(createFeedRequest.getActivityType());
		activityEntity.setCreateDt(new Date());
		activityEntity.setUserId(createFeedRequest.getActorId());
		activityEntity.setParentEntityId((String)createFeedRequest.getTarget());
		
		Long feedId = this.feedDAO.createFeed(activityEntity);
		UserActivity feed = null;
		if(UserActivityType.INTERESTED_IN_EVENT == createFeedRequest.getActivityType()){
			feed = processEventInterestActivty(createFeedRequest,feedId.toString());
		}else if (UserActivityType.GOING_TO_EVENT == createFeedRequest.getActivityType()){
			feed = processEventRegisteredActivty(createFeedRequest,feedId.toString());
		}else if(UserActivityType.CREATED_MEETUP == createFeedRequest.getActivityType()){
			feed = processCreateMeetupActivity(createFeedRequest, feedId.toString());
		}else if(UserActivityType.POSTED_PHOTO_TO_MEETUP == createFeedRequest.getActivityType()){
			feed = processMeetupPhotoActivity(createFeedRequest, feedId.toString());
		}else{
			throw new IllegalArgumentException("UserActivityType is invalid");
		}
		try{
			storeFeedOnStreams(feed, friendIds);
		}catch(InvalidFeedNameException exception){
			logError(LOG_PREFIX, "Error while creating feed ", exception);
		}
		return new AsyncResult<String>("Feeds created successfully");
	}
	
	@Override
	public List<UserFeed> getFeedsForUser(String deviceId, String fromId,
			Integer limit) {
		String LOG_PREFIX = "FeedServiceImpl-getFeedsForUser";
		User user = this.userDAO.getUserInfoFromDeviceId(deviceId);
		if(user == null){
			return new ArrayList<>();
		}
		ClientConfiguration streamConfig = new ClientConfiguration();
		List<UserFeed> feeds = new ArrayList<>();
    	StreamClient streamClient = new StreamClientImpl(streamConfig, streamsAPIConfig.getApiKey(), streamsAPIConfig.getPrivateKey());
		try {
			Feed feed = streamClient.newFeed("user", user.getId()+"");
			
			FlatActivityServiceImpl<UserActivity> flatActivityService = feed.newFlatActivityService(UserActivity.class);
	    	
			
			FeedFilter filter = null;
			if(StringUtils.isBlank(fromId)){
				filter = new FeedFilter.Builder().withLimit(limit).build();
			}else{
				filter = new FeedFilter.Builder().withIdLowerThan(fromId).withLimit(limit).build();
			}
	    	List<UserActivity> activities = flatActivityService.getActivities(filter).getResults();
	    	feeds = tranformToFeeds(activities);
		} catch (InvalidFeedNameException e) {
			logError(LOG_PREFIX, "Error while getting feeds for user : {}", user.getName(),e);
		}catch(Exception e){
			logError(LOG_PREFIX, "Error while getting feeds for user : {}", user.getName(),e);
		}
		
		return feeds;
	}
	
	private List<UserFeed> tranformToFeeds(List<UserActivity> activities){
		if(activities==null || activities.isEmpty()){
			return new ArrayList<>();
		}
		Function<UserActivity,UserFeed> transform = new Function<UserActivity,UserFeed>(){
	        @Override
	        public UserFeed apply(UserActivity activity) {
	            UserFeed feed = new UserFeed();
	            feed.setAction(activity.getAction());
	            feed.setActor(activity.getActorName());
	            feed.setIcon(activity.getActorPic());
	            feed.setId(activity.getId());
	            
	            feed.setType(activity.getActivityType());
	            feed.setTime(DATE_FORMAT.format(activity.getTime()));
	            if(activity.getActivityType().equals(UserActivityType.INTERESTED_IN_EVENT.name())){
	            	EventInterestActivity eventInterestActivity = (EventInterestActivity) activity;
	            	feed.setImage(eventInterestActivity.getEventPic());
	            	feed.setTarget(eventInterestActivity.getEventName());
	            	feed.setTargetId(eventInterestActivity.getEventId());
	            }else if(activity.getActivityType().equals(UserActivityType.GOING_TO_EVENT.name())){
	            	EventRegisterActivity eventRegisterActivity = (EventRegisterActivity) activity;
	            	feed.setImage(eventRegisterActivity.getEventPic());
	            	feed.setTarget(eventRegisterActivity.getEventName());
	            	feed.setTargetId(eventRegisterActivity.getEventId());
	            }else if(activity.getActivityType().equals(UserActivityType.CREATED_MEETUP.name())){
	            	CreateMeetupActivity createMeetupActivity = (CreateMeetupActivity) activity;
	            	feed.setTarget(createMeetupActivity.getMeetupName());
	            	feed.setTargetId(createMeetupActivity.getMeetupId());
	            }else if(activity.getActivityType().equals(UserActivityType.POSTED_PHOTO_TO_MEETUP.name())){
	            	MeetupPhotoActivity meetupPhotoActivity = (MeetupPhotoActivity)activity;
	            	feed.setTarget(meetupPhotoActivity.getMeetupName());
	            	feed.setTargetId(meetupPhotoActivity.getMeetupId());
	            	feed.setImage(meetupPhotoActivity.getImage());
	            }
	        	
	        	return feed;
	        }
	    };
	    
	    List<UserFeed> feeds = Lists.transform(activities, transform);
		
		return feeds;
		
	}
	
	private EventInterestActivity processEventInterestActivty(CreateFeedRequest<?> createFeedRequest,String feedId){
		
		EventInterestActivity eventInterestActivity = new EventInterestActivity();
		Event event = this.eventDAO.getEvent((String)createFeedRequest.getTarget());
		List<EventImage> eventImages = event.getEventImages();
		
		eventInterestActivity.setActivityType(createFeedRequest.getActivityType().name());
		eventInterestActivity.setActor("user:"+createFeedRequest.getActorId());
		eventInterestActivity.setActorName(createFeedRequest.getActorName());
		eventInterestActivity.setActorPic(createFeedRequest.getActorPic());
		eventInterestActivity.setVerb(createFeedRequest.getActivityType().getVerb());
		eventInterestActivity.setAction(createFeedRequest.getActivityType().getAction());
		eventInterestActivity.setEventId(event.getUuid());
		eventInterestActivity.setEventName(event.getTitle());
		
		eventInterestActivity.setForeignId(feedId);
		eventInterestActivity.setObject("Event:"+event.getUuid());
		if(eventImages!=null && !eventImages.isEmpty()){
			eventInterestActivity.setEventPic(eventImages.get(0).getUrl());
		}
		
		return eventInterestActivity;
	}
	
	private EventRegisterActivity processEventRegisteredActivty(CreateFeedRequest<?> createFeedRequest,String feedId){
		
		EventRegisterActivity eventRegActivity = new EventRegisterActivity();
		Event event = this.eventDAO.getEvent((String)createFeedRequest.getTarget());
		List<EventImage> eventImages = event.getEventImages();
		
		eventRegActivity.setActivityType(createFeedRequest.getActivityType().name());
		eventRegActivity.setActor("user:"+createFeedRequest.getActorId());
		eventRegActivity.setActorName(createFeedRequest.getActorName());
		eventRegActivity.setActorPic(createFeedRequest.getActorPic());
		eventRegActivity.setVerb(createFeedRequest.getActivityType().getVerb());
		eventRegActivity.setAction(createFeedRequest.getActivityType().getAction());
		eventRegActivity.setEventId(event.getUuid());
		eventRegActivity.setEventName(event.getTitle());
		
		eventRegActivity.setForeignId(feedId);
		eventRegActivity.setObject("Event:"+event.getUuid());
		if(eventImages!=null && !eventImages.isEmpty()){
			if(eventImages.get(0)!=null){
				eventRegActivity.setEventPic(eventImages.get(0).getUrl());
			}
		}
		
		return eventRegActivity;
	}
	
	private CreateMeetupActivity processCreateMeetupActivity(CreateFeedRequest<?> createFeedRequest,String feedId){
		CreateMeetupActivity meetupActivity = new CreateMeetupActivity();
		Meetup meetup = this.meetupDAO.getMeetup((String)createFeedRequest.getTarget());

		meetupActivity.setActivityType(createFeedRequest.getActivityType().name());
		meetupActivity.setActor("user:"+createFeedRequest.getActorId());
		meetupActivity.setActorName(createFeedRequest.getActorName());
		meetupActivity.setActorPic(createFeedRequest.getActorPic());
		meetupActivity.setVerb(createFeedRequest.getActivityType().getVerb());
		meetupActivity.setAction(createFeedRequest.getActivityType().getAction());
		meetupActivity.setMeetupId(meetup.getUuid());
		meetupActivity.setMeetupName(meetup.getTitle());
		
		meetupActivity.setForeignId(feedId);
		meetupActivity.setObject("Meetup:"+meetup.getUuid());
		
		return meetupActivity;
	}
	
	private MeetupPhotoActivity processMeetupPhotoActivity(CreateFeedRequest<?> createFeedRequest,String feedId){
		MeetupPhotoActivity meetupActivity = new MeetupPhotoActivity();
		Meetup meetup = this.meetupDAO.getMeetup((String)createFeedRequest.getTarget());
		MeetupImage meetupImage = this.meetupDAO.getImageUploadedByUser(createFeedRequest.getActorId());
		meetupActivity.setActivityType(createFeedRequest.getActivityType().name());
		meetupActivity.setActor("user:"+createFeedRequest.getActorId());
		meetupActivity.setActorName(createFeedRequest.getActorName());
		meetupActivity.setActorPic(createFeedRequest.getActorPic());
		meetupActivity.setVerb(createFeedRequest.getActivityType().getVerb());
		meetupActivity.setAction(createFeedRequest.getActivityType().getAction());
		meetupActivity.setMeetupId(meetup.getUuid());
		meetupActivity.setMeetupName(meetup.getTitle());
		
		meetupActivity.setForeignId(feedId);
		meetupActivity.setObject("Meetup:"+meetup.getUuid());
		meetupActivity.setImage(meetupImage.getUrl());
		
		return meetupActivity;
	}
	
	private void storeFeedOnStreams(UserActivity userActivity , List<Long> friendIds) throws InvalidFeedNameException {
		String LOG_PREFIX = "FeedServiceImpl-storeFeedOnStreams";
		ClientConfiguration streamConfig = new ClientConfiguration();
		streamConfig.setTimeout(30000);
    	StreamClient streamClient = new StreamClientImpl(streamConfig, streamsAPIConfig.getApiKey(), streamsAPIConfig.getPrivateKey());
		Feed feed = streamClient.newFeed("user", friendIds.get(0).toString());
		FlatActivityServiceImpl<UserActivity> flatActivityService = feed.newFlatActivityService(UserActivity.class); 
		
		Function<Long,String> getCCList = new Function<Long,String>(){
	        @Override
	        public String apply(Long friendId) {
	            return "user:"+friendId.toString();
	        }
	    };
	    
		if(friendIds.size() >=1 && friendIds.size()<100){
			List<String> ccList = Lists.transform(friendIds, getCCList);
			userActivity.setTo(ccList);
			try {
				ObjectMapper objectMapper = new ObjectMapper();
				System.out.println(objectMapper.writeValueAsString(userActivity));
				UserActivity response = 	flatActivityService.addActivity(userActivity);
			} catch (IOException e) {
				logError(LOG_PREFIX, "Error while sending feed to streams.io ", e);
				
			} catch (StreamClientException e) {
				System.out.println(e.getExceptionField());
				System.out.println(e.getDetail());
				System.out.println(e.getLocalizedMessage());
				logError(LOG_PREFIX, "Error while sending feed to streams.io ", e);
			}
			
		}else if(friendIds.size()>100){
			List<List<Long>> partitions = Lists.partition(friendIds, 90);
			
			for(List<Long> partition: partitions){
				
				List<String> ccList = Lists.transform(partition, getCCList);
				
				userActivity.setTo(ccList);
				try {
					
					flatActivityService.addActivity(userActivity);
				} catch (IOException e) {
					logError(LOG_PREFIX, "Error while sending feed to streams.io ", e);
					
				} catch (StreamClientException e) {
					logError(LOG_PREFIX, "Error while sending feed to streams.io ", e);
				}
			}
			
		}else{
			try {
				flatActivityService.addActivity(userActivity);
			} catch (IOException e) {
				logError(LOG_PREFIX, "Error while sending feed to streams.io ", e);
				
			} catch (StreamClientException e) {
				logError(LOG_PREFIX, "Error while sending feed to streams.io ", e);
			}
		}
		
		try {
			streamClient.shutdown();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
}
