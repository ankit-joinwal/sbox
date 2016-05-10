package com.bitlogic.sociallbox.feed.service.dao;

import com.bitlogic.sociallbox.data.model.feed.entity.UserActivityEntity;

public interface FeedDAO {

	public Long createFeed(UserActivityEntity activityEntity);
}
