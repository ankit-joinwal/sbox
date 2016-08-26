package com.bitlogic.sociallbox.service.helper;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import com.bitlogic.sociallbox.data.model.ResetPasswordToken;
import com.bitlogic.sociallbox.data.model.SocialBoxConfig;
import com.bitlogic.sociallbox.data.model.User;
import com.bitlogic.sociallbox.service.business.UserService;
import com.bitlogic.sociallbox.service.model.ResetPasswordEvent;

@Component
public class ResetPasswordEventListener implements ApplicationListener<ResetPasswordEvent>{

	@Autowired
	private UserService userService;
	
	@Autowired
	private SocialBoxConfig socialBoxConfig;
	
	@Override
	public void onApplicationEvent(ResetPasswordEvent event) {
		User user = event.getUser();
		String token = UUID.randomUUID().toString();
		String resetPasswordUrl = socialBoxConfig.getResetPasswordUrl()+"?token=" + token;
		ResetPasswordToken resetPasswordToken = new ResetPasswordToken(token, user);
		resetPasswordToken.setResetLink(resetPasswordUrl);
		userService.sendPasswordResetEmail(resetPasswordToken);
	}
}
