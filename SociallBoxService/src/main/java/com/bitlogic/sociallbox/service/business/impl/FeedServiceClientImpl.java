package com.bitlogic.sociallbox.service.business.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.bitlogic.Constants;
import com.bitlogic.sociallbox.data.model.Event;
import com.bitlogic.sociallbox.data.model.Meetup;
import com.bitlogic.sociallbox.data.model.SocialBoxConfig;
import com.bitlogic.sociallbox.data.model.User;
import com.bitlogic.sociallbox.data.model.feed.CreateFeedRequest;
import com.bitlogic.sociallbox.data.model.feed.UserActivityType;
import com.bitlogic.sociallbox.service.business.FeedServiceClient;
import com.bitlogic.sociallbox.service.utils.FeedUtils;
import com.bitlogic.sociallbox.service.utils.LoggingService;

@Service("feedServiceClient")
public class FeedServiceClientImpl extends LoggingService implements FeedServiceClient,Constants{
	
	private static final Logger LOGGER = LoggerFactory.getLogger(FeedServiceClientImpl.class);
	@Override
	public Logger getLogger() {
		return LOGGER;
	}
	
	@Autowired
	private SocialBoxConfig socialBoxConfig;
	
	@Autowired
	private RestTemplate restTemplate;
	
	@Override
	public void storeFeedForEventFavActivity(User user, Event event) {
		String lOG_PREFIX = "FeedServiceClientImpl-storeFeedForEventFavActivity";
		CreateFeedRequest<String> createFeedRequest = new CreateFeedRequest<>();
		createFeedRequest.setActivityType(UserActivityType.INTERESTED_IN_EVENT);
		createFeedRequest.setActorId(user.getId());
		createFeedRequest.setActorName(user.getName());
		createFeedRequest.setActorPic(user.getProfilePic());
		createFeedRequest.setTarget(event.getUuid());
		
		
		logInfo(lOG_PREFIX, "Feed create request to be sent {}", createFeedRequest);
		
		FeedUtils.send(restTemplate, createFeedRequest, socialBoxConfig);
		
		logInfo(lOG_PREFIX, "Create feed request sent");
		
	}
	
	@Override
	public void storeFeedForEventRegisterActivity(User user, Event event) {
		String lOG_PREFIX = "FeedServiceClientImpl-storeFeedForEventRegisterActivity";
		CreateFeedRequest<String> createFeedRequest = new CreateFeedRequest<>();
		createFeedRequest.setActivityType(UserActivityType.GOING_TO_EVENT);
		createFeedRequest.setActorId(user.getId());
		createFeedRequest.setActorName(user.getName());
		createFeedRequest.setActorPic(user.getProfilePic());
		createFeedRequest.setTarget(event.getUuid());
		
		
		logInfo(lOG_PREFIX, "Feed create request to be sent {}", createFeedRequest);
		
		FeedUtils.send(restTemplate, createFeedRequest, socialBoxConfig);
		
		logInfo(lOG_PREFIX, "Create feed request sent");
		
	}
	
	@Override
	public void storeFeedForCreateMeetupActivity(User user, Meetup meetup) {
		String lOG_PREFIX = "FeedServiceClientImpl-storeFeedForCreateMeetupActivity";
		CreateFeedRequest<String> createFeedRequest = new CreateFeedRequest<>();
		createFeedRequest.setActivityType(UserActivityType.CREATED_MEETUP);
		createFeedRequest.setActorId(user.getId());
		createFeedRequest.setActorName(user.getName());
		createFeedRequest.setActorPic(user.getProfilePic());
		createFeedRequest.setTarget(meetup.getUuid());
		
		
		logInfo(lOG_PREFIX, "Feed create request to be sent {}", createFeedRequest);
		
		FeedUtils.send(restTemplate, createFeedRequest, socialBoxConfig);
		
		logInfo(lOG_PREFIX, "Create feed request sent");
	}
	
	@Override
	public void storeFeedForUplImgToMeetupActivity(User user, Meetup meetup) {
		String lOG_PREFIX = "FeedServiceClientImpl-storeFeedForCreateMeetupActivity";
		CreateFeedRequest<String> createFeedRequest = new CreateFeedRequest<>();
		createFeedRequest.setActivityType(UserActivityType.POSTED_PHOTO_TO_MEETUP);
		createFeedRequest.setActorId(user.getId());
		createFeedRequest.setActorName(user.getName());
		createFeedRequest.setActorPic(user.getProfilePic());
		createFeedRequest.setTarget(meetup.getUuid());
		
		
		logInfo(lOG_PREFIX, "Feed create request to be sent {}", createFeedRequest);
		
		FeedUtils.send(restTemplate, createFeedRequest, socialBoxConfig);
		
		logInfo(lOG_PREFIX, "Create feed request sent");
		
	}
}
