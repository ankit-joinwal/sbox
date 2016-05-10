package com.bitlogic.sociallbox.data.model.feed;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;

@JsonRootName("create_feed")
public class CreateFeedRequest<T> {

	@JsonProperty("type")
	private UserActivityType activityType;

	@JsonProperty("actor_id")
	private Long actorId;
	
	@JsonProperty("actor_name")
	private String actorName;
	
	@JsonProperty("actor_pic")
	private String actorPic;
	
	@JsonProperty("verb")
	private String verb;
	
	@JsonProperty("target")
	private T target;
	
	

	public UserActivityType getActivityType() {
		return activityType;
	}

	public void setActivityType(UserActivityType activityType) {
		this.activityType = activityType;
	}

	public Long getActorId() {
		return actorId;
	}

	public void setActorId(Long actorId) {
		this.actorId = actorId;
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

	public String getVerb() {
		return verb;
	}

	public void setVerb(String verb) {
		this.verb = verb;
	}

	public T getTarget() {
		return target;
	}

	public void setTarget(T target) {
		this.target = target;
	}
	
	
}
