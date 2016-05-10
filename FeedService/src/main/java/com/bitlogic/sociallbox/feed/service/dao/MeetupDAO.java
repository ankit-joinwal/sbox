package com.bitlogic.sociallbox.feed.service.dao;

import com.bitlogic.sociallbox.data.model.Meetup;
import com.bitlogic.sociallbox.data.model.MeetupImage;

public interface MeetupDAO {

	public Meetup getMeetup(String id);
	
	public MeetupImage getImageUploadedByUser(Long userId);
}
