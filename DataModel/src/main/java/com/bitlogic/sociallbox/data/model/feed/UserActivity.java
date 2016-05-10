package com.bitlogic.sociallbox.data.model.feed;

import io.getstream.client.model.activities.BaseActivity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "activityType")
@JsonSubTypes({
    @JsonSubTypes.Type(value = CreateMeetupActivity.class, name = "CREATED_MEETUP"),
    @JsonSubTypes.Type(value = EventInterestActivity.class, name = "INTERESTED_IN_EVENT"),
    @JsonSubTypes.Type(value = EventRegisterActivity.class, name = "GOING_TO_EVENT"),
    @JsonSubTypes.Type(value = MeetupPhotoActivity.class, name = "POSTED_PHOTO_TO_MEETUP")
})
public class UserActivity extends BaseActivity{

	private String activityType;
	
	private String action;

	private String actorName;
	
	private String actorPic;

	
	
	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public String getActivityType() {
		return activityType;
	}

	public void setActivityType(String activityType) {
		this.activityType = activityType;
	}

	public String getActorName() {
		return actorName;
	}

	public void setActorName(String actorName) {
		this.actorName = actorName;
	}

	public String getActorPic() {
		return actorPic;
	}

	public void setActorPic(String actorPic) {
		this.actorPic = actorPic;
	}
	
	
	
}
