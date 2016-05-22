package com.bitlogic.sociallbox.service.helper;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import com.bitlogic.sociallbox.data.model.CompanyEmailVerificationToken;
import com.bitlogic.sociallbox.data.model.EventOrganizer;
import com.bitlogic.sociallbox.data.model.UserEmailVerificationToken;
import com.bitlogic.sociallbox.data.model.SocialBoxConfig;
import com.bitlogic.sociallbox.data.model.User;
import com.bitlogic.sociallbox.service.business.EOAdminService;
import com.bitlogic.sociallbox.service.business.UserService;
import com.bitlogic.sociallbox.service.model.CompanyRegistrationEvent;
import com.bitlogic.sociallbox.service.model.UserRegistrationEvent;

@Component
public class CompanyRegistrationEventListener implements ApplicationListener<CompanyRegistrationEvent>{

	@Autowired
	private EOAdminService adminService;
	
	@Autowired
	private SocialBoxConfig socialBoxConfig;
	
	@Override
	public void onApplicationEvent(CompanyRegistrationEvent event) {
		EventOrganizer organizer = event.getOrganizer();
		String token = UUID.randomUUID().toString();
		String confirmationUrl = socialBoxConfig.getVerifyCompanyEmailUrl()+"?token=" + token;
		System.out.println("confirmationUrl "+confirmationUrl);
		CompanyEmailVerificationToken emailVerificationToken = new CompanyEmailVerificationToken(token, organizer);
		emailVerificationToken.setConfirmationLink(confirmationUrl);
		adminService.createCompanyEmailVerification(emailVerificationToken);
	}
}
