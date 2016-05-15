package com.bitlogic.sociallbox.service.business.impl;

import java.io.ByteArrayInputStream;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.bitlogic.Constants;
import com.bitlogic.sociallbox.data.model.EOAdminStatus;
import com.bitlogic.sociallbox.data.model.Event;
import com.bitlogic.sociallbox.data.model.EventImage;
import com.bitlogic.sociallbox.data.model.EventOrganizer;
import com.bitlogic.sociallbox.data.model.EventOrganizerAdmin;
import com.bitlogic.sociallbox.data.model.EventStatus;
import com.bitlogic.sociallbox.data.model.Role;
import com.bitlogic.sociallbox.data.model.SocialDetailType;
import com.bitlogic.sociallbox.data.model.SocialSystem;
import com.bitlogic.sociallbox.data.model.User;
import com.bitlogic.sociallbox.data.model.UserMessage;
import com.bitlogic.sociallbox.data.model.UserRoleType;
import com.bitlogic.sociallbox.data.model.UserSocialDetail;
import com.bitlogic.sociallbox.data.model.requests.AddCompanyToProfileRequest;
import com.bitlogic.sociallbox.data.model.requests.CreateEventOrganizerRequest;
import com.bitlogic.sociallbox.data.model.requests.UpdateEOAdminProfileRequest;
import com.bitlogic.sociallbox.data.model.requests.UpdateEventRequest;
import com.bitlogic.sociallbox.data.model.response.EOAdminProfile;
import com.bitlogic.sociallbox.data.model.response.EODashboardResponse;
import com.bitlogic.sociallbox.data.model.response.EODashboardResponse.AttendeesInMonth;
import com.bitlogic.sociallbox.data.model.response.EventResponseForAdmin.DailyEventMeetupStatistics;
import com.bitlogic.sociallbox.data.model.response.EventResponseForAdmin.DailyEventUserStatistics;
import com.bitlogic.sociallbox.data.model.response.EventOrganizerProfile;
import com.bitlogic.sociallbox.data.model.response.EventResponse;
import com.bitlogic.sociallbox.data.model.response.EventResponseForAdmin;
import com.bitlogic.sociallbox.image.service.ImageService;
import com.bitlogic.sociallbox.service.business.EOAdminService;
import com.bitlogic.sociallbox.service.business.EventOrganizerService;
import com.bitlogic.sociallbox.service.dao.EventDAO;
import com.bitlogic.sociallbox.service.dao.EventOrganizerDAO;
import com.bitlogic.sociallbox.service.dao.UserDAO;
import com.bitlogic.sociallbox.service.exception.ClientException;
import com.bitlogic.sociallbox.service.exception.EntityNotFoundException;
import com.bitlogic.sociallbox.service.exception.RestErrorCodes;
import com.bitlogic.sociallbox.service.exception.ServiceException;
import com.bitlogic.sociallbox.service.exception.UnauthorizedException;
import com.bitlogic.sociallbox.service.transformers.EOToEOResponseTransformer;
import com.bitlogic.sociallbox.service.transformers.EventTransformer;
import com.bitlogic.sociallbox.service.transformers.MultipartToEventImageTransformer;
import com.bitlogic.sociallbox.service.transformers.TransformerFactory;
import com.bitlogic.sociallbox.service.transformers.TransformerFactory.TransformerTypes;
import com.bitlogic.sociallbox.service.utils.LoggingService;
import com.bitlogic.sociallbox.service.utils.LoginUtil;
import com.bitlogic.sociallbox.service.utils.PasswordUtils;

@Service("eventOrganizerAdminService")
@Transactional
public class EOAdminServiceImpl extends LoggingService implements EOAdminService,Constants{

	private static final Logger LOGGER = LoggerFactory.getLogger(EOAdminServiceImpl.class);
	@Autowired
	private UserDAO userDAO;
	
	@Autowired
	private EventOrganizerService eventOrganizerService;
	
	@Autowired
	private MessageSource msgSource;
	
	@Autowired
	private EventDAO eventDAO;
	
	@Autowired
	private EventOrganizerDAO eventOrganizerDAO;
	
	@Override
	public Logger getLogger() {
		return LOGGER;
	}
	
