package com.bitlogic.sociallbox.data.model.requests;

import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonRootName;

@JsonRootName("password_reset")
public class ResetPasswordRequest {

	@NotNull
	private String email;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}


}
