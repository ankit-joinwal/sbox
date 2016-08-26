package com.bitlogic.sociallbox.service.model;

import java.util.Locale;

import org.springframework.context.ApplicationEvent;

import com.bitlogic.sociallbox.data.model.User;

public class ResetPasswordEvent extends ApplicationEvent{

	private static final long serialVersionUID = -4265754166846300162L;
	private final String appUrl;
    private final Locale locale;
    private final User user;
    private final String resetLink;
    
    public ResetPasswordEvent(final User user, final Locale locale, final String appUrl) {
    	   super(user);
    	   this.resetLink = "";
           this.user = user;
           this.locale = locale;
           this.appUrl = appUrl;
	}
    
    
    public String getResetLink() {
		return resetLink;
	}



	public String getAppUrl() {
        return appUrl;
    }

    public Locale getLocale() {
        return locale;
    }

    public User getUser() {
        return user;
    }

}
