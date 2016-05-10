package com.bitlogic.sociallbox.feed.service.impl;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.FetchMode;
import org.hibernate.SQLQuery;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.bitlogic.sociallbox.data.model.Role;
import com.bitlogic.sociallbox.data.model.SmartDevice;
import com.bitlogic.sociallbox.data.model.User;
import com.bitlogic.sociallbox.feed.service.dao.AbstractDAO;
import com.bitlogic.sociallbox.feed.service.dao.UserDAO;

@Repository("userDAO")
public class UserDAOImpl extends AbstractDAO implements UserDAO {

	@Override
	public List<Long> getUserFriends(Long userId) {
		String sql = "SELECT FRIEND_ID FROM FRIENDS WHERE USER_ID = :userId";
		SQLQuery query = getSession().createSQLQuery(sql);
		query.setParameter("userId", userId);
		
		List results = query.list();
		List<Long> friends = new ArrayList<>();
		if(results!=null && !results.isEmpty()){
			 for (Iterator iterator = results.iterator(); iterator.hasNext();) {
				 BigInteger friendId = (BigInteger) iterator.next();
				 friends.add(friendId.longValue());
				}
		 }
				
		return friends;
	}
	@Override
	public User getUserByEmailIdWithRoles(String emailId, boolean updateQuota) {
		Criteria emailCrt = getSession().createCriteria(User.class)
				.add(Restrictions.eq("emailId", emailId))
				.add(Restrictions.eq("isEnabled", Boolean.TRUE))
				.setFetchMode("smartDevices", FetchMode.JOIN)
				.setFetchMode("userroles", FetchMode.JOIN);
		;
		User user = (User) emailCrt.uniqueResult();
		
		if(user!=null && user.getUserroles()!=null){
			user.getUserroles().size();
		}
		if (updateQuota) {
			Integer quota = user.getDailyQuota();
			user.setDailyQuota(quota - 1);
			// check if specific API to be called to saving
		}
		return user;
	}
	
	@Override
	public SmartDevice getSmartDeviceByDeviceId(String deviceId) {
		Criteria criteria = getSession().createCriteria(SmartDevice.class).add(Restrictions.eq("uniqueId", deviceId));
		return (SmartDevice) criteria.uniqueResult();
	}
	
	@Override
	public List<Role> getUserRolesByDevice(String deviceId) {
		Criteria criteria = getSession().createCriteria(User.class)
				.createAlias("smartDevices", "sd")
				.add(Restrictions.eq("sd.uniqueId", deviceId))
				.add(Restrictions.eq("sd.isEnabled", Boolean.TRUE))
				.add(Restrictions.eq("isEnabled", Boolean.TRUE))
				.setFetchMode("userroles", FetchMode.JOIN);
		User user = (User) criteria.uniqueResult();
		if(user!=null){
			if(user.getUserroles()!=null && !user.getUserroles().isEmpty()){
				return new ArrayList<Role>(user.getUserroles());
			}
		}
		return null;
	}
	
	@Override
	public User getUserInfoFromDeviceId(String deviceId) {
		Criteria criteria = getSession().createCriteria(User.class)
				.createAlias("smartDevices", "sd")
				.add(Restrictions.eq("sd.uniqueId", deviceId))
				.add(Restrictions.eq("sd.isEnabled", Boolean.TRUE))
				.add(Restrictions.eq("isEnabled", Boolean.TRUE));
		User user = (User)criteria.uniqueResult();
		
		return user;
	}
}
