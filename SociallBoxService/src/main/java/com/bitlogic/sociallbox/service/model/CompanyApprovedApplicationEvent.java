package com.bitlogic.sociallbox.service.model;

import org.springframework.context.ApplicationEvent;

import com.bitlogic.sociallbox.data.model.EventOrganizerAdmin;

public class CompanyApprovedApplicationEvent extends ApplicationEvent{

	private static final long serialVersionUID = -4265754166846300162L;
    private final EventOrganizerAdmin organizerAdmin;
    
    public CompanyApprovedApplicationEvent(final EventOrganizerAdmin organizerAdmin) {
    	   super(organizerAdmin);
    	   this.organizerAdmin = organizerAdmin;
	}

	public EventOrganizerAdmin getOrganizerAdmin() {
		return organizerAdmin;
	}
    
}
