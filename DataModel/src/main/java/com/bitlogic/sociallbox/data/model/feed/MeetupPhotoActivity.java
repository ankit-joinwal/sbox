package com.bitlogic.sociallbox.data.model.feed;

public class MeetupPhotoActivity extends UserActivity {

	public MeetupPhotoActivity(){
		super();
		super.setActivityType(UserActivityType.POSTED_PHOTO_TO_MEETUP.name());
	}
	
	private String meetupId;
	
	private String meetupName;
	
	private String image;

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

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
	
}
