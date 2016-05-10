package com.bitlogic.sociallbox.feed.service.impl;

import org.hibernate.Criteria;
import org.hibernate.FetchMode;
import org.hibernate.SQLQuery;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.bitlogic.sociallbox.data.model.Event;
import com.bitlogic.sociallbox.data.model.EventImage;
import com.bitlogic.sociallbox.feed.service.dao.AbstractDAO;
import com.bitlogic.sociallbox.feed.service.dao.EventDAO;

@Repository("eventDAO")
public class EventDAOImpl extends AbstractDAO implements EventDAO{

	@Override
	public Event getEvent(String id) {
		Criteria criteria = getSession().createCriteria(Event.class, "event")
				.add(Restrictions.eq("event.uuid", id))
				.setFetchMode("event.tags", FetchMode.JOIN)
				.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);
		
		String sql = "SELECT * FROM EVENT_IMAGES WHERE EVENT_ID = :eventId AND DISPLAY_ORDER = 1";
		Event event = (Event) criteria.uniqueResult();
		if (event != null && event.getEventImages() != null) {
			SQLQuery query = getSession().createSQLQuery(sql);
			query.addEntity(EventImage.class);
			query.setParameter("eventId", id);
			Object result = query.uniqueResult();
			EventImage displayImage = (EventImage) result;
			
			event.getEventImages().add(displayImage);
			event.getTags().size();
			event.getEventDetails().toString();
		}

		return event;
	}
}
