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
@Table(name = "RESET_PASSWORD_TOKEN")
public class ResetPasswordToken {
	
	 private static final int EXPIRATION = 60 * 24;
	public ResetPasswordToken(){
		
	}
	
	public ResetPasswordToken(String token, User user) {
        super();
        this.token = token;
        this.user = user;
        this.expiryDate = calculateExpiryDate(EXPIRATION);
    }
	
	@Id
	@GeneratedValue
	@Column(name = "ID")
	private Long id;

	@OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
	@JoinColumn(nullable = false, name = "USER_ID")
	private User user;

	@Column(name = "TOKEN")
	private String token;

	@Column(name = "EXPIRY_DT")
	private Date expiryDate;

	@Column(name = "CREATE_DT")
	private Date createDate;
	
	@Transient
	private String resetLink;
	

	private Date calculateExpiryDate(int expiryTimeInMinutes) {
			final Calendar cal = Calendar.getInstance();
	        cal.setTimeInMillis(new Date().getTime());
	        cal.add(Calendar.MINUTE, expiryTimeInMinutes);
	        return new Date(cal.getTime().getTime());
	}

	
	

	public String getResetLink() {
		return resetLink;
	}

	public void setResetLink(String resetLink) {
		this.resetLink = resetLink;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
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
