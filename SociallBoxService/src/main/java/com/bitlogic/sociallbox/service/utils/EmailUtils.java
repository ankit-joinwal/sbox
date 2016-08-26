package com.bitlogic.sociallbox.service.utils;

import static com.bitlogic.Constants.COMMA;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.bitlogic.Constants;
import com.bitlogic.sociallbox.data.model.CompanyEmailVerificationToken;
import com.bitlogic.sociallbox.data.model.Event;
import com.bitlogic.sociallbox.data.model.EventOrganizerAdmin;
import com.bitlogic.sociallbox.data.model.SocialBoxConfig;
import com.bitlogic.sociallbox.data.model.User;
import com.bitlogic.sociallbox.data.model.UserEmailVerificationToken;
import com.bitlogic.sociallbox.data.model.mail.MailResource;
import com.bitlogic.sociallbox.data.model.mail.MailResource.ResourceType;
import com.bitlogic.sociallbox.data.model.mail.SendMailRequest;
import com.bitlogic.sociallbox.service.exception.ClientException;
import com.bitlogic.sociallbox.service.exception.RestErrorCodes;
import com.bitlogic.sociallbox.service.exception.ServiceException;
import com.bitlogic.sociallbox.service.helper.AuthHeaderGenerator;

public class EmailUtils extends LoggingService implements Constants{

	private static final Logger LOGGER = LoggerFactory.getLogger(EmailUtils.class);
	
	@Override
	public Logger getLogger() {
		return LOGGER;
	}
	
	public static void sendEmailVerification(RestTemplate restTemplate,UserEmailVerificationToken token , SocialBoxConfig config,MessageSource messageSource){
		String LOG_PREFIX = "EmailUtils-sendEmailVerification";
		
		Locale currentLocale = LocaleContextHolder.getLocale();
		String subject = messageSource.getMessage(EMAIL_VERIFICATION_SUBJECT, null,
				currentLocale);
		MailResource mailImage = new MailResource();
		mailImage.setResourceType(ResourceType.CLASSPATH);
		mailImage.setName("sociallbox");
		mailImage.setPath(Constants.EMAIL_LOGO_PATH);
		List<MailResource> mailImages = Arrays.asList(mailImage);
		

		Map<String,Object> mailParams = new HashMap<>();
		mailParams.put(Constants.EMAIL_VERIFY_LINK_PARAM, token.getConfirmationLink());
		mailParams.put(Constants.EMAIL_EVENT_ORGANIZER_NAME_PARAM, token.getUser().getName());
		SendMailRequest mailRequest = new SendMailRequest();
		mailRequest.setMailRecipients(new String[]{token.getUser().getEmailId()});
		mailRequest.setMailFrom(config.getEmailVerifySender());
		if(StringUtils.isNotBlank(config.getEmailVerifyCC())){
			mailRequest.setMailCc(new String[]{config.getEmailVerifyCC()});
		}
		if(StringUtils.isNotBlank(config.getEmailVerifyBCC())){
			mailRequest.setMailBcc(config.getEmailVerifyBCC().split(COMMA));
		}
		mailRequest.setMailSubject(subject);
		mailRequest.setSenderName(config.getEmailVerifySenderName());
		mailRequest.setTemplateName(Constants.EMAIL_VERIF_TEMPLATE_NAME);
		mailRequest.setImages(mailImages);
		mailRequest.setParams(mailParams);
		
		Map<String,String> authMap = AuthHeaderGenerator.generateHeaderForISA(config.getIsaUserName(), config.getIsaPassword());
		
		MultiValueMap<String, String> headers = new LinkedMultiValueMap<String, String>();
		headers.add(Constants.AUTHORIZATION_HEADER, authMap.get(AUTHORIZATION_HEADER));
		headers.add(Constants.AUTH_DATE_HEADER, authMap.get(Constants.AUTH_DATE_HEADER));
		
		headers.add("Content-Type", MediaType.APPLICATION_JSON_VALUE.toString());
		headers.add("Accept", MediaType.APPLICATION_JSON_VALUE.toString());
		

		HttpEntity<SendMailRequest> request = new HttpEntity<SendMailRequest>(mailRequest,headers);
		String message = LOG_PREFIX + " :: " + "Invoking request to URL = {}";
		LOGGER.info(message, config.getEmailServiceURL());
		ResponseEntity<String> response = restTemplate.exchange(config.getEmailServiceURL(), HttpMethod.POST, request, String.class);
		
		HttpStatus returnStatus = response.getStatusCode();
		boolean isSuccess = returnStatus.is2xxSuccessful();
		if (isSuccess) {
			message = LOG_PREFIX + " :: " + "Search returned success response";
			LOGGER.info(message);

		} else {
			if (returnStatus.is4xxClientError()) {
				throw new ClientException(RestErrorCodes.ERR_050,
						Constants.ERROR_EMAIL_CLIENT_REQUEST);
			} else if (returnStatus.is5xxServerError()) {
				throw new ServiceException(EMAIL_SERVICE_NAME, RestErrorCodes.ERR_010,
						Constants.ERROR_EMAIL_WEBSERVICE_ERROR);
			}
		}
	}
	
