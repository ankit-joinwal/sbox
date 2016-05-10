package com.bitlogic.sociallbox.data.model.feed;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;

@JsonRootName("user_feed")
public class UserFeed {

	@JsonProperty
	private String id;
	
	@JsonProperty("actor")
	private String actor;
	
	
	@JsonProperty("action")
	private String action;
	
	@JsonProperty("target")
	private String target;
	
	@JsonProperty("target_id")
	private String targetId;
	
	@JsonProperty("icon")
	private String icon;
	
	@JsonProperty("image")
	private String image;
	
	@JsonProperty("type")
	private String type;

	@JsonProperty("time")
	private String time;
	
	public String getTargetId() {
		return targetId;
	}

	public void setTargetId(String targetId) {
		this.targetId = targetId;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getActor() {
		return actor;
	}

	public void setActor(String actor) {
		this.actor = actor;
	}

	public String getTarget() {
		return target;
	}

	public void setTarget(String target) {
		this.target = target;
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	
}