	@Override
	public EOAdminProfile signup(User user) {
		String LOG_PREFIX = "EOAdminServiceImpl-signup";
		
		LoginUtil.validateOrganizerAdmin(user);
		logInfo(LOG_PREFIX, "Validated User successfully");
		logInfo(LOG_PREFIX, "Checking if user exists - {} ?",user.getEmailId());
		User userInDB = this.userDAO.getUserByEmailId(user.getEmailId(), false);
		User createdUser = null;
		EOAdminProfile adminProfile = null;
		if(userInDB==null){
			logInfo(LOG_PREFIX, "User not found. Signing up!");
			Date now = new Date();
			user.setCreateDt(now);
			user.setIsEnabled(Boolean.TRUE);
			Set<Role> userRoles = new HashSet<>();
			Role appUserRole = this.userDAO.getRoleType(UserRoleType.EVENT_ORGANIZER);
			userRoles.add(appUserRole);
			user.setUserroles(userRoles);
			user.setPassword(PasswordUtils.encryptPass(user.getPassword()));
			createdUser = this.userDAO.createNewWebUser(user);
			
			//Insert a new message for user
			String messageKey = WELCOME_MESSAGE_KEY;
			Locale currentLocale = LocaleContextHolder.getLocale();
			String messageDetails = msgSource.getMessage(messageKey, null,
					currentLocale);
			if(messageDetails!=null){
				String formattedMsg = String.format(messageDetails, user.getName());
				UserMessage message = new UserMessage();
				message.setCreateDt(new Date());
				message.setIsRead(Boolean.FALSE);
				message.setMessage(formattedMsg);
				message.setUser(createdUser);
				this.userDAO.addMessageForUser(message);
			}
			adminProfile = new EOAdminProfile(null, null, createdUser);
			logInfo(LOG_PREFIX, "User Signup Successful");
		}else{
			logError(LOG_PREFIX, "Organizer Admin already exists. Cannot signup again.{}", user.getEmailId());
			throw new ClientException(RestErrorCodes.ERR_002, ERROR_USER_ALREADY_EXISTS);
		}
		return adminProfile;
	}
	
	@Override
	public EOAdminProfile signin(String emailId) {
		String LOG_PREFIX = "EOAdminServiceImpl-signin";
		logInfo(LOG_PREFIX, "Checking if user exists - {} ?",emailId);
		User userInDB = this.userDAO.getUserByEmailId(emailId, false);
		EOAdminProfile adminProfile = null;
		if(userInDB!=null){
			logInfo(LOG_PREFIX, "User Found");
			EventOrganizerAdmin eventOrganizerAdmin = this.getEOAdminByUserId(userInDB.getId());
			if(eventOrganizerAdmin==null){
				adminProfile = new EOAdminProfile(null, null, userInDB);
			}else{
				if(eventOrganizerAdmin.getOrganizer()==null){
					adminProfile = new EOAdminProfile(null, eventOrganizerAdmin, userInDB);
				}else{
					EOToEOResponseTransformer eoProfileTransformer = 
							(EOToEOResponseTransformer) TransformerFactory.getTransformer(TransformerTypes.EO_TO_EO_RESPONSE_TRANSFORMER);
					EventOrganizerProfile eventOrganizerProfile = eoProfileTransformer.transform(eventOrganizerAdmin.getOrganizer());
					adminProfile = new EOAdminProfile(eventOrganizerProfile, eventOrganizerAdmin, userInDB);
				}
			}
			
		}else{
			logError(LOG_PREFIX, "User not found for Email Id {}", emailId);
			throw new UnauthorizedException(RestErrorCodes.ERR_002, ERROR_USER_INVALID);
		}
		return adminProfile;
	}
	
	@Override
	public EOAdminProfile getProfile(Long id) {
		String LOG_PREFIX = "EOAdminServiceImpl-getProfile";
		EventOrganizerAdmin eventOrganizerAdmin = this.getEOAdminById(id);
		
		EOToEOResponseTransformer eoProfileTransformer = 
				(EOToEOResponseTransformer) TransformerFactory.getTransformer(TransformerTypes.EO_TO_EO_RESPONSE_TRANSFORMER);
		EventOrganizerProfile eventOrganizerProfile = eoProfileTransformer.transform(eventOrganizerAdmin.getOrganizer());
		
		EOAdminProfile adminProfile = new EOAdminProfile(eventOrganizerProfile, eventOrganizerAdmin, eventOrganizerAdmin.getUser());
		
		return adminProfile;
	}
	
