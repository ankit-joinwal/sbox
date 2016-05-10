package com.bitlogic.sociallbox.feed.service.impl;

import org.springframework.stereotype.Repository;

import com.bitlogic.sociallbox.data.model.feed.entity.UserActivityEntity;
import com.bitlogic.sociallbox.feed.service.dao.AbstractDAO;
import com.bitlogic.sociallbox.feed.service.dao.FeedDAO;

@Repository("feedDAO")
public class FeedDAOImpl extends AbstractDAO implements FeedDAO{

	@Override
	public Long createFeed(UserActivityEntity activityEntity){
		Long id = (Long) getSession().save(activityEntity);
		return id;
	}
}
