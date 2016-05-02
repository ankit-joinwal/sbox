package com.bitlogic.sociallbox.service.dao.impl;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.bitlogic.Constants;
import com.bitlogic.sociallbox.data.model.notifications.NotificationEntity;
import com.bitlogic.sociallbox.service.dao.AbstractDAO;
import com.bitlogic.sociallbox.service.dao.NotificationDAO;

@Repository("notificationDAO")
public class NotificationDAOImpl extends AbstractDAO implements NotificationDAO{
	
	@Override
	public List<NotificationEntity> getNotificationsForDevice(Long deviceId,
			Integer page, Long fromId) {

		
		Criteria criteria = getSession().createCriteria(NotificationEntity.class)
							.add(Restrictions.eq("deviceId", deviceId))
							.add(Restrictions.gt("id", (fromId == null ? 1L : fromId)))
							.add(Restrictions.isNull("errorMessage"))
							.setMaxResults(Constants.RECORDS_PER_PAGE)
							.addOrder(Order.desc("createDate"));
		
		return criteria.list();
	}

}
