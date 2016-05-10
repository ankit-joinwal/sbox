package com.bitlogic.sociallbox.data.model.feed;

public enum UserActivityType {

	INTERESTED_IN_EVENT("INTERESTED_IN_EVENT","interest","is interested in event ") ,
	GOING_TO_EVENT("GOING_TO_EVENT","going"," is going to event ") , 
	CREATED_MEETUP("CREATED_MEETUP","created"," created meetup ") ,
	POSTED_PHOTO_TO_MEETUP("POSTED_PHOTO_TO_MEETUP"," posted","posted a photo");
	String name;
	String verb;
	String action;
	private UserActivityType(String name,String verb,String action){
		this.name = name;
		this.verb = verb;
		this.action = action;
	}
	
	public String getVerb(){
		return this.verb;
	}
	
	public String getAction(){
		return this.action;
	}
	
}
