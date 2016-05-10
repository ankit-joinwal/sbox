package com.bitlogic.sociallbox.data.model.feed;

public class EventInterestActivity extends UserActivity{

	public EventInterestActivity(){
		super();
		super.setActivityType(UserActivityType.INTERESTED_IN_EVENT.name());
	}
	
	private String eventId;
	
	private String eventName;
	
	private String eventPic;
	
	public String getEventPic() {
		return eventPic;
	}

	public void setEventPic(String eventPic) {
		this.eventPic = eventPic;
	}

	public String getEventId() {
		return eventId;
	}

	public void setEventId(String eventId) {
		this.eventId = eventId;
	}

	public String getEventName() {
		return eventName;
	}

	public void setEventName(String eventName) {
		this.eventName = eventName;
	}
	
	
}