	@Override
	public EOAdminProfile updateProfile(
			UpdateEOAdminProfileRequest updateProfileRequest) {
		String LOG_PREFIX = "EOAdminServiceImpl-updateProfile";
		logInfo(LOG_PREFIX, "Checking if user exists - {} ?",updateProfileRequest.getUserId());
		User userInDB = this.userDAO.getUserById(updateProfileRequest.getUserId());
		EOAdminProfile adminProfile = null;
		if(userInDB!=null){
			logInfo(LOG_PREFIX, "User Found");
			EventOrganizerAdmin eventOrganizerAdmin = this.getEOAdminByUserId(userInDB.getId());
			User adminUser = userInDB;
			if(updateProfileRequest!=null && StringUtils.isNotBlank(updateProfileRequest.getNewPassword())&&
					!updateProfileRequest.getNewPassword().equalsIgnoreCase("null")){
				logInfo(LOG_PREFIX, "Password updated for User with id {}", updateProfileRequest.getUserId());
				adminUser.setPassword(PasswordUtils.encryptPass(updateProfileRequest.getNewPassword()));
			}
			if(updateProfileRequest!=null  && StringUtils.isNotBlank(updateProfileRequest.getName())&&
					!updateProfileRequest.getName().equalsIgnoreCase("null")){
				if(!adminUser.getName().equals(updateProfileRequest.getName())){
					logInfo(LOG_PREFIX, "Name updated for user with id {}",adminUser.getId());
					adminUser.setName(updateProfileRequest.getName());
				}
			}
			if(eventOrganizerAdmin==null){
				adminProfile = new EOAdminProfile(null, null, userInDB);
			}else{
				if(eventOrganizerAdmin.getOrganizer()==null){
					adminProfile = new EOAdminProfile(null, eventOrganizerAdmin, userInDB);
				}else{
					EOToEOResponseTransformer eoProfileTransformer = 
							(EOToEOResponseTransformer) TransformerFactory.getTransformer(TransformerTypes.EO_TO_EO_RESPONSE_TRANSFORMER);
					EventOrganizerProfile eventOrganizerProfile = eoProfileTransformer.transform(eventOrganizerAdmin.getOrganizer());
					adminProfile = new EOAdminProfile(eventOrganizerProfile, eventOrganizerAdmin, userInDB);
				}
			}
			
		}else{
			logError(LOG_PREFIX, "User not found for Email Id {}", updateProfileRequest.getUserId());
			throw new UnauthorizedException(RestErrorCodes.ERR_002, ERROR_USER_INVALID);
		}
		return adminProfile;
	}
	
	@Override
	public String updateProfilePic(Long userId, List<MultipartFile> images) {
		String LOG_PREFIX = "EOAdminServiceImpl-updateProfilePic";
		User user = this.userDAO.getUserById(userId);
		if (user == null) {
			throw new UnauthorizedException(RestErrorCodes.ERR_002,
					ERROR_LOGIN_USER_UNAUTHORIZED);
		}
		try {
			for (MultipartFile multipartFile : images) {
				String fileName = multipartFile.getOriginalFilename();
				logInfo(LOG_PREFIX, "File to process : {} ", fileName);
				logInfo(LOG_PREFIX, "File size : {} ", multipartFile.getSize());
				
				fileName = fileName.replaceAll(ONE_WHITESPACE, HYPHEN);
				ByteArrayInputStream imageStream = new ByteArrayInputStream(
						multipartFile.getBytes());

				Map<String, ?> uploadedImageInfo = ImageService
						.uploadUserProfilePic(user.getId() + "", imageStream,
								multipartFile.getContentType(),
								multipartFile.getBytes().length, fileName);
				if (uploadedImageInfo == null
						|| !uploadedImageInfo
								.containsKey(Constants.IMAGE_URL_KEY)) {
					throw new ServiceException(IMAGE_SERVICE_NAME,
							RestErrorCodes.ERR_052,
							"Unable to upload image.Please try later");
				}
				String imageURL = (String) uploadedImageInfo
						.get(Constants.IMAGE_URL_KEY);

				UserSocialDetail socialDetail = new UserSocialDetail();
				socialDetail
						.setSocialDetailType(SocialDetailType.USER_PROFILE_PIC);
				socialDetail.setSocialSystem(SocialSystem.SOCIALLBOX);
				socialDetail.setUser(user);
				socialDetail.setUserSocialDetail(imageURL);

				this.userDAO.saveUserSocialData(socialDetail);
				return imageURL;

			}
		}catch(ServiceException serviceException){
    		   logError(LOG_PREFIX,"Error occurred while processing user profile pic image",serviceException);
    		   throw serviceException;
    	   }catch(Exception ex){
    		 logError(LOG_PREFIX,"Error occurred while processing user profile pic image",ex);
    		 throw new ServiceException(IMAGE_SERVICE_NAME, RestErrorCodes.ERR_052, ex.getMessage());
    	   }
		return user.getProfilePic();
	}
	