	public static void sendEventApprovalNotification(RestTemplate restTemplate,Event event, SocialBoxConfig config,MessageSource messageSource){
		String LOG_PREFIX = "EmailUtils-sendEmailVerification";
		
		Locale currentLocale = LocaleContextHolder.getLocale();
		String subject = String.format(messageSource.getMessage(EVENT_APPROVED_SUBJECT, null,
				currentLocale),event.getTitle());
		MailResource mailImage = new MailResource();
		mailImage.setResourceType(ResourceType.CLASSPATH);
		mailImage.setName("sociallbox");
		mailImage.setPath(Constants.EMAIL_LOGO_PATH);
		
	
		
		List<MailResource> mailImages = Arrays.asList(mailImage);
		

		Map<String,Object> mailParams = new HashMap<>();
		mailParams.put(Constants.EMAIL_VERIFY_LINK_PARAM, config.getEoHomeUrl());
		mailParams.put(Constants.EMAIL_EVENT_ORGANIZER_NAME_PARAM, event.getEventDetails().getOrganizerAdmin().getUser().getName());
		mailParams.put(Constants.EMAIL_EVENT_NAME_PARAM, event.getTitle());
		SendMailRequest mailRequest = new SendMailRequest();
		mailRequest.setMailRecipients(new String[]{event.getEventDetails().getOrganizerAdmin().getOrganizer().getEmailId()});
		mailRequest.setMailFrom(config.getEmailVerifySender());
		if(StringUtils.isNotBlank(config.getEmailVerifyCC())){
			mailRequest.setMailCc(new String[]{config.getEmailVerifyCC()});
		}
		if(StringUtils.isNotBlank(config.getEmailVerifyBCC())){
			mailRequest.setMailBcc(config.getEmailVerifyBCC().split(COMMA));
		}
		mailRequest.setMailSubject(subject);
		mailRequest.setSenderName(config.getEmailVerifySenderName());
		mailRequest.setTemplateName(Constants.EVENT_APPROVED_TEMPLATE_NAME);
		mailRequest.setImages(mailImages);
		mailRequest.setParams(mailParams);
		
		Map<String,String> authMap = AuthHeaderGenerator.generateHeaderForISA(config.getIsaUserName(), config.getIsaPassword());
		
		MultiValueMap<String, String> headers = new LinkedMultiValueMap<String, String>();
		headers.add(Constants.AUTHORIZATION_HEADER, authMap.get(AUTHORIZATION_HEADER));
		headers.add(Constants.AUTH_DATE_HEADER, authMap.get(Constants.AUTH_DATE_HEADER));
		
		headers.add("Content-Type", MediaType.APPLICATION_JSON_VALUE.toString());
		headers.add("Accept", MediaType.APPLICATION_JSON_VALUE.toString());
		

		HttpEntity<SendMailRequest> request = new HttpEntity<SendMailRequest>(mailRequest,headers);
		String message = LOG_PREFIX + " :: " + "Invoking request to URL = {}";
		LOGGER.info(message, config.getEmailServiceURL());
		ResponseEntity<String> response = restTemplate.exchange(config.getEmailServiceURL(), HttpMethod.POST, request, String.class);
		
		HttpStatus returnStatus = response.getStatusCode();
		boolean isSuccess = returnStatus.is2xxSuccessful();
		if (isSuccess) {
			message = LOG_PREFIX + " :: " + "Search returned success response";
			LOGGER.info(message);

		} else {
			if (returnStatus.is4xxClientError()) {
				throw new ClientException(RestErrorCodes.ERR_050,
						Constants.ERROR_EMAIL_CLIENT_REQUEST);
			} else if (returnStatus.is5xxServerError()) {
				throw new ServiceException(EMAIL_SERVICE_NAME, RestErrorCodes.ERR_010,
						Constants.ERROR_EMAIL_WEBSERVICE_ERROR);
			}
		}
	}
	
