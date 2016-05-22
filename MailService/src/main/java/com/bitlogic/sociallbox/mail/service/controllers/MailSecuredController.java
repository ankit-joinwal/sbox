package com.bitlogic.sociallbox.mail.service.controllers;

import java.io.File;
import java.net.MalformedURLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
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
import com.bitlogic.sociallbox.data.model.mail.MailImage;
import com.bitlogic.sociallbox.data.model.mail.MailImage.ImageType;
import com.bitlogic.sociallbox.data.model.mail.SendMailRequest;
import com.bitlogic.sociallbox.mail.service.business.MailService;
import com.bitlogic.sociallbox.mail.service.model.Mail;

@RestController
@RequestMapping("/api/secured/mail")
public class MailSecuredController extends BaseController implements Constants {
	private static final Logger LOGGER = LoggerFactory
			.getLogger(MailSecuredController.class);
	private static final String MAIL_API = "SendMail API";

	@Override
	public Logger getLogger() {
		return LOGGER;
	}

	@Autowired
	private MailService mailService;

	@Async
	@RequestMapping(method = RequestMethod.POST, produces = { MediaType.APPLICATION_JSON_VALUE }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	@ResponseStatus(HttpStatus.CREATED)
	public DeferredResult<ResponseEntity<?>> sendMail(
			final @RequestBody SendMailRequest mailRequest) {
		logInfo(MAIL_API, SECURED_REQUEST_START_LOG_MESSAGE, MAIL_API);
		logInfo(MAIL_API, "MailRequest : {}", mailRequest);
		final DeferredResult<ResponseEntity<?>> deferredResult = new DeferredResult<>();

		Mail mail = new Mail();
		mail.setMailFrom(mailRequest.getMailFrom());
		mail.setMailRecipients(mailRequest.getMailRecipients());
		mail.setMailCc(mailRequest.getMailCc());
		mail.setMailBcc(mailRequest.getMailBcc());
		mail.setSenderName(mailRequest.getSenderName());
		mail.setTemplateName(mailRequest.getTemplateName());
		mail.setMailSubject(mailRequest.getMailSubject());

		List<MailImage> mailImages = mailRequest.getImages();
		Map<String, Resource> imageResources = new HashMap<>();
		for (MailImage mailImage : mailImages) {
			Resource resource;
			if (mailImage.getImageType() == ImageType.URL) {
				try {
					resource = new UrlResource(mailImage.getPath());
					imageResources.put(mailImage.getName(), resource);
				} catch (MalformedURLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}

			} else if (mailImage.getImageType() == ImageType.CLASSPATH) {
				resource = new ClassPathResource(mailImage.getPath());
				imageResources.put(mailImage.getName(), resource);
			} else if (mailImage.getImageType() == ImageType.FILESYSTEM) {
				resource = new FileSystemResource(new File(mailImage.getPath()));
				imageResources.put(mailImage.getName(), resource);
			}
		}
		mail.setInlineImages(imageResources);
		ListenableFuture<String> futureResponse = this.mailService.sendMail(
				mail, mailRequest.getParams());
		futureResponse.addCallback(new ListenableFutureCallback<String>() {

			@Override
			public void onSuccess(String arg0) {
				logInfo(MAIL_API,
						"Mail Send Task completed successfully for mail {}",
						mailRequest);
			}

			@Override
			public void onFailure(Throwable arg0) {
				logInfo(MAIL_API,
						"Mail Task failed for mail {}",
						mailRequest);
			}

		});
		ResponseEntity<String> responseEntity = new ResponseEntity<>(
				"Send Mail accepted succesfully", HttpStatus.OK);
		deferredResult.setResult(responseEntity);
		return deferredResult;
	}
}