	@Override
	public void updateEventImage(Long userId, List<MultipartFile> images,String eventId) {
		String LOG_PREFIX = "EOAdminServiceImpl-storeEventImages";
		List<EventImage> imagesToSave = new ArrayList<>();
		
		Event event = this.eventDAO.getEventWithoutImage(eventId);
		if (event == null) {
			logError(LOG_PREFIX, "Event not found with id {}", eventId);
			throw new ClientException(RestErrorCodes.ERR_003,
					ERROR_INVALID_EVENT_IN_REQUEST);
		}
		int displayOrder = 1;
		for (MultipartFile multipartFile : images) {
			String fileName = multipartFile.getOriginalFilename();
			logInfo(LOG_PREFIX,"File to process : {} ", fileName);
			logInfo(LOG_PREFIX,"File size : {} ", multipartFile.getSize());
			MultipartToEventImageTransformer transformer = (MultipartToEventImageTransformer) TransformerFactory
					.getTransformer(TransformerTypes.MULTIPART_TO_EVENT_IMAGE_TRANFORMER);
			try {
				ByteArrayInputStream imageStream = new ByteArrayInputStream(
						multipartFile.getBytes());
				Map<String, ?> uploadedImageInfo = ImageService.uploadImageToEvent(eventId, 
								imageStream,
								multipartFile.getContentType(),
								multipartFile.getBytes().length, 
								fileName);
				
				if (uploadedImageInfo == null
						|| !uploadedImageInfo
								.containsKey(Constants.IMAGE_URL_KEY)) {
					throw new ServiceException(IMAGE_SERVICE_NAME,
							RestErrorCodes.ERR_052,
							"Unable to upload image.Please try later");
				}
				String imageURL = (String) uploadedImageInfo
						.get(Constants.IMAGE_URL_KEY);

				EventImage eventImage = transformer.transform(multipartFile);
				eventImage.setEvent(event);
				eventImage.setDisplayOrder(displayOrder);
				eventImage.setUrl(imageURL);

				imagesToSave.add(eventImage);
				displayOrder = displayOrder + 1;
			} catch (ServiceException serviceException) {
				logError(LOG_PREFIX,"Error occurred while processing event image",
						serviceException);
			} catch (Exception ex) {
				logError(LOG_PREFIX,"Error occurred while processing event image", ex);
			}
		}

		if (!imagesToSave.isEmpty()) {
			event.setEventImages(null);
			this.eventDAO.saveEventImages(imagesToSave);
		}
	}
	
	@Override
	public String updateCompanyPic(Long userId,String orgId, List<MultipartFile> images,
			String type) {
		String LOG_PREFIX = "EOAdminServiceImpl-updateCompanyPic";
		User user = this.userDAO.getUserById(userId);
		if (user == null) {
			throw new UnauthorizedException(RestErrorCodes.ERR_002,
					ERROR_LOGIN_USER_UNAUTHORIZED);
		}
		EventOrganizer eventOrganizer = this.eventOrganizerService.getOrganizerDetails(orgId);
		if(eventOrganizer == null){
			throw new ClientException(RestErrorCodes.ERR_003, ERROR_INVALID_COMPANY_ID);
		}
		try {
			
			for (MultipartFile multipartFile : images) {
				String fileName = multipartFile.getOriginalFilename();
				logInfo(LOG_PREFIX, "File to process : {} ", fileName);
				logInfo(LOG_PREFIX, "File size : {} ", multipartFile.getSize());

				ByteArrayInputStream imageStream = new ByteArrayInputStream(
						multipartFile.getBytes());
				Map<String, ?> uploadedImageInfo = ImageService
						.uploadCompanyPic(eventOrganizer.getUuid(), imageStream,
								multipartFile.getContentType(),
								multipartFile.getBytes().length, fileName);
				if (uploadedImageInfo == null
						|| !uploadedImageInfo
								.containsKey(Constants.IMAGE_URL_KEY)) {
					throw new ServiceException(IMAGE_SERVICE_NAME,
							RestErrorCodes.ERR_052,
							"Unable to upload image.Please try later");
				}
				String imageURL = (String) uploadedImageInfo
						.get(Constants.IMAGE_URL_KEY);
				if(type.equals("profilePic")){
					eventOrganizer.setProfilePic(imageURL);
				}else{
					eventOrganizer.setCoverPic(imageURL);
				}
				return imageURL;
			}
		}catch(ServiceException serviceException){
 		   logError(LOG_PREFIX,"Error occurred while processing user profile pic image",serviceException);
 		   throw serviceException;
 	   }catch(Exception ex){
 		 logError(LOG_PREFIX,"Error occurred while processing user profile pic image",ex);
 		 throw new ServiceException(IMAGE_SERVICE_NAME, RestErrorCodes.ERR_052, ex.getMessage());
 	   }	
		return null;
	}
	
	@Override
	public EOAdminProfile addCompany(AddCompanyToProfileRequest addCompanyRequest,
			Long userId) {
		String LOG_PREFIX = "EOAdminServiceImpl-addCompany";
		validateAddCompanyRequest(addCompanyRequest);
		addCompanyRequest.setUserId(userId);
		Boolean isExistingCompany = addCompanyRequest.getIsExistingCompany();
		if(isExistingCompany){
			logInfo(LOG_PREFIX, "Existing Company Case");
			return handleExistingCompanyCase(addCompanyRequest);
		}else{
			logInfo(LOG_PREFIX, "New Company Case");
			return handleNewCompanyCase(addCompanyRequest);
		}
		
	}
	
	private EOAdminProfile handleExistingCompanyCase(AddCompanyToProfileRequest addCompanyRequest){
		String LOG_PREFIX = "EOAdminServiceImpl-handleExistingCompanyCase";
		return null;
	}
	
