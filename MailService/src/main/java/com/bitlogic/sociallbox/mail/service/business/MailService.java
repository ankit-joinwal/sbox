package com.bitlogic.sociallbox.mail.service.business;

import java.util.Map;

import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.util.concurrent.ListenableFuture;

import com.bitlogic.sociallbox.mail.service.model.Mail;


/**
 * Service to send mail using smtp.
 * Requires configuration of {@link JavaMailSenderImpl} to be done in spring configuration file.
 * 
 * @author Ankit.Joinwal
 *
 */
public interface MailService {

	/** Sends mail 
	 * @param mail 
	 * @param model : map containing values for tokens defined in mail templates.
	 */
	public ListenableFuture<String> sendMail(final Mail mail,final Map<String,Object> model);
}