	public static void sendCompanyApprovalNotification(RestTemplate restTemplate,EventOrganizerAdmin admin, SocialBoxConfig config,MessageSource messageSource){
		String LOG_PREFIX = "EmailUtils-sendCompanyApprovalNotification";
		
		Locale currentLocale = LocaleContextHolder.getLocale();
		String subject = messageSource.getMessage(PROFILE_APPROVED_SUBJECT, null,currentLocale);
		MailResource mailImage = new MailResource();
		mailImage.setResourceType(ResourceType.CLASSPATH);
		mailImage.setName("sociallbox");
		mailImage.setPath(Constants.EMAIL_LOGO_PATH);
		
		List<MailResource> mailImages = Arrays.asList(mailImage);
		

		Map<String,Object> mailParams = new HashMap<>();
		mailParams.put(Constants.EMAIL_VERIFY_LINK_PARAM, config.getEoHomeUrl());
		mailParams.put(Constants.EMAIL_EVENT_ORGANIZER_NAME_PARAM, admin.getUser().getName());
		mailParams.put(Constants.EMAIL_PROFILE_APPROVED_NAME_PARAM, admin.getOrganizer().getName());
		SendMailRequest mailRequest = new SendMailRequest();
		mailRequest.setMailRecipients(new String[]{admin.getOrganizer().getEmailId()});
		mailRequest.setMailFrom(config.getEmailVerifySender());
		if(StringUtils.isNotBlank(config.getEmailVerifyCC())){
			mailRequest.setMailCc(new String[]{config.getEmailVerifyCC()});
		}
		if(StringUtils.isNotBlank(config.getEmailVerifyBCC())){
			mailRequest.setMailBcc(config.getEmailVerifyBCC().split(COMMA));
		}
		mailRequest.setMailSubject(subject);
		mailRequest.setSenderName(config.getEmailVerifySenderName());
		mailRequest.setTemplateName(Constants.COMPANY_APPROVED_TEMPLATE_NAME);
		mailRequest.setImages(mailImages);
		mailRequest.setParams(mailParams);
		
		Map<String,String> authMap = AuthHeaderGenerator.generateHeaderForISA(config.getIsaUserName(), config.getIsaPassword());
		
		MultiValueMap<String, String> headers = new LinkedMultiValueMap<String, String>();
		headers.add(Constants.AUTHORIZATION_HEADER, authMap.get(AUTHORIZATION_HEADER));
		headers.add(Constants.AUTH_DATE_HEADER, authMap.get(Constants.AUTH_DATE_HEADER));
		
		headers.add("Content-Type", MediaType.APPLICATION_JSON_VALUE.toString());
		headers.add("Accept", MediaType.APPLICATION_JSON_VALUE.toString());
		

		HttpEntity<SendMailRequest> request = new HttpEntity<SendMailRequest>(mailRequest,headers);
		String message = LOG_PREFIX + " :: " + "Invoking request to URL = {}";
		LOGGER.info(message, config.getEmailServiceURL());
		ResponseEntity<String> response = restTemplate.exchange(config.getEmailServiceURL(), HttpMethod.POST, request, String.class);
		
		HttpStatus returnStatus = response.getStatusCode();
		boolean isSuccess = returnStatus.is2xxSuccessful();
		if (isSuccess) {
			message = LOG_PREFIX + " :: " + "Search returned success response";
			LOGGER.info(message);

		} else {
			if (returnStatus.is4xxClientError()) {
				throw new ClientException(RestErrorCodes.ERR_050,
						Constants.ERROR_EMAIL_CLIENT_REQUEST);
			} else if (returnStatus.is5xxServerError()) {
				throw new ServiceException(EMAIL_SERVICE_NAME, RestErrorCodes.ERR_010,
						Constants.ERROR_EMAIL_WEBSERVICE_ERROR);
			}
		}
	}
	
