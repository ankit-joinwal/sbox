package com.bitlogic.sociallbox.data.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;

@JsonRootName(value="login_response")
public class AppLoginResponse extends User {
	private static final long serialVersionUID = 1L;
	
	@JsonProperty("is_login")
	private Boolean isLogin;

	public Boolean getIsLogin() {
		return isLogin;
	}

	public void setIsLogin(Boolean isLogin) {
		this.isLogin = isLogin;
	}
	
	
}
