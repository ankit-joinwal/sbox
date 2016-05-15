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
	
	/**
	 *  @api {get} /FeedService/api/secured/feeds?fromId=:fromId Get Feeds for user
	 *  @apiName Get Feeds for user
	 *  @apiGroup MySociallBox
	 *  @apiParam {Number} fromId Optional Last Recieved Feed Id from previous page results
	 *  @apiHeader {String} accept application/json
	 *  @apiHeader {String} Content-Type application/json
	 *  @apiHeader {Number} X-Auth-Date Current Epoch Date
	 *  @apiHeader {String} Authorization Authentication Token
	 *  @apiHeaderExample {json} Example Headers
	 *  accept: application/json
		Content-Type: application/json
		X-Auth-Date: 1455988523724
		Authorization: Basic U0R+U01BUlRfREVWSUNFXzI6NCtPU3JRN0tKMzZ2TW9iRmoxbmJEZG5ydVVJVTlwTWFVWmN1V0xxaUFaRT0=
	 *  @apiSuccess (Success - OK 200) {Object}  response  Response.
	 *  @apiSuccess (Success - OK 200) {String}  response.status   Eg.Success.
	 * 	@apiSuccess (Success - OK 200) {Object}  response.data Feeds
	 *  @apiSuccessExample {json} Success-Response:
	 *  
		{
			"status": "Success",
			"data": [
				{
					"id": "38dc133a-16b3-11e6-8080-8000070aeb18",
					"actor": "Ankit Joinwal",
					"action": " is going to event ",
					"target": "Puma Flat 40% Off",
					"target_id": "4028918853e672830153e6aec4230000",
					"icon": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xla1/v/t1.0-1/p200x200/12316467_10206731945876364_3008257792416820623_n.jpg?oh=cece300cd2db2d885c81f2c00b6a7d84&oe=578A9FB4&__gda__=1465178287_36f0dafbe70beb7506ebd22f8f089edf",
					"image": "https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/4028918853e672830153e6aec4230000/puma.jpg",
					"type": "GOING_TO_EVENT",
					"time": null
				},
				{
					"id": "26fdb7fe-16b3-11e6-8080-800002988f6d",
					"actor": "Ankit Joinwal",
					"action": "is interested in event ",
					"target": "DISCOVERY One Month Weekend Theatre Workshop-Batch 1",
					"target_id": "2c9f8ff353bd8bf50153bdbcd0840003",
					"icon": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xla1/v/t1.0-1/p200x200/12316467_10206731945876364_3008257792416820623_n.jpg?oh=cece300cd2db2d885c81f2c00b6a7d84&oe=578A9FB4&__gda__=1465178287_36f0dafbe70beb7506ebd22f8f089edf",
					"image": "https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/2c9f8ff353bd8bf50153bdbcd0840003/disc.jpg",
					"type": "INTERESTED_IN_EVENT",
					"time": null
				},
				{
					"id": "199807fe-16b3-11e6-8080-80005b8eb9fb",
					"actor": "Ankit Joinwal",
					"action": "is interested in event ",
					"target": "Eleventh event",
					"target_id": "40289188547cdac501547ce142de0002",
					"icon": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xla1/v/t1.0-1/p200x200/12316467_10206731945876364_3008257792416820623_n.jpg?oh=cece300cd2db2d885c81f2c00b6a7d84&oe=578A9FB4&__gda__=1465178287_36f0dafbe70beb7506ebd22f8f089edf",
					"image": "https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/40289188547cdac501547ce142de0002/party-venue-wicklow.jpg",
					"type": "INTERESTED_IN_EVENT",
					"time": null
				},
				{
					"id": "04634f4c-16b3-11e6-8080-80000fa8ded9",
					"actor": "Ankit Joinwal",
					"action": "posted a photo",
					"target": "School Reunion Meetup 11",
					"target_id": "40289187549ad21201549ad542d80001",
					"icon": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xla1/v/t1.0-1/p200x200/12316467_10206731945876364_3008257792416820623_n.jpg?oh=cece300cd2db2d885c81f2c00b6a7d84&oe=578A9FB4&__gda__=1465178287_36f0dafbe70beb7506ebd22f8f089edf",
					"image": "https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/meetups/40289187549ad21201549ad542d80001/logo.JPG",
					"type": "POSTED_PHOTO_TO_MEETUP",
					"time": null
				},
				{
					"id": "a0c6f06a-16b2-11e6-8080-80000de7cef1",
					"actor": "Ankit Joinwal",
					"action": " created meetup ",
					"target": "School Reunion Meetup 11",
					"target_id": "40289187549ad21201549ad542d80001",
					"icon": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xla1/v/t1.0-1/p200x200/12316467_10206731945876364_3008257792416820623_n.jpg?oh=cece300cd2db2d885c81f2c00b6a7d84&oe=578A9FB4&__gda__=1465178287_36f0dafbe70beb7506ebd22f8f089edf",
					"image": null,
					"type": "CREATED_MEETUP",
					"time": null
				}
			],
			"page": null,
			"nextPage": null,
			"total_records": null
		}
	 */
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