	private EOAdminProfile handleNewCompanyCase(AddCompanyToProfileRequest addCompanyRequest){
		String LOG_PREFIX = "EOAdminServiceImpl-handleNewCompanyCase";
		Long userId = addCompanyRequest.getUserId();
		User eoAdminUser = this.userDAO.getUserById(userId);
		if(eoAdminUser==null){
			logError(LOG_PREFIX, "EOAdmin user not found");
			throw new ClientException(RestErrorCodes.ERR_002,ERROR_USER_INVALID);
		}
		EventOrganizerAdmin eventOrganizerAdmin = this.getEOAdminByUserId(userId);
		if(eventOrganizerAdmin!=null && eventOrganizerAdmin.getOrganizer()!=null){
			throw new ClientException(RestErrorCodes.ERR_003, EO_COMPANY_ALREADY_LINKED);
		}
		EventOrganizer organizer = this.eventOrganizerService.create(addCompanyRequest.getCreateEventOrganizerRequest());
		logInfo(LOG_PREFIX, "Created Company {} ",organizer.getName());
		EventOrganizerAdmin eoAdmin = new EventOrganizerAdmin();
		eoAdmin.setUser(eoAdminUser);
		eoAdmin.setOrganizer(organizer);
		eoAdmin.setStatus(EOAdminStatus.PENDING);
		eoAdmin.setCreateDt(new Date());
		this.createEOAdmin(eoAdmin);
		
		EOToEOResponseTransformer eoProfileTransformer = (EOToEOResponseTransformer) TransformerFactory.getTransformer(TransformerTypes.EO_TO_EO_RESPONSE_TRANSFORMER);
		EventOrganizerProfile eventOrganizerProfile = eoProfileTransformer.transform(organizer);
		
		EOAdminProfile adminProfile = new EOAdminProfile(eventOrganizerProfile, eoAdmin, eoAdminUser);
		logInfo(LOG_PREFIX, "Added Company to EOAdmin profile");
		//Insert a new message for user
		String messageKey = COMPANY_ADDED_MESSAGE;
		Locale currentLocale = LocaleContextHolder.getLocale();
		String messageDetails = msgSource.getMessage(messageKey, null,
				currentLocale);
		if(messageDetails!=null){
			String formattedMsg = String.format(messageDetails, organizer.getName());
			UserMessage message = new UserMessage();
			message.setCreateDt(new Date());
			message.setIsRead(Boolean.FALSE);
			message.setMessage(formattedMsg);
			message.setUser(eoAdminUser);
			this.userDAO.addMessageForUser(message);
		}
		return adminProfile;
	}
	
	private void validateAddCompanyRequest(AddCompanyToProfileRequest addCompanyRequest){
		String LOG_PREFIX = "addCompany-validateAddCompanyRequest";
		logInfo(LOG_PREFIX, "Validating Request = {}", addCompanyRequest);
		if(addCompanyRequest.getIsExistingCompany()){
			if(addCompanyRequest.getCreateEventOrganizerRequest().getUuid() ==null || 
					addCompanyRequest.getCreateEventOrganizerRequest().getUuid().isEmpty()){
				throw new ClientException(RestErrorCodes.ERR_001, ERROR_COMPANY_ID_MANDATORY);
			}
		}else{
			CreateEventOrganizerRequest company = addCompanyRequest.getCreateEventOrganizerRequest();
			if(StringUtils.isBlank(company.getName())){
				throw new ClientException(RestErrorCodes.ERR_001,ERROR_NAME_MANDATORY);
			}
			if(StringUtils.isBlank(company.getEmailId())){
				throw new ClientException(RestErrorCodes.ERR_001,ERROR_EMAIL_MANDATORY);
			}
			if(company.getAddress()==null){
				throw new ClientException(RestErrorCodes.ERR_001,ERROR_ADDRESS_MANDATORY);
			}
			if(StringUtils.isBlank(company.getAddress().getCity())){
				throw new ClientException(RestErrorCodes.ERR_001,ERROR_CITY_MANDATORY);
			}
			if(StringUtils.isBlank(company.getAddress().getState())){
				throw new ClientException(RestErrorCodes.ERR_001,ERROR_STATE_MANDATORY);
			}
			if(StringUtils.isBlank(company.getAddress().getStreet())){
				throw new ClientException(RestErrorCodes.ERR_001,ERROR_STREET_MANDATORY);
			}
			if(StringUtils.isBlank(company.getAddress().getCountry())){
				throw new ClientException(RestErrorCodes.ERR_001,ERROR_COUNTRY_MANDATORY);
			}
			if(StringUtils.isBlank(company.getAddress().getZipcode())){
				throw new ClientException(RestErrorCodes.ERR_001,ERROR_ZIPCODE_MANDATORY);
			}
			if(StringUtils.isBlank(company.getPhone1())){
				throw new ClientException(RestErrorCodes.ERR_001,ERROR_PHONE_MANDATORY);
			}
			
		}
		logInfo(LOG_PREFIX, "Validation completed successfully");
	}
	
