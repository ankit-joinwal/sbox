package com.bitlogic.sociallbox.service.dao.impl;

import java.util.List;

import org.hibernate.SQLQuery;
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

		
		/*Criteria criteria = getSession().createCriteria(NotificationEntity.class)
							.add(Restrictions.eq("deviceId", deviceId))
							.add(Restrictions.lt("id", (fromId == null ? 1L : fromId)))
							.add(Restrictions.isNull("errorMessage"))
							.setMaxResults(Constants.RECORDS_PER_PAGE)
							.addOrder(Order.desc("createDate"));*/
		String sql = " SELECT * FROM NOTIFICATIONS WHERE DEVICE_ID = :deviceId "
					+" AND (:fromId IS NULL OR ID < :fromId )"
					+" AND ERROR IS NULL ORDER BY CREATE_DATE DESC LIMIT :limit";
		SQLQuery query = getSession().createSQLQuery(sql);
		query.addEntity(NotificationEntity.class);
		query.setParameter("deviceId", deviceId);
		query.setParameter("fromId", fromId);
		query.setParameter("limit", Constants.RECORDS_PER_PAGE);
		
		List<NotificationEntity> notifications = query.list();
		
		return notifications;
	}

}
