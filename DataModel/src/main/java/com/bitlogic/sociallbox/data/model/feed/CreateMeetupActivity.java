package com.bitlogic.sociallbox.data.model.feed;

public class CreateMeetupActivity extends UserActivity{

	public CreateMeetupActivity(){
		super();
		super.setActivityType(UserActivityType.CREATED_MEETUP.name());
	}
	
	private String meetupId;
	
	private String meetupName;
	
	private String meetupPic;

	public String getMeetupId() {
		return meetupId;
	}

	public void setMeetupId(String meetupId) {
		this.meetupId = meetupId;
	}

	public String getMeetupName() {
		return meetupName;
	}

	public void setMeetupName(String meetupName) {
		this.meetupName = meetupName;
	}

	public String getMeetupPic() {
		return meetupPic;
	}

	public void setMeetupPic(String meetupPic) {
		this.meetupPic = meetupPic;
	}
	
	
}
