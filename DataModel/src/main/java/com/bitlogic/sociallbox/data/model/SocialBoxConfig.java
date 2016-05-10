package com.bitlogic.sociallbox.data.model;

public class SocialBoxConfig extends APIConfig{
	private String notificationServiceURL;
	private String feedServiceURL;
	private String meetupsBaseUrl;
	

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
