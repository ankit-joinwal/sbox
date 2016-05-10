package com.bitlogic.sociallbox.data.model.feed.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.Table;

import com.bitlogic.sociallbox.data.model.feed.UserActivityType;

@Entity
@Table(name="USER_ACTIVITY",indexes = { @Index(name = "IDX_USR_ACTIVITY", columnList = "USER_ID,CREATE_DT") })
public class UserActivityEntity {

	@Id
	@GeneratedValue
	@Column(name="ID")
	private Long id;
	
	@Column(name="USER_ID",nullable=false)
	private Long userId;
	
	@Column(name="CREATE_DT",nullable=false)
	private Date createDt;
	
	
	@Column(name="ACTIVITY_TYPE",nullable=false)
	@Enumerated(EnumType.STRING)
	private UserActivityType activityType;
	
	@Column(name="PARENT_ENTITY_ID")
	private String parentEntityId;
	
	@Column(name="EXTERNAL_ID")
	private String externalId;
	

	public String getExternalId() {
		return externalId;
	}

	public void setExternalId(String externalId) {
		this.externalId = externalId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Date getCreateDt() {
		return createDt;
	}

	public void setCreateDt(Date createDt) {
		this.createDt = createDt;
	}

	public UserActivityType getActivityType() {
		return activityType;
	}

	public void setActivityType(UserActivityType activityType) {
		this.activityType = activityType;
	}

	public String getParentEntityId() {
		return parentEntityId;
	}

	public void setParentEntityId(String parentEntityId) {
		this.parentEntityId = parentEntityId;
	}
	
	@Override
	public String toString() {
		return "UserActivityEntity[ userId="+this.userId +
				" , activityType="+this.activityType +
				" , parentEntityId="+this.parentEntityId+
				" ]";
	}
	
}
