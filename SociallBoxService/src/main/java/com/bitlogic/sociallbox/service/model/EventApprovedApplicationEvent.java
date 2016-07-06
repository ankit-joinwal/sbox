package com.bitlogic.sociallbox.service.model;

import org.springframework.context.ApplicationEvent;

import com.bitlogic.sociallbox.data.model.Event;

public class EventApprovedApplicationEvent extends ApplicationEvent{

	private static final long serialVersionUID = -4265754166846300162L;
    private final Event event;
    
    public EventApprovedApplicationEvent(final Event event) {
    	   super(event);
    	   this.event = event;
	}

	public Event getEvent() {
		return event;
	}
    
}
