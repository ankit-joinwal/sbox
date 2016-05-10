package com.bitlogic.sociallbox.service.business;

import com.bitlogic.sociallbox.data.model.Event;
import com.bitlogic.sociallbox.data.model.Meetup;
import com.bitlogic.sociallbox.data.model.User;

public interface FeedServiceClient {

	public void storeFeedForEventFavActivity(User user, Event event);
	public void storeFeedForEventRegisterActivity(User user, Event event);
	public void storeFeedForCreateMeetupActivity(User user, Meetup meetup);
	public void storeFeedForUplImgToMeetupActivity(User user, Meetup meetup);
}
