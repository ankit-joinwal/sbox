package com.bitlogic.sociallbox.data.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlElement;

@Entity
@Table(name="EVENT_CHANGE")
public class EventChange {

	@Id
	@GeneratedValue
	@Column(name="ID")
	private Long id;
	
	@Column(name="EVENT_ID",nullable=false)
	private String eventId;
	
	@Column(length = 1000,name="DESCRIPTION")
	private String description;
	
	@Embedded
	@Column(name="LOCATION")
	@XmlElement
	private Location location;
	
	@Column(name="IS_FREE_EVENT",length=5)
	private Boolean isFreeEvent;
	
	@Column(name="START_DT")
	private Date startDate;
	
	@Column(name="END_DT")
	private Date endDate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEventId() {
		return eventId;
	}

	public void setEventId(String eventId) {
		this.eventId = eventId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	public Boolean getIsFreeEvent() {
		return isFreeEvent;
	}

	public void setIsFreeEvent(Boolean isFreeEvent) {
		this.isFreeEvent = isFreeEvent;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	
	
}
