package com.bitlogic.sociallbox.data.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="EVENT_ATTENDEES",indexes={ @Index(name = "IDX_EVENT_ATT", columnList = "EVENT_ID,USER_ID")} )
public class EventAttendee {

	@Id
	@GeneratedValue
	@Column(name="ID")
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "EVENT_ID",nullable=false)
	@JsonIgnore
	private Event event;
	
	@ManyToOne
	@JoinColumn(name = "USER_ID",nullable=false)
	@JsonIgnore
	private User user;
	
	@JsonProperty("user_id")
	@Transient
	private Long userId;
	
	@JsonProperty("event_id")
	@Transient
	private String eventId;
	
	@Column(name="CREATE_DT")
	private Date createDate;
	
	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public Long getUserId() {
		if(user!=null){
			return user.getId();
		}
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getEventId() {
		if(event!=null){
			return event.getUuid();
		}
		return eventId;
	}

	public void setEventId(String eventId) {
		this.eventId = eventId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Event getEvent() {
		return event;
	}

	public void setEvent(Event event) {
		this.event = event;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
}
