package com.bitlogic.sociallbox.notification.service.business.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bitlogic.Constants;
import com.bitlogic.sociallbox.data.model.Role;
import com.bitlogic.sociallbox.data.model.SmartDevice;
import com.bitlogic.sociallbox.data.model.User;
import com.bitlogic.sociallbox.notification.service.business.UserService;
import com.bitlogic.sociallbox.notification.service.dao.UserDAO;
import com.bitlogic.sociallbox.notification.service.exception.ClientException;
import com.bitlogic.sociallbox.notification.service.exception.RestErrorCodes;
import com.bitlogic.sociallbox.notification.service.exception.UnauthorizedException;
import com.bitlogic.sociallbox.notification.service.util.LoggingService;

@Service("userService")
@Transactional
public class UserServiceImpl extends LoggingService implements UserService, Constants {

	private static final Logger logger = LoggerFactory
			.getLogger(UserServiceImpl.class);
	@Override
	public Logger getLogger() {
		return logger;
	}
	@Autowired
	private UserDAO userDAO;

	
	@Override
	public User loadUserByUsername(String username) {

		logger.info("### Inside loadUserByUsername. Username :{}  ###",
				username);

		User user = this.userDAO.getUserByEmailIdWithRoles(username, false);
		if (user == null) {
			throw new UnauthorizedException(RestErrorCodes.ERR_003,
					ERROR_USER_INVALID);
		}
		return user;
	}
	
	@Override
	public SmartDevice getSmartDeviceDetails(String uniqueId)
			{
		String LOG_PREFIX = "getSmartDeviceDetails";
		logInfo(LOG_PREFIX, "Getting device details for {} ", uniqueId);
		SmartDevice smartDevice = this.userDAO
				.getSmartDeviceByDeviceId(uniqueId);
		if (smartDevice == null) {
			logError(LOG_PREFIX, "Device details not found for id {}", uniqueId);
			throw new ClientException(RestErrorCodes.ERR_003,
					ERROR_INVALID_DEVICE);
		}
		return smartDevice;
	}
	
	@Override
	public List<Role> getUserRolesByDevice(String deviceId)
			 {
		String LOG_PREFIX = "getUserRolesByDevice";
		logInfo(LOG_PREFIX, "Getting user roles for user with device {}", deviceId);
		List<Role> userRoles = this.userDAO
				.getUserRolesByDevice(deviceId);
		if (userRoles == null) {
			logError(LOG_PREFIX, "No user roles found for user with device {}", deviceId);
			throw new UnauthorizedException(RestErrorCodes.ERR_002,
					ERROR_LOGIN_USER_UNAUTHORIZED);
		}

		return userRoles;
	}

	
}
