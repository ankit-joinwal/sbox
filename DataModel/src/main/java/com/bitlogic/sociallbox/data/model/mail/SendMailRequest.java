package com.bitlogic.sociallbox.data.model.mail;

import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;

@JsonRootName("mail")
public class SendMailRequest {

	@JsonProperty("recipients")
	private String[] mailRecipients;

	@JsonProperty("from")
	private String mailFrom;

	@JsonProperty("sender")
	private String senderName;

	@JsonProperty("cc")
	private String[] mailCc;

	@JsonProperty("bcc")
	private String[] mailBcc;

	@JsonProperty("subject")
	private String mailSubject;

	@JsonProperty("template")
	private String templateName;
	
	@JsonProperty("params")
	private Map<String, Object> params;

	@JsonProperty("images")
	private List<MailImage> images;

	public SendMailRequest() {

	}

	public Map<String, Object> getParams() {
		return params;
	}

	public void setParams(Map<String, Object> params) {
		this.params = params;
	}

	public List<MailImage> getImages() {
		return images;
	}

	public void setImages(List<MailImage> images) {
		this.images = images;
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