	@Override
	public void makeEventLive(String eventId) {
		String LOG_PREFIX = "EOAdminServiceImpl-makeEventLive";

		Event event = this.eventDAO.getEvent(eventId);
		if (event == null) {
			logError(LOG_PREFIX, "Event not found with uuid {}", eventId);
			throw new ClientException(RestErrorCodes.ERR_020,
					ERROR_INVALID_EVENT_IN_REQUEST);
		}
		if(!event.getIsAllowedEventToGoLive()){
			logError(LOG_PREFIX, "Event not allowed to go live {}", eventId);
			throw new ClientException(RestErrorCodes.ERR_020,
					EO_ERROR_EVENT_CANNOT_BE_LIVE);
		}
		Date now = new Date();
		event.setEventStatus(EventStatus.LIVE);
		event.getEventDetails().setUpdateDt(now);
		logInfo(LOG_PREFIX, "Successfully made event live {}", eventId);

	}
	
	@Override
	public void cancelEvent(String eventId) {
		String LOG_PREFIX = "EOAdminServiceImpl-makeEventLive";

		Event event = this.eventDAO.getEvent(eventId);
		if (event == null) {
			logError(LOG_PREFIX, "Event not found with uuid {}", eventId);
			throw new ClientException(RestErrorCodes.ERR_020,
					ERROR_INVALID_EVENT_IN_REQUEST);
		}
		if(!event.getIsAllowedEventToGoLive()){
			logError(LOG_PREFIX, "Event not allowed to be cancelled {}", eventId);
			throw new ClientException(RestErrorCodes.ERR_020,
					EO_ERROR_EVENT_CANNOT_BE_CANCELLED);
		}
		Date now = new Date();
		event.setEventStatus(EventStatus.CANCELLED);
		event.getEventDetails().setUpdateDt(now);
		logInfo(LOG_PREFIX, "Successfully cancelled event {}", eventId);
	}
	
	@Override
	public EODashboardResponse getDashboardData(Long userId) {
		String LOG_PREFIX = "EOAdminServiceImpl-getDashboardData";
		EODashboardResponse dashboardResponse = new EODashboardResponse();
		EventOrganizerAdmin eventOrganizerAdmin = this.getEOAdminByUserId(userId);
		if(eventOrganizerAdmin!=null && eventOrganizerAdmin.getOrganizer()!=null){
			//Find total events
			List<String> events = this.eventDAO.getEventCountPastSixMonth(eventOrganizerAdmin.getId());
			//Find total attendees
			Integer attendees = 0;
			Integer interestedUsers = 0;
			Integer meetups = 0;
			if(events!=null && !events.isEmpty()){
				attendees = this.eventDAO.getAttendeesCountForEvents(events);
				interestedUsers = this.eventDAO.getInterestedUsersCountForEvents(events);
				meetups = this.eventDAO.getMeetupsAtEvents(events);
				dashboardResponse.setEvents(events.size());
				dashboardResponse.setInterestedUsers(interestedUsers);
				dashboardResponse.setRegisteredUsers(attendees);
				dashboardResponse.setMeetups(meetups);
			}
			
		}
		
		/*List<UserMessage> messages = this.userDAO.getUnreadMessages(userId);
		dashboardResponse.setMessages(messages);*/
		
		return dashboardResponse;
	}
	
	@Override
	public EODashboardResponse getAttendeesByMonth(Long userId) {
		EODashboardResponse dashboardResponse = new EODashboardResponse();
		EventOrganizerAdmin eventOrganizerAdmin = this.getEOAdminByUserId(userId);
		if(eventOrganizerAdmin!=null && eventOrganizerAdmin.getOrganizer()!=null){
			List<AttendeesInMonth> attendeesInMonths = this.eventDAO.getAttendeesByMonth(eventOrganizerAdmin.getId());
			if(attendeesInMonths!=null && !attendeesInMonths.isEmpty()){
				dashboardResponse.setAttendeesInMonths(attendeesInMonths);
			}else{
				dashboardResponse.setAttendeesInMonths(getDefaultData());
			}
		}else{
			
			 dashboardResponse.setAttendeesInMonths(getDefaultData());
		}
		return dashboardResponse;
	}
	
	private List<AttendeesInMonth> getDefaultData(){
		List<AttendeesInMonth> attendeesInMonths = new ArrayList<>();
		 for(int i = 5;i>=1;i--){
		        Calendar cal1 =  Calendar.getInstance();
		        cal1.add(Calendar.MONTH ,-i);
		        //format it to MMM-yyyy // January-2012
		        String previousMonthYear  = new SimpleDateFormat("MMM").format(cal1.getTime());
		        AttendeesInMonth attendeesInMonth = new AttendeesInMonth();
		        attendeesInMonth.setAttendees(0);
		        attendeesInMonth.setMonth(previousMonthYear);
		        attendeesInMonths.add(attendeesInMonth);
		        
	        }
		 return attendeesInMonths;
	}
	
