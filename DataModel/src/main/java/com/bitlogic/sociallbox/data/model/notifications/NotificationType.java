package com.bitlogic.sociallbox.data.model.notifications;

public enum NotificationType {
	
	GENERAL_NOTIFICATION("GENERAL_NOTIFICATION","","ic_notification","rawNotfication","normal"),
	
	NEW_FRIEND_NOTIFICATION("NEW_FRIEND_NOTIFICATION"," joined","ic_notification","rawNotfication","normal") ,
	
	NEW_MEETUP_NOTIFICATION("NEW_MEETUP_NOTIFICATION"," invited you to meetup","ic_notification","meetupDetailsNotfication","high") ,
	
	MEETUP_PHOTO_NOTIFICATION("MEETUP_PHOTO_NOTIFICATION"," posted photo in meetup","ic_notification","meetupDetailsNotfication","high") ,
	
	MEETUP_UPDATE_NOTIFICATION("MEETUP_UPDATE_NOTIFICATION"," updated meetup","ic_notification","meetupDetailsNotfication","high") ,
	
	MEETUP_CANCEL_NOTIFICATION("MEETUP_CANCEL_NOTIFICATION"," cancelled meetup","ic_notification","meetupDetailsNotfication","high") ,
	
	MEETUP_MESSAGE_NOTIFICATION("MEETUP_MESSAGE_NOTIFICATION"," posted message in meetup","ic_notification","meetupDetailsNotfication","high") ,
	
	EVENT_UPDATE_NOTIFICATION("EVENT_UPDATE_NOTIFICATION"," updated event","ic_notification","eventDetailsNotfication","high") ,
	
	EVENT_CANCEL_NOTIFICATION("EVENT_CANCEL_NOTIFICATION"," cancelled event","ic_notification","eventDetailsNotfication","high") ,
	
	NEW_EVENT_NOTIFICATION("NEW_EVENT_NOTIFICATION"," is now available on","ic_notification","eventDetailsNotfication","high"); 
	
	String type;
	String verb;
	String icon;
	//This is for NotificationPayload of GCM message and not for DataPayload
	String clickAction;
	String priority;
	
	public static NotificationType getTypeFrom(String typeString){
		NotificationType type = null;
		for(NotificationType notificationType : values()){
			if(notificationType.getType().equalsIgnoreCase(typeString)){
				type =  notificationType;
				break;
			}
		}
		return type;
	}
	
	private NotificationType(String type,String verb,String icon, String clickAction,String priority){
		this.type = type;
		this.verb = verb;
		this.icon = icon;
		this.clickAction = clickAction;
		this.priority = priority;
		
	}

	public String getType() {
		return type;
	}

	public String getVerb() {
		return verb;
	}

	public String getIcon() {
		return icon;
	}

	public String getClickAction() {
		return clickAction;
	}

	public String getPriority() {
		return priority;
	}
	
	
}
