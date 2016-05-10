package com.bitlogic.sociallbox.service.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.bitlogic.Constants;
import com.bitlogic.sociallbox.data.model.SocialBoxConfig;
import com.bitlogic.sociallbox.data.model.feed.CreateFeedRequest;
import com.bitlogic.sociallbox.service.exception.ClientException;
import com.bitlogic.sociallbox.service.exception.RestErrorCodes;
import com.bitlogic.sociallbox.service.exception.ServiceException;

public class FeedUtils extends LoggingService implements Constants{
private static final Logger LOGGER = LoggerFactory.getLogger(FeedUtils.class);
	
	@Override
	public Logger getLogger() {
		return LOGGER;
	}
	
	public static void send(RestTemplate restTemplate , CreateFeedRequest<?> feed, SocialBoxConfig boxConfig){
		String LOG_PREFIX = "FeedUtils-send";
		
		HttpEntity<CreateFeedRequest<?>> request = new HttpEntity<CreateFeedRequest<?>>(feed);
		String message = LOG_PREFIX + " :: " + "Invoking request to URL = {}";
		LOGGER.info(message, boxConfig.getFeedServiceURL());
		ResponseEntity<String> response = restTemplate.exchange(boxConfig.getFeedServiceURL(), HttpMethod.POST, request, String.class);
		HttpStatus returnStatus = response.getStatusCode();
		boolean isSuccess = returnStatus.is2xxSuccessful();
		if (isSuccess) {
			message = LOG_PREFIX + " :: " + "Feed service returned success response";
			LOGGER.info(message);

		} else {
			if (returnStatus.is4xxClientError()) {
				throw new ClientException(RestErrorCodes.ERR_050,
						Constants.ERROR_FEED_CLIENT_REQUEST);
			} else if (returnStatus.is5xxServerError()) {
				throw new ServiceException(NOTIFICATION_SERVICE_NAME, RestErrorCodes.ERR_010,
						Constants.ERROR_FEED_WEBSERVICE_ERROR);
			}
		}
	}
}
