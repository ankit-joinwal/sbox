package com.bitlogic.sociallbox.feed.service.impl;

import org.hibernate.Criteria;
import org.hibernate.FetchMode;
import org.hibernate.SQLQuery;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.bitlogic.sociallbox.data.model.Meetup;
import com.bitlogic.sociallbox.data.model.MeetupImage;
import com.bitlogic.sociallbox.feed.service.dao.AbstractDAO;
import com.bitlogic.sociallbox.feed.service.dao.MeetupDAO;

@Repository("meetupDAO")
public class MeetupDAOImpl extends AbstractDAO implements MeetupDAO{

	@Override
	public Meetup getMeetup(String id) {
		Criteria criteria = getSession().createCriteria(Meetup.class).
				add(Restrictions.eq("uuid", id)).
				setFetchMode("attendees", FetchMode.JOIN)
				.setFetchMode("eventAtMeetup",FetchMode.JOIN)
				.setFetchMode("images", FetchMode.JOIN);
		return (Meetup) criteria.uniqueResult();
	}
	
	@Override
	public MeetupImage getImageUploadedByUser(Long userId) {
		String sql = "SELECT * FROM MEETUP_IMAGES WHERE UPLOADED_BY = :userId ORDER BY UPLOAD_DATE DESC LIMIT 1";
		SQLQuery query = getSession().createSQLQuery(sql);
		query.addEntity(MeetupImage.class);
		query.setParameter("userId", userId);
		MeetupImage meetupImage = (MeetupImage) query.uniqueResult();
		return meetupImage;
	}
}
