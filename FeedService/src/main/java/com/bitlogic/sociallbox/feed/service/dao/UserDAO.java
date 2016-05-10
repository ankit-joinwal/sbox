package com.bitlogic.sociallbox.feed.service.dao;

import java.util.List;

import com.bitlogic.sociallbox.data.model.Role;
import com.bitlogic.sociallbox.data.model.SmartDevice;
import com.bitlogic.sociallbox.data.model.User;

public interface UserDAO {

	public List<Role> getUserRolesByDevice(String deviceId);
	
	public List<Long> getUserFriends(Long userId);
	
	public User getUserInfoFromDeviceId(String deviceId);
	
	public User getUserByEmailIdWithRoles(String emailId,boolean updateQuota);
	
	public SmartDevice getSmartDeviceByDeviceId(String deviceId);
}
