package com.bitlogic.sociallbox.data.model;

public class SocialBoxConfig extends APIConfig{
	private String notificationServiceURL;
	private String feedServiceURL;
	private String meetupsBaseUrl;
	private String isaUserName;
	private String isaPassword;
	private String verifyEmailUrl;
	private String emailServiceURL;
	private String emailVerifySender;
	private String emailVerifyCC ;
	private String emailVerifyBCC;
	private String emailVerifySenderName;
	private String verifyCompanyEmailUrl;
	
	
	
	public String getVerifyCompanyEmailUrl() {
		return verifyCompanyEmailUrl;
	}

	public void setVerifyCompanyEmailUrl(String verifyCompanyEmailUrl) {
		this.verifyCompanyEmailUrl = verifyCompanyEmailUrl;
	}

	public String getVerifyEmailUrl() {
		return verifyEmailUrl;
	}

	public void setVerifyEmailUrl(String verifyEmailUrl) {
		this.verifyEmailUrl = verifyEmailUrl;
	}

	public String getIsaUserName() {
		return isaUserName;
	}

	public void setIsaUserName(String isaUserName) {
		this.isaUserName = isaUserName;
	}

	public String getIsaPassword() {
		return isaPassword;
	}

	public void setIsaPassword(String isaPassword) {
		this.isaPassword = isaPassword;
	}

	public String getEmailVerifySenderName() {
		return emailVerifySenderName;
	}

	public void setEmailVerifySenderName(String emailVerifySenderName) {
		this.emailVerifySenderName = emailVerifySenderName;
	}

	public String getEmailVerifyCC() {
		return emailVerifyCC;
	}

	public void setEmailVerifyCC(String emailVerifyCC) {
		this.emailVerifyCC = emailVerifyCC;
	}

	public String getEmailVerifyBCC() {
		return emailVerifyBCC;
	}

	public void setEmailVerifyBCC(String emailVerifyBCC) {
		this.emailVerifyBCC = emailVerifyBCC;
	}

	public String getEmailVerifySender() {
		return emailVerifySender;
	}

	public void setEmailVerifySender(String emailVerifySender) {
		this.emailVerifySender = emailVerifySender;
	}

	public String getEmailServiceURL() {
		return emailServiceURL;
	}

	public void setEmailServiceURL(String emailServiceURL) {
		this.emailServiceURL = emailServiceURL;
	}

	public String getFeedServiceURL() {
		return feedServiceURL;
	}

	public void setFeedServiceURL(String feedServiceURL) {
		this.feedServiceURL = feedServiceURL;
	}

	public String getNotificationServiceURL() {
		return notificationServiceURL;
	}

	public void setNotificationServiceURL(String notificationServiceURL) {
		this.notificationServiceURL = notificationServiceURL;
	}

	public String getMeetupsBaseUrl() {
		return meetupsBaseUrl;
	}

	public void setMeetupsBaseUrl(String meetupsBaseUrl) {
		this.meetupsBaseUrl = meetupsBaseUrl;
	}
	
	
}
