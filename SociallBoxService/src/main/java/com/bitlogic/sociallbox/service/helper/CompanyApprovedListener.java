package com.bitlogic.sociallbox.service.helper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import com.bitlogic.sociallbox.data.model.SocialBoxConfig;
import com.bitlogic.sociallbox.service.business.EOAdminService;
import com.bitlogic.sociallbox.service.model.CompanyApprovedApplicationEvent;

@Component
public class CompanyApprovedListener implements ApplicationListener<CompanyApprovedApplicationEvent>{

	@Autowired
	private EOAdminService adminService;
	
	@Autowired
	private SocialBoxConfig socialBoxConfig;
	
	@Override
	public void onApplicationEvent(CompanyApprovedApplicationEvent event) {
		adminService.sendCompanyApprovalNotification(event);
	}
}
