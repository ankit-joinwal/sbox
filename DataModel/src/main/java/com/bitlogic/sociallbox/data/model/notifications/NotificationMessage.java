package com.bitlogic.sociallbox.data.model.notifications;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;

@JsonRootName(value="message")
public class NotificationMessage {

	@JsonProperty(value="notification")
	private NotificationPayload notificationPayload;
	
	@JsonProperty(value = "data")
	private DataPayload dataPayload;
	
	public NotificationPayload getNotificationPayload() {
		return notificationPayload;
	}

	public void setNotificationPayload(NotificationPayload notificationPayload) {
		this.notificationPayload = notificationPayload;
	}

	public DataPayload getDataPayload() {
		return dataPayload;
	}

	public void setDataPayload(DataPayload dataPayload) {
		this.dataPayload = dataPayload;
	}

	@Embeddable
	public static final class NotificationPayload{
		@Column(name="NOTIFICATION_TITLE",length=255)
		private String title;
		
		@Column(name="NOTIFICATION_BODY",length=255)
		private String body;
		
		@Column(name="NOTIFICATION_CLICK_ACTION",length=255)
		@JsonProperty(value="click_action")
		private String clickAction;
		
		@Column(name="NOTIFICATION_ICON")
		private String icon;
		
		@Transient
		private String color;
		
		@Transient
		private String sound;
		
		public String getColor() {
			return color;
		}

		public void setColor(String color) {
			this.color = color;
		}

		public String getIcon() {
			return icon;
		}

		public void setIcon(String icon) {
			this.icon = icon;
		}

		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public String getBody() {
			return body;
		}

		public void setBody(String body) {
			this.body = body;
		}
		
		
		public String getClickAction() {
			return clickAction;
		}

		public void setClickAction(String clickAction) {
			this.clickAction = clickAction;
		}

		public String getSound() {
			return sound;
		}

		public void setSound(String sound) {
			this.sound = sound;
		}

		@Override
		public String toString() {
			return "NotificationPayload [title = "+this.title+ " , body = "+this.body+ " ]";
		}
	}
	
	@Embeddable
	public static final class DataPayload{
		
		@Column(name="NOTIFICATION_TYPE",length=50)
		@JsonProperty(value="type")
		private String type;
		
		@Column(name="ACTOR",length=100)
		private String actor;
		
		@Column(name="VERB",length=100)
		private String verb;
		
		@Column(name="TARGET",length=100)
		private String target;
		
		@Column(name="ICON")
		private String icon;
		
		@Column(name="IMAGE")
		private String image;
		
		@Transient
		@JsonProperty(value="entity_id")
		private String entityId;

		@Column(name="ACTION_URL",length=500)
		@JsonProperty(value="action_url")
		private String actionURL;

		
		public String getEntityId() {
			return entityId;
		}

		public void setEntityId(String entityId) {
			this.entityId = entityId;
		}

		public String getType() {
			return type;
		}

		public void setType(String type) {
			this.type = type;
		}

		public String getActor() {
			return actor;
		}

		public void setActor(String actor) {
			this.actor = actor;
		}

		public String getVerb() {
			return verb;
		}

		public void setVerb(String verb) {
			this.verb = verb;
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

		public String getActionURL() {
			return actionURL;
		}

		public void setActionURL(String actionURL) {
			this.actionURL = actionURL;
		}
		
		@Override
		public String toString() {
			return "DataPayload [type = "+this.type+
					" , actor = "+this.actor+ 
					" , verb = "+this.verb+
					" , target = "+this.target+
					" , icon = "+this.icon+
					" , image = "+this.image+
					" , actionURL = "+this.actionURL+
					" , entityId = "+this.entityId+" ]";
		}
	}
	
	@Override
	public String toString() {

		return "NotificationMessage [notification = ["+this.notificationPayload+ 
				"] , data = ["+this.dataPayload+"] ]";
	}
}
