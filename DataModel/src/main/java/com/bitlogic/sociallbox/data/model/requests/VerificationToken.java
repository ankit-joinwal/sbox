package com.bitlogic.sociallbox.data.model.requests;

import com.fasterxml.jackson.annotation.JsonRootName;

@JsonRootName("verification")
public class VerificationToken {

	private String token;

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	
}
