package com.bitlogic.sociallbox.service.model;

import java.util.Locale;

import org.springframework.context.ApplicationEvent;

import com.bitlogic.sociallbox.data.model.EventOrganizer;

public class CompanyRegistrationEvent extends ApplicationEvent{

	private static final long serialVersionUID = -4265754166846300162L;
	private final String appUrl;
    private final Locale locale;
    private final EventOrganizer organizer;
    private final String verifyLink;
    
    public CompanyRegistrationEvent(final EventOrganizer organizer, final Locale locale, final String appUrl) {
    	   super(organizer);
    	   this.verifyLink = "";
           this.organizer = organizer;
           this.locale = locale;
           this.appUrl = appUrl;
	}
    
    
    public String getVerifyLink() {
		return verifyLink;
	}



	public String getAppUrl() {
        return appUrl;
    }

    public Locale getLocale() {
        return locale;
    }


	public EventOrganizer getOrganizer() {
		return organizer;
	}

   

}
