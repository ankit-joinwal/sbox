package com.bitlogic.sociallbox.service.helper;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import com.bitlogic.sociallbox.data.model.UserEmailVerificationToken;
import com.bitlogic.sociallbox.data.model.SocialBoxConfig;
import com.bitlogic.sociallbox.data.model.User;
import com.bitlogic.sociallbox.service.business.UserService;
import com.bitlogic.sociallbox.service.model.UserRegistrationEvent;

@Component
public class RegistrationEventListener implements ApplicationListener<UserRegistrationEvent>{

	@Autowired
	private UserService userService;
	
	@Autowired
	private SocialBoxConfig socialBoxConfig;
	
	@Override
	public void onApplicationEvent(UserRegistrationEvent event) {
		User user = event.getUser();
		String token = UUID.randomUUID().toString();
		String confirmationUrl = socialBoxConfig.getVerifyEmailUrl()+"?token=" + token;
		System.out.println("confirmationUrl "+confirmationUrl);
		UserEmailVerificationToken emailVerificationToken = new UserEmailVerificationToken(token, user);
		emailVerificationToken.setConfirmationLink(confirmationUrl);
		userService.createEmailVerification(emailVerificationToken);
	}
}
