package com.bitlogic.sociallbox.service.utils;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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
import com.bitlogic.sociallbox.data.model.UserEmailVerificationToken;
import com.bitlogic.sociallbox.data.model.SocialBoxConfig;
import com.bitlogic.sociallbox.data.model.mail.MailImage;
import com.bitlogic.sociallbox.data.model.mail.MailImage.ImageType;
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
		MailImage mailImage = new MailImage();
		mailImage.setImageType(ImageType.CLASSPATH);
		mailImage.setName("sociallbox");
		mailImage.setPath(Constants.EMAIL_LOGO_PATH);
		List<MailImage> mailImages = Arrays.asList(mailImage);
		

		Map<String,Object> mailParams = new HashMap<>();
		mailParams.put(Constants.EMAIL_VERIFY_LINK_PARAM, token.getConfirmationLink());
		
		SendMailRequest mailRequest = new SendMailRequest();
		mailRequest.setMailRecipients(new String[]{token.getUser().getEmailId()});
		mailRequest.setMailFrom(config.getEmailVerifySender());
		if(StringUtils.isNotBlank(config.getEmailVerifyCC())){
			mailRequest.setMailCc(new String[]{config.getEmailVerifyCC()});
		}
		if(StringUtils.isNotBlank(config.getEmailVerifyBCC())){
			mailRequest.setMailBcc(new String[]{config.getEmailVerifyBCC()});
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
	
	public static void sendCompanyEmailVerification(RestTemplate restTemplate,CompanyEmailVerificationToken token , SocialBoxConfig config,MessageSource messageSource){
		String LOG_PREFIX = "EmailUtils-sendEmailVerification";
		
		Locale currentLocale = LocaleContextHolder.getLocale();
		String subject = messageSource.getMessage(EMAIL_VERIFICATION_SUBJECT, null,
				currentLocale);
		MailImage mailImage = new MailImage();
		mailImage.setImageType(ImageType.CLASSPATH);
		mailImage.setName("sociallbox");
		mailImage.setPath(Constants.EMAIL_LOGO_PATH);
		List<MailImage> mailImages = Arrays.asList(mailImage);
		

		Map<String,Object> mailParams = new HashMap<>();
		mailParams.put(Constants.EMAIL_VERIFY_LINK_PARAM, token.getConfirmationLink());
		
		SendMailRequest mailRequest = new SendMailRequest();
		mailRequest.setMailRecipients(new String[]{token.getOrganizer().getEmailId()});
		mailRequest.setMailFrom(config.getEmailVerifySender());
		if(StringUtils.isNotBlank(config.getEmailVerifyCC())){
			mailRequest.setMailCc(new String[]{config.getEmailVerifyCC()});
		}
		if(StringUtils.isNotBlank(config.getEmailVerifyBCC())){
			mailRequest.setMailBcc(new String[]{config.getEmailVerifyBCC()});
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
}