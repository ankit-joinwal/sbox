package com.bitlogic.sociallbox.mail.service.model;

import java.util.Arrays;
import java.util.Date;
import java.util.Map;

import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;

public class Mail {

	private String[] mailRecipients;

	private String mailFrom;

	private String senderName;

	private String[] mailCc;

	private String[] mailBcc;

	private String mailSubject;

	private String templateName;

	private Map<String, Resource> inlineImages;

	public Mail() {

	}

	public Map<String, Resource> getInlineImages() {
		return inlineImages;
	}

	/**
	 * @param inlineImages
	 * Key value pairs for inline images corresponding to images used in email template.
	 * For an image added to template as cid:image1 ,
	 * put an entry in map as map.put("image1",fileSysRes);
	 * Note: this will be used only in case of {@link MIMEMailServiceImpl}
	 */
	public void setInlineImages(Map<String, Resource> inlineImages) {
		this.inlineImages = inlineImages;
	}

	public String getTemplateName() {
		return templateName;
	}

	public void setTemplateName(String templateName) {
		this.templateName = templateName;
	}

	public String getMailFrom() {
		return mailFrom;
	}

	public void setMailFrom(String mailFrom) {
		this.mailFrom = mailFrom;
	}

	public String getSenderName() {
		return senderName;
	}

	public void setSenderName(String senderName) {
		this.senderName = senderName;
	}

	public String getMailSubject() {
		return mailSubject;
	}

	public void setMailSubject(String mailSubject) {
		this.mailSubject = mailSubject;
	}

	public String[] getMailCc() {
		return mailCc;
	}

	public void setMailCc(String[] mailCc) {
		this.mailCc = mailCc;
	}

	public String[] getMailBcc() {
		return mailBcc;
	}

	public void setMailBcc(String[] mailBcc) {
		this.mailBcc = mailBcc;
	}

	public Date getMailSendDate() {
		return new Date();
	}

	public String[] getMailRecipients() {
		return mailRecipients;
	}

	public void setMailRecipients(String[] mailRecipients) {
		this.mailRecipients = mailRecipients;
	}

	@Override
	public String toString() {
		StringBuilder lBuilder = new StringBuilder();
		lBuilder.append("Mail To:- ").append(
				Arrays.toString(getMailRecipients()));
		lBuilder.append("Mail From:- ").append(getMailFrom());
		lBuilder.append("Mail Cc:- ").append(Arrays.toString(getMailCc()));
		lBuilder.append("Mail Bcc:- ").append(Arrays.toString(getMailBcc()));
		lBuilder.append("Mail Subject:- ").append(getMailSubject());
		lBuilder.append("Mail Send Date:- ").append(getMailSendDate());
		return lBuilder.toString();
	}

}