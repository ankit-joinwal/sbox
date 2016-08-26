package com.bitlogic.sociallbox.data.model.requests;

import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonRootName;

@JsonRootName("password_update")
public class PasswordUpdateRequest {

	@NotNull
	private String password;
	
	@NotNull
	private String token;

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	
	
}
