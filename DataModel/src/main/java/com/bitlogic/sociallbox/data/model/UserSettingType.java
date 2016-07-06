package com.bitlogic.sociallbox.data.model;

public enum UserSettingType {
	PUSH_NOTIFICATION("Push Notifications");
	
	String description;
	
	private UserSettingType(String description){
		this.description = description;
	}
	
	public String getDescription(){
		return this.description;
	}
	
	
}
