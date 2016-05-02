package com.bitlogic.sociallbox.data.model.response;

import java.io.Serializable;
import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

import com.fasterxml.jackson.annotation.JsonProperty;

@XmlRootElement(name="response")
public class EntityCollectionResponse<T> implements Serializable{

	private static final long serialVersionUID = 1L;

	@JsonProperty
	private String status;
	@JsonProperty("total_records")
	private Integer totalRecords ;
	
	@JsonProperty
	private List<T> data;
	
	@JsonProperty
	private Integer page;
	
	@JsonProperty
	private String nextPage;
	
	
	
	public String getNextPage() {
		return nextPage;
	}

	public void setNextPage(String nextPage) {
		this.nextPage = nextPage;
	}

	public Integer getPage() {
		return page;
	}

	public void setPage(Integer page) {
		this.page = page;
	}

	public Integer getTotalRecords() {
		return totalRecords;
	}

	public void setTotalRecords(Integer totalRecords) {
		this.totalRecords = totalRecords;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<T> getData() {
		return data;
	}

	public void setData(List<T> data) {
		this.data = data;
	}

	
	
	
	
}
