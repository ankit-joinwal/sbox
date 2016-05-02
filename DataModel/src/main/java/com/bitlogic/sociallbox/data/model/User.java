package com.bitlogic.sociallbox.data.model;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * @author Ankit.Joinwal
 * 
 */
@Entity
@Table(name = "USER",indexes = { @Index(name = "IDX_USER", columnList = "EMAIL_ID",unique=true) })
@XmlRootElement(name = "user")
@XmlAccessorType(XmlAccessType.NONE)
@NamedQuery(name = "getUserByEmail", query = "from User where emailId like :emailId")
public class User implements Serializable,Cloneable {

	private static final long serialVersionUID = 1L;
	@Transient
	private static final String DEFAULT_USER_PICTURE = "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xla1/v/t1.0-1/c15.0.50.50/p50x50/1379841_10150004552801901_469209496895221757_n.jpg?oh=1ecfea0dda4f046e7d518ce2243c1a61&oe=57789C33&__gda__=1471731386_863525fcdf1cee40b0e9562b633a5197";
	@Id
	@GeneratedValue
	@Column(name="ID")
	private Long id;
	@XmlElement
	@Column(nullable = false,name="NAME",length=100)
	@NotNull(message="error.name.mandatory")
	private String name;
	
	@XmlElement
	@Column(nullable = false,name="EMAIL_ID",length=100)
	@NotNull(message="error.email.mandatory")
	private String emailId;

	
	@XmlTransient
	@JsonIgnore
	@Column(nullable = false,name="PASSWORD")
	@NotNull(message="error.password.mandatory")
	private String password;
	
	@Column(nullable=false,name="IS_ENABLED",length=5)
	@XmlTransient
	@JsonIgnore
	private Boolean isEnabled;
	
	@XmlTransient
	@Column(nullable = false,name="CREATE_DT")
	@JsonIgnore
	private Date createDt;
	
	@JsonIgnore
	@XmlTransient
	@ManyToMany
	@JoinTable(name = "USER_EVENT_INTERESTS", joinColumns = { @JoinColumn(name = "USER_ID") }, inverseJoinColumns = { @JoinColumn(name = "EVENT_TYPE_ID") })
	private Set<EventType> userEventInterests = new HashSet<EventType>();
	
	@XmlElement(name="social_details")
	@JsonProperty(value="social_details")
	@OneToMany(mappedBy="user",fetch=FetchType.EAGER)
	private Set<UserSocialDetail> socialDetails = new HashSet<>();
	
	@XmlTransient
	@Column(nullable=false,name="DAILY_QUOTA")
	@JsonIgnore
	private Integer dailyQuota;
	
	@XmlElement(name="devices")
	@JsonProperty
	@OneToMany(mappedBy="user",fetch=FetchType.EAGER,cascade=CascadeType.ALL)
	Set<SmartDevice> smartDevices = new HashSet<>();
	
	@XmlElement(name="settings")
	@JsonIgnore
	@OneToMany(mappedBy="user",fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	Set<UserSetting> settings = new HashSet<UserSetting>();
	
	 @ManyToMany(fetch = FetchType.LAZY)
	 @JoinTable(name = "USER_ROLES", 
	 	joinColumns = { @JoinColumn(name = "USER_ID") }, 
	    inverseJoinColumns = { @JoinColumn(name = "ROLE_ID") })
	 @JsonIgnore
	 @XmlTransient
	 private Set<Role> userroles = new HashSet<>();
	 
	 
	 @ManyToMany
	 @JoinTable(name="FRIENDS",
	 	joinColumns = { @JoinColumn(name = "USER_ID") }, 
		inverseJoinColumns = { @JoinColumn(name = "FRIEND_ID") })
	 @JsonIgnore
	 private Set<User> friends;
	 
	 @ManyToMany(mappedBy="friends")
	 @JsonIgnore
	 private Set<User> friendOf;
	 
	 public String getProfilePic(){
		 if(this.socialDetails!=null){
			 for(UserSocialDetail socialDetail : socialDetails){
				 if(socialDetail.getSocialDetailType() == SocialDetailType.USER_PROFILE_PIC){
					 return socialDetail.getUserSocialDetail();
				 }
			 }
		 }
		 return DEFAULT_USER_PICTURE;
	 }
	 
	public Set<UserSetting> getSettings() {
		return settings;
	}

	public void setSettings(Set<UserSetting> settings) {
		this.settings = settings;
	}

	public Set<User> getFriends() {
		return friends;
	}

	public void setFriends(Set<User> friends) {
		this.friends = friends;
	}

	public Set<User> getFriendOf() {
		return friendOf;
	}

	public void setFriendOf(Set<User> friendOf) {
		this.friendOf = friendOf;
	}

	public Set<Role> getUserroles() {
		return userroles;
	}

	public void setUserroles(Set<Role> userroles) {
		this.userroles = userroles;
	}

	public Set<EventType> getUserEventInterests() {
		return userEventInterests;
	}

	public void setUserEventInterests(Set<EventType> tagPreferences) {
		this.userEventInterests = tagPreferences;
	}

	public Set<SmartDevice> getSmartDevices() {
		return smartDevices;
	}

	public void setSmartDevices(Set<SmartDevice> smartDevices) {
		this.smartDevices = smartDevices;
	}

	public Boolean getIsEnabled() {
		return isEnabled;
	}

	public void setIsEnabled(Boolean isEnabled) {
		this.isEnabled = isEnabled;
	}

	@JsonIgnore
	public String getPassword() {
		return password;
	}

	@JsonProperty
	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	

	@JsonIgnore
	public Integer getDailyQuota() {
		return dailyQuota;
	}

	@JsonProperty
	public void setDailyQuota(Integer dailyQuota) {
		this.dailyQuota = dailyQuota;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	
	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	
	@JsonIgnore
	public Date getCreateDt() {
		return createDt;
	}

	@JsonProperty
	public void setCreateDt(Date createDt) {
		this.createDt = createDt;
	}
	

	
	public Set<UserSocialDetail> getSocialDetails() {
		return socialDetails;
	}

	public void setSocialDetails(Set<UserSocialDetail> socialDetails) {
		this.socialDetails = socialDetails;
	}

	
	@Override
	public String toString() {
		return "[ name = " + name + " , email = " + emailId + " ] ";
	}

	@Override
	public boolean equals(Object obj) {
		 if (obj == null)
	      {
	         return false;
	      }
	      if (getClass() != obj.getClass())
	      {
	         return false;
	      }
	      final User user = (User) obj;
		return  Objects.equals(this.emailId, user.emailId);
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(emailId);
	}
	
	@Override
	public Object clone() throws CloneNotSupportedException {
		User clone = new User();
		clone.setId(getId());
		clone.setCreateDt((Date)getCreateDt().clone());
		clone.setDailyQuota(getDailyQuota());
		clone.setEmailId(getEmailId());
		clone.setIsEnabled(getIsEnabled());
		clone.setName(getName());
		clone.setSocialDetails(new HashSet<>(getSocialDetails()));
		clone.setSmartDevices(new HashSet<>(getSmartDevices()));
		return clone;
	}
}