	public static void sendCompanyEmailVerification(RestTemplate restTemplate,CompanyEmailVerificationToken token , SocialBoxConfig config,MessageSource messageSource){
		String LOG_PREFIX = "EmailUtils-sendEmailVerification";
		
		Locale currentLocale = LocaleContextHolder.getLocale();
		String subject = messageSource.getMessage(EMAIL_VERIFICATION_SUBJECT, null,
				currentLocale);
		MailResource mailImage = new MailResource();
		mailImage.setResourceType(ResourceType.CLASSPATH);
		mailImage.setName("sociallbox");
		mailImage.setPath(Constants.EMAIL_LOGO_PATH);
		List<MailResource> mailImages = Arrays.asList(mailImage);
		

		Map<String,Object> mailParams = new HashMap<>();
		mailParams.put(Constants.EMAIL_VERIFY_LINK_PARAM, token.getConfirmationLink());
		mailParams.put(Constants.EMAIL_EVENT_ORGANIZER_NAME_PARAM, token.getOrganizer().getName());
		SendMailRequest mailRequest = new SendMailRequest();
		mailRequest.setMailRecipients(new String[]{token.getOrganizer().getEmailId()});
		mailRequest.setMailFrom(config.getEmailVerifySender());
		if(StringUtils.isNotBlank(config.getEmailVerifyCC())){
			mailRequest.setMailCc(new String[]{config.getEmailVerifyCC()});
		}
		if(StringUtils.isNotBlank(config.getEmailVerifyBCC())){
			mailRequest.setMailBcc(config.getEmailVerifyBCC().split(COMMA));
		}
		mailRequest.setMailSubject(subject);
		mailRequest.setSenderName(config.getEmailVerifySenderName());
		mailRequest.setTemplateName(Constants.EMAIL_VERIF_TEMPLATE_NAME);
		mailRequest.setImages(mailImages);
		mailRequest.setParams(mailParams);
		
		Map<String,String> authMap = AuthHeaderGenerator.generateHeaderForISA(config.getIsaUserName(), config.getIsaPassword());
		
		MultiValueMap<String, String> headers = new LinkedMultiValueMap<String, String>();
		headers.add(Constants.AUTHORIZATION_HEADER, authMap.get(AUTHORIZATION_HEADER));
		headers.add(Constants.AUTH_DATE_HEADER, authMap.get(Constants.AUTH_DATE_HEADER));
		
		headers.add("Content-Type", MediaType.APPLICATION_JSON_VALUE.toString());
		headers.add("Accept", MediaType.APPLICATION_JSON_VALUE.toString());
		

		HttpEntity<SendMailRequest> request = new HttpEntity<SendMailRequest>(mailRequest,headers);
		String message = LOG_PREFIX + " :: " + "Invoking request to URL = {}";
		LOGGER.info(message, config.getEmailServiceURL());
		ResponseEntity<String> response = restTemplate.exchange(config.getEmailServiceURL(), HttpMethod.POST, request, String.class);
		
		HttpStatus returnStatus = response.getStatusCode();
		boolean isSuccess = returnStatus.is2xxSuccessful();
		if (isSuccess) {
			message = LOG_PREFIX + " :: " + "Search returned success response";
			LOGGER.info(message);

		} else {
			if (returnStatus.is4xxClientError()) {
				throw new ClientException(RestErrorCodes.ERR_050,
						Constants.ERROR_EMAIL_CLIENT_REQUEST);
			} else if (returnStatus.is5xxServerError()) {
				throw new ServiceException(EMAIL_SERVICE_NAME, RestErrorCodes.ERR_010,
						Constants.ERROR_EMAIL_WEBSERVICE_ERROR);
			}
		}
	}
	
