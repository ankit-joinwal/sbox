package com.bitlogic.sociallbox.mail.service.business.impl;

import java.util.Map;
import java.util.Set;

import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.apache.velocity.app.VelocityEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.scheduling.annotation.AsyncResult;
import org.springframework.stereotype.Service;
import org.springframework.ui.velocity.VelocityEngineUtils;
import org.springframework.util.concurrent.ListenableFuture;

import com.bitlogic.sociallbox.mail.service.business.MailService;
import com.bitlogic.sociallbox.mail.service.model.Mail;

@Service("mailService")
public class MIMEMailServiceImpl implements MailService {

	@Autowired
	private JavaMailSender mailSender;
	@Autowired
	private VelocityEngine velocityEngine;

	private static final String MAIL_TEMPLATES_DIR = "./templates/";

	public ListenableFuture<String> sendMail(final Mail mail, final Map<String, Object> model) {
		validateMail(mail);
		MimeMessagePreparator preparator = new MimeMessagePreparator() {

			public void prepare(MimeMessage mimeMessage) throws Exception {
				MimeMessageHelper messageHelper = new MimeMessageHelper(
						mimeMessage, true);
				messageHelper.setTo(mail.getMailRecipients());
				messageHelper.setFrom(new InternetAddress(mail.getMailFrom(), "SociallBox Team"));
				messageHelper.setSubject(mail.getMailSubject());
				if (mail.getMailCc() != null && mail.getMailCc().length>0) {
					messageHelper.setCc(mail.getMailCc());
				}
				if (mail.getMailBcc() != null && mail.getMailBcc().length > 0) {
					messageHelper.setBcc(mail.getMailBcc());
				}

				String text = VelocityEngineUtils.mergeTemplateIntoString(
						velocityEngine,
						MAIL_TEMPLATES_DIR + mail.getTemplateName(),"UTF-8", model);
				messageHelper.setText(text, true);

				// check if there are any inline images?
				if (mail.getInlineImages() != null) {
					Set<Map.Entry<String, Resource>> entrySet = mail
							.getInlineImages().entrySet();
					for (Map.Entry<String, Resource> entry : entrySet) {
						if (entry.getValue() != null) {
							messageHelper.addInline(entry.getKey(),
									entry.getValue());
						}
					}
				}
			}
		};

		this.mailSender.send(preparator);
		return new AsyncResult<String>("Mail sent successfully");
	}

	private void validateMail(Mail mail) {
		if (mail == null)
			throw new IllegalArgumentException("Mail cannot be null.");
		else if (isEmpty(mail.getMailRecipients()))
			throw new IllegalArgumentException(
					"Mail recipients cannot be empty.");
		else if (isEmpty(mail.getMailFrom()))
			throw new IllegalArgumentException("Mail sender cannot be empty.");
		else if (isEmpty(mail.getMailSubject()))
			throw new IllegalArgumentException("Mail subject cannot be empty.");
		else if (isEmpty(mail.getTemplateName()))
			throw new IllegalArgumentException("Mail template cannot be blank.");
	}

	private boolean isEmpty(String value) {
		if (value == null || value.trim().length() == 0)
			return true;
		else
			return false;
	}

	private boolean isEmpty(String[] input) {
		if (input == null || input.length == 0)
			return true;
		else
			return false;
	}

	public void setMailSender(JavaMailSender mailSender) {
		this.mailSender = mailSender;
	}

	public void setVelocityEngine(VelocityEngine velocityEngine) {
		this.velocityEngine = velocityEngine;
	}

}