	@Override
	public EventOrganizerAdmin createEOAdmin(
			EventOrganizerAdmin eventOrganizerAdmin) {
		String LOG_PREFIX = "EOAdminServiceImpl-createEOAdmin";
		EventOrganizerAdmin created = this.eventOrganizerDAO.createEOAdmin(eventOrganizerAdmin);
		logInfo(LOG_PREFIX, "Created EO Admin {}", created);
		
		return created;
	}
	
	@Override
	public EventOrganizerAdmin getEOAdminById(Long eoAdminId) {
		String LOG_PREFIX = "EOAdminServiceImpl-getEOAdminById";
		EventOrganizerAdmin organizerAdmin = this.eventOrganizerDAO.getEOAdminProfileById(eoAdminId);
		if(organizerAdmin==null){
			logError(LOG_PREFIX, "No EO Admin found for Id {}", eoAdminId);
			
			throw new EntityNotFoundException(eoAdminId, RestErrorCodes.ERR_020, ERROR_INVALID_EOADMIN_ID);
		}
		return organizerAdmin;
	}
	
	@Override
	public EventOrganizerAdmin getEOAdminByUserId(Long userId) {
		String LOG_PREFIX = "EOAdminServiceImpl-getEOAdminByUserId";
		EventOrganizerAdmin organizerAdmin = this.eventOrganizerDAO.getEOAdminProfileByUserId(userId);
		logInfo(LOG_PREFIX, "OrganizerAdmin Entity for User Id : {} = {}", userId,organizerAdmin);
		return organizerAdmin;
	}
	
	@Override
	public Map<String, ?> getMyEvents(Long userId, String timeline,
			EventStatus status, Integer page) {
		String LOG_PREFIX = "EOAdminServiceImpl-getMyEvents";
		
		List<Event> events = new ArrayList<>();
		Map<String,Object> responseMap = new HashMap<String,Object>();
		EventOrganizerAdmin organizerAdmin = this.eventOrganizerDAO.getEOAdminProfileByUserId(userId);
		if(organizerAdmin==null ){
			throw new ClientException(RestErrorCodes.ERR_004, EO_ERROR_COMPANY_NOT_LINKED);
		}
		if(organizerAdmin.getStatus()!= EOAdminStatus.APPROVED){
			throw new ClientException(RestErrorCodes.ERR_004, EO_ERROR_COMPANY_NOT_APPROVED);
		}
		
		return this.eventOrganizerDAO.getEventsForOrganizer(timeline, status, page, organizerAdmin.getId());
	}
	
	@Override
	public EventResponseForAdmin getEventDetails(String userEmail,
			String eventId) {
		String LOG_PREFIX = "EOAdminServiceImpl-getEventDetails";
		User userInDB = this.userDAO.getUserByEmailId(userEmail, false);
		if(userInDB!=null){
			Set<Role> roles = userInDB.getUserroles();
			for(Role role : roles){
				if(UserRoleType.ADMIN == role.getUserRoleType() || UserRoleType.EVENT_ORGANIZER == role.getUserRoleType()){
					EventResponseForAdmin eventResponseForAdmin = new EventResponseForAdmin();
					Event event = this.eventDAO.getEvent(eventId);
					if(event ==null){
						throw new EntityNotFoundException(eventId,RestErrorCodes.ERR_020, ERROR_INVALID_EVENT_IN_REQUEST);
					}
					
					EventTransformer transformer = (EventTransformer) TransformerFactory.getTransformer(TransformerTypes.EVENT_TRANS);
					EventResponse eventResponse = transformer.transform(event);
					eventResponseForAdmin.setEventResponse(eventResponse);
					
					return eventResponseForAdmin;
				}
			}
		}
		
		throw new UnauthorizedException(RestErrorCodes.ERR_003, ERROR_USER_INVALID);
	}
	
