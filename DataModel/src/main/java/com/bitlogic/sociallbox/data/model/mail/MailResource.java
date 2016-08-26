package com.bitlogic.sociallbox.data.model.mail;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;

@JsonRootName("resource")
public class MailResource {
	public enum ResourceType{
		URL , CLASSPATH , FILESYSTEM
	}
	
	@JsonProperty("type")
	private ResourceType resourceType;
	
	@JsonProperty("name")
	private String name;
	
	@JsonProperty("path")
	private String path;
	
	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public ResourceType getResourceType() {
		return resourceType;
	}

	public void setResourceType(ResourceType imageType) {
		this.resourceType = imageType;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
}
