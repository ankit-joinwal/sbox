package com.bitlogic.sociallbox.service.business;

import java.util.List;
import java.util.Map;

import org.springframework.security.access.prepost.PreAuthorize;

import com.bitlogic.Constants;
import com.bitlogic.sociallbox.data.model.EOAdminStatus;
import com.bitlogic.sociallbox.data.model.User;
import com.bitlogic.sociallbox.data.model.UserTypeBasedOnDevice;
import com.bitlogic.sociallbox.data.model.response.EOAdminProfile;

public interface AdminService {

	@PreAuthorize("hasRole('"+Constants.ROLE_TYPE_ADMIN+"')")
	public Map<String, ?> getPendingProfiles(Integer page);
	
	@PreAuthorize("hasRole('"+Constants.ROLE_TYPE_ADMIN+"')")
	public void approveOrRejectProfiles(List<Long> profileIds,EOAdminStatus status);
	@PreAuthorize("hasRole('"+Constants.ROLE_TYPE_ADMIN+"')")
	public User signupOrSignin(String emailId,UserTypeBasedOnDevice userTypeBasedOnDevice);
	
	@PreAuthorize("hasRole('"+Constants.ROLE_TYPE_ADMIN+"')")
	public Map<String, ?> getAllOrganizers(String emailId,Integer page);
	
	@PreAuthorize("hasRole('"+Constants.ROLE_TYPE_ADMIN+"')")
	public void approveEvents(List<String> eventIds);
	
	@PreAuthorize("hasRole('"+Constants.ROLE_TYPE_ADMIN+"')")
	public void rejectEvents(List<String> eventIds);
	
}
