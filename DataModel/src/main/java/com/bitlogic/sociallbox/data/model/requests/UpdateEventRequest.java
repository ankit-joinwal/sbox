package com.bitlogic.sociallbox.data.model.requests;

import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

import com.bitlogic.sociallbox.data.model.Location;
import com.fasterxml.jackson.annotation.JsonProperty;

@XmlRootElement(name="editEvent")
@XmlAccessorType(XmlAccessType.NONE)
public class UpdateEventRequest {

	@NotNull
	private String eventId;
	private String description;
	
	private Location location;
	
	private String startDate;
	
	private String endDate;
	
	@JsonProperty("is_free")
	private Boolean isFree ;

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

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public Boolean getIsFree() {
		return isFree;
	}

	public void setIsFree(Boolean isFree) {
		this.isFree = isFree;
	}
	
	
}
