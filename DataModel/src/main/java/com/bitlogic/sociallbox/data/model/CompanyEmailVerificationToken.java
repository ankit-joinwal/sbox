package com.bitlogic.sociallbox.data.model;

import java.util.Calendar;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "COMPANY_EMAIL_VERIFICATION_TOKEN")
public class CompanyEmailVerificationToken {
	
	 private static final int EXPIRATION = 60 * 24;
	public CompanyEmailVerificationToken(){
		
	}
	
	public CompanyEmailVerificationToken(String token, EventOrganizer organizer) {
        super();
        this.token = token;
        this.organizer = organizer;
        this.expiryDate = calculateExpiryDate(EXPIRATION);
    }
	
	@Id
	@GeneratedValue
	@Column(name = "ID")
	private Long id;

	@OneToOne(targetEntity = EventOrganizer.class, fetch = FetchType.EAGER)
	@JoinColumn(nullable = false, name = "ORGANIZER_ID")
	private EventOrganizer organizer;

	@Column(name = "TOKEN")
	private String token;

	@Column(name = "EXPIRY_DT")
	private Date expiryDate;

	@Column(name = "CREATE_DT")
	private Date createDate;
	
	@Transient
	private String confirmationLink;
	

	private Date calculateExpiryDate(int expiryTimeInMinutes) {
			final Calendar cal = Calendar.getInstance();
	        cal.setTimeInMillis(new Date().getTime());
	        cal.add(Calendar.MINUTE, expiryTimeInMinutes);
	        return new Date(cal.getTime().getTime());
	}

	
	public String getConfirmationLink() {
		return confirmationLink;
	}

	public void setConfirmationLink(String confirmationLink) {
		this.confirmationLink = confirmationLink;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public EventOrganizer getOrganizer() {
		return organizer;
	}

	public void setOrganizer(EventOrganizer organizer) {
		this.organizer = organizer;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public Date getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(Date expiryDate) {
		this.expiryDate = expiryDate;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	
}
