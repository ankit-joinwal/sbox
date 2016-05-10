package com.bitlogic.sociallbox.feed.service.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.util.concurrent.ListenableFuture;
import org.springframework.util.concurrent.ListenableFutureCallback;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;

import com.bitlogic.Constants;
import com.bitlogic.sociallbox.data.model.feed.CreateFeedRequest;
import com.bitlogic.sociallbox.service.business.FeedService;

@RestController
@RequestMapping("/api/public/feeds")
public class FeedController extends BaseController implements Constants{
	private static final Logger LOGGER = LoggerFactory.getLogger(FeedController.class);
	private static final String CREATE_FEEDS_API = "CreateFeeds API";
	
	@Override
	public Logger getLogger() {
		return LOGGER;
	}
	
	@Autowired
	private FeedService feedService;
	
	@Async
	@RequestMapping(method= RequestMethod.POST, produces = {
			MediaType.APPLICATION_JSON_VALUE}, consumes = {
			MediaType.APPLICATION_JSON_VALUE })
	@ResponseStatus(HttpStatus.CREATED)
	public DeferredResult<ResponseEntity<?>> sendNotifications(@RequestBody final CreateFeedRequest<?> createFeedRequest){
		logRequestStart(CREATE_FEEDS_API, SECURED_REQUEST_START_LOG_MESSAGE, CREATE_FEEDS_API);
		final DeferredResult<ResponseEntity<?>> deferredResult = new DeferredResult<>();
		logInfo(CREATE_FEEDS_API, "Feed Request : {}", createFeedRequest);
		ListenableFuture<String> futureResponse = this.feedService.createFeeds(createFeedRequest);
		
		futureResponse.addCallback(new ListenableFutureCallback<String>() {
			
			@Override
			public void onSuccess(String arg0) {
				logInfo(CREATE_FEEDS_API, "Feed Creation Task completed successfully for request {}", createFeedRequest);
			}
			
			@Override
			public void onFailure(Throwable arg0) {
				logInfo(CREATE_FEEDS_API, "Feed Creation Task failed for request {} ", createFeedRequest,arg0);
			}
			
		});
		ResponseEntity<String> responseEntity = new ResponseEntity<>(
				"Request accepted succesfully", HttpStatus.OK);
		deferredResult.setResult(responseEntity);
		return deferredResult;
	}
}
