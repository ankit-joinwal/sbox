package com.bitlogic.sociallbox.feed.service.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.bitlogic.Constants;
import com.bitlogic.sociallbox.data.model.UserTypeBasedOnDevice;
import com.bitlogic.sociallbox.data.model.feed.UserFeed;
import com.bitlogic.sociallbox.data.model.response.EntityCollectionResponse;
import com.bitlogic.sociallbox.feed.service.exception.ClientException;
import com.bitlogic.sociallbox.feed.service.exception.RestErrorCodes;
import com.bitlogic.sociallbox.feed.service.utils.LoginUtil;
import com.bitlogic.sociallbox.service.business.FeedService;

@RestController
@RequestMapping("/api/secured/feeds")
public class FeedSecuredController extends BaseController implements Constants{

	private static final Logger LOGGER = LoggerFactory.getLogger(FeedSecuredController.class);
	private static final String GET_FEEDS_API = "GetFeedsForUser API";
	
	@Override
	public Logger getLogger() {
		return LOGGER;
	}
	
	@Autowired
	private FeedService feedService;
	
	@RequestMapping( method = RequestMethod.GET, produces = {
			MediaType.APPLICATION_JSON_VALUE})
	@ResponseStatus(HttpStatus.OK)
	public EntityCollectionResponse<UserFeed> getPendingMeetups(
			@RequestHeader(value = Constants.AUTHORIZATION_HEADER) String auth,
			@RequestParam(required=false,value="fromId") String fromId ){
		
		logRequestStart(fromId, SECURED_REQUEST_START_LOG_MESSAGE, GET_FEEDS_API);
		String userName = LoginUtil.getUserNameFromHeader(auth);
		UserTypeBasedOnDevice typeBasedOnDevice = LoginUtil
				.identifyUserType(userName);
		if (typeBasedOnDevice == UserTypeBasedOnDevice.MOBILE) {
			String deviceId = LoginUtil.getDeviceIdFromUserName(userName);
			List<UserFeed> feeds = this.feedService.getFeedsForUser(deviceId, fromId, FEEDS_PER_PAGE);
			EntityCollectionResponse<UserFeed> collectionResponse = new EntityCollectionResponse<>();
			collectionResponse.setData(feeds);
			collectionResponse.setStatus(SUCCESS_STATUS);
			return collectionResponse;
		}else {
			logRequestEnd(GET_FEEDS_API, GET_FEEDS_API);
			throw new ClientException(RestErrorCodes.ERR_003,
					ERROR_FEATURE_AVAILABLE_TO_MOBILE_ONLY);
		}
	}
}
