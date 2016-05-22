package com.bitlogic.sociallbox.data.model.mail;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;

@JsonRootName("image")
public class MailImage {
	public enum ImageType{
		URL , CLASSPATH , FILESYSTEM
	}
	
	@JsonProperty("type")
	private ImageType imageType;
	
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

	public ImageType getImageType() {
		return imageType;
	}

	public void setImageType(ImageType imageType) {
		this.imageType = imageType;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
}