	public static void sendPassResetEmail(RestTemplate restTemplate,User user,String resetLink, SocialBoxConfig config,MessageSource messageSource){
		String LOG_PREFIX = "EmailUtils-sendEmailVerification";
		
		Locale currentLocale = LocaleContextHolder.getLocale();
		String subject = messageSource.getMessage(PASS_RESET_EMAIL_SUBJECT, null,
				currentLocale);
		MailResource mailImage = new MailResource();
		mailImage.setResourceType(ResourceType.CLASSPATH);
		mailImage.setName("sociallbox");
		mailImage.setPath(Constants.EMAIL_LOGO_PATH);
		List<MailResource> mailImages = Arrays.asList(mailImage);
		

		Map<String,Object> mailParams = new HashMap<>();
		mailParams.put(Constants.EMAIL_VERIFY_LINK_PARAM, resetLink);
		mailParams.put(Constants.EMAIL_EVENT_ORGANIZER_NAME_PARAM, user.getName());
		SendMailRequest mailRequest = new SendMailRequest();
		mailRequest.setMailRecipients(new String[]{user.getEmailId()});
		mailRequest.setMailFrom(config.getEmailVerifySender());
		if(StringUtils.isNotBlank(config.getEmailVerifyCC())){
			mailRequest.setMailCc(new String[]{config.getEmailVerifyCC()});
		}
		if(StringUtils.isNotBlank(config.getEmailVerifyBCC())){
			mailRequest.setMailBcc(config.getEmailVerifyBCC().split(COMMA));
		}
		mailRequest.setMailSubject(subject);
		mailRequest.setSenderName(config.getEmailVerifySenderName());
		mailRequest.setTemplateName(Constants.EMAIL_RESET_PASS_TEMPLATE_NAME);
		mailRequest.setImages(mailImages);
		mailRequest.setParams(mailParams);
		
		Map<String,String> authMap = AuthHeaderGenerator.generateHeaderForISA(config.getIsaUserName(), config.getIsaPassword());
		
		MultiValueMap<String, String> headers = new LinkedMultiValueMap<String, String>();
		headers.add(Constants.AUTHORIZATION_HEADER, authMap.get(AUTHORIZATION_HEADER));
		headers.add(Constants.AUTH_DATE_HEADER, authMap.get(Constants.AUTH_DATE_HEADER));
		
		headers.add("Content-Type", MediaType.APPLICATION_JSON_VALUE.toString());
		headers.add("Accept", MediaType.APPLICATION_JSON_VALUE.toString());
		

		HttpEntity<SendMailRequest> request = new HttpEntity<SendMailRequest>(mailRequest,headers);
		String message = LOG_PREFIX + " :: " + "Invoking request to URL = {}";
		LOGGER.info(message, config.getEmailServiceURL());
		ResponseEntity<String> response = restTemplate.exchange(config.getEmailServiceURL(), HttpMethod.POST, request, String.class);
		
		HttpStatus returnStatus = response.getStatusCode();
		boolean isSuccess = returnStatus.is2xxSuccessful();
		if (isSuccess) {
			message = LOG_PREFIX + " :: " + "Search returned success response";
			LOGGER.info(message);

		} else {
			if (returnStatus.is4xxClientError()) {
				throw new ClientException(RestErrorCodes.ERR_050,
						Constants.ERROR_EMAIL_CLIENT_REQUEST);
			} else if (returnStatus.is5xxServerError()) {
				throw new ServiceException(EMAIL_SERVICE_NAME, RestErrorCodes.ERR_010,
						Constants.ERROR_EMAIL_WEBSERVICE_ERROR);
			}
		}
	}
}