	@Override
	public EventResponseForAdmin getEventStatistics(String userEmail,String eventId) {
		String LOG_PREFIX = "EOAdminServiceImpl-getEventStatistics";
		User userInDB = this.userDAO.getUserByEmailId(userEmail, false);
		if(userInDB!=null){
			Set<Role> roles = userInDB.getUserroles();
			for(Role role : roles){
				if(UserRoleType.ADMIN == role.getUserRoleType() || UserRoleType.EVENT_ORGANIZER == role.getUserRoleType()){
					Event event = this.eventDAO.getEvent(eventId);
					if(event ==null){
						throw new EntityNotFoundException(eventId,RestErrorCodes.ERR_020, ERROR_INVALID_EVENT_IN_REQUEST);
					}
					Date  startDate = event.getEventDetails().getCreateDt(); 
					Date  endDate = event.getEndDate();
					logInfo(LOG_PREFIX, "Getting statistics for event {} from date {} to date {}", event.getUuid(), startDate, endDate);
					Map<String,Integer> eventStatsSummary = this.eventDAO.getEventStatSummary(event);
					
					List<String> dates = getDatesForEventStatistics(startDate, endDate);
					List<DailyEventUserStatistics> dailyEventUserStatistics = this.eventDAO.getEventUsersStatDetails(event, dates);
					List<DailyEventMeetupStatistics> dailyEventMeetupStatistics = this.eventDAO.getEventMeetupsStatDetails(event, dates);
					
					EventResponseForAdmin responseForAdmin = new EventResponseForAdmin();
					responseForAdmin.setTotalInterestedUsers(eventStatsSummary.get("TOTAL_INTERESTED_USERS"));
					responseForAdmin.setTotalRegisteredUsers(eventStatsSummary.get("TOTAL_REGISTERED_USERS"));
					responseForAdmin.setTotalMeetups(eventStatsSummary.get("MEETUPS_AT_EVENT"));
					responseForAdmin.setDailyUserStatistics(dailyEventUserStatistics);
					responseForAdmin.setDailyMeetupStatistics(dailyEventMeetupStatistics);
					return responseForAdmin;
					
				}
			}
		}
		throw new UnauthorizedException(RestErrorCodes.ERR_003, ERROR_USER_INVALID);
	}
	
	private List<String> getDatesForEventStatistics(Date startDate,Date  endDate){
		
		List<Date> dates = new ArrayList<Date>();
		List<String> datesStrings = new ArrayList<>();
		DateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
		long interval = 24*1000 * 60 * 60; // 1 hour in millis
		long endTime =endDate.getTime() ; 
		long curTime = startDate.getTime();
		while (curTime <= endTime) {
		    dates.add(new Date(curTime));
		    curTime += interval;
		}
		for(int i=0;i<dates.size();i++){
		    Date lDate =(Date)dates.get(i);
		    String ds = formatter.format(lDate);    
		    datesStrings.add(ds);
		}
		
		return datesStrings;
	}
	
	 @Override
	public void updateEvent(Long userId,UpdateEventRequest updateEventRequest) {

		 String LOG_PREFIX = "EOAdminServiceImpl-getEventStatistics";
		 Event event = this.eventDAO.getEvent(updateEventRequest.getEventId());
		 if(event == null){
			 throw new ClientException(RestErrorCodes.ERR_001, ERROR_INVALID_EVENT_IN_REQUEST);
		 }
		 
		 EventOrganizerAdmin admin = this.eventOrganizerDAO.getEOAdminProfileByUserId(userId);
		 
		 if(admin==null || event.getEventDetails().getOrganizerAdmin().getId() != admin.getId()){
			 throw new UnauthorizedException(RestErrorCodes.ERR_002, EO_ERROR_INVALID_ADMIN);
		 }
		 
		if(StringUtils.isNotBlank(updateEventRequest.getDescription()) && !StringUtils.equals(event.getDescription(),updateEventRequest.getDescription())){
			event.setDescription(updateEventRequest.getDescription());
		}
		
		if(updateEventRequest.getLocation()!=null && updateEventRequest.getLocation().getName()!=null){
			if(!StringUtils.equals(event.getEventDetails().getLocation().getName(),updateEventRequest.getLocation().getName())){
				event.getEventDetails().setLocation(updateEventRequest.getLocation());
			}
		}
		SimpleDateFormat dateFormat = new SimpleDateFormat(
				Constants.MEETUP_DATE_FORMAT);
		if(StringUtils.isNotBlank(updateEventRequest.getStartDate())){
			
			String startDate = dateFormat.format(event.getStartDate());
			if(!StringUtils.equals(startDate,updateEventRequest.getStartDate())){
				try {
					event.setStartDate(dateFormat.parse(updateEventRequest.getStartDate()));
				} catch (ParseException e) {
					logError(LOG_PREFIX, "Error while parsing event dates {}",
							updateEventRequest);
					throw new ClientException(RestErrorCodes.ERR_001,
							ERROR_DATE_INVALID_FORMAT);
				}
			}
		}
		
		if(StringUtils.isNotBlank(updateEventRequest.getEndDate())){
			
			String endDate = dateFormat.format(event.getEndDate());
			if(!StringUtils.equals(endDate,updateEventRequest.getEndDate())){
				try {
					event.setEndDate(dateFormat.parse(updateEventRequest.getEndDate()));
				} catch (ParseException e) {
					logError(LOG_PREFIX, "Error while parsing event dates {}",
							updateEventRequest);
					throw new ClientException(RestErrorCodes.ERR_001,
							ERROR_DATE_INVALID_FORMAT);
				}
			}
		}
		
		if(updateEventRequest.getIsFree()!=null){
			if(event.getIsFreeEvent()!=updateEventRequest.getIsFree()){
				event.setIsFreeEvent(updateEventRequest.getIsFree());
			}
		}
	}
}
