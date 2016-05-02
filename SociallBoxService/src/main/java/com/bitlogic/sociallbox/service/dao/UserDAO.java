package com.bitlogic.sociallbox.service.dao;

import java.util.List;
import java.util.Map;
import java.util.Set;

import com.bitlogic.sociallbox.data.model.MeetupAttendeeEntity;
import com.bitlogic.sociallbox.data.model.Role;
import com.bitlogic.sociallbox.data.model.SmartDevice;
import com.bitlogic.sociallbox.data.model.User;
import com.bitlogic.sociallbox.data.model.UserMessage;
import com.bitlogic.sociallbox.data.model.UserRoleType;
import com.bitlogic.sociallbox.data.model.UserSetting;
import com.bitlogic.sociallbox.data.model.UserSocialDetail;

public interface UserDAO {

	public User createNewMobileUser(User userToCreate);
	
	public User setupFirstDeviceForUser(User user, SmartDevice smartDevice);
	
	public User addDeviceToExistingUserDevices(User user, SmartDevice smartDevice);
	
	public User createNewWebUser(User userToCreate);
	
	public List<User> getAllUsers();
	
	public User getUserById(Long id);
	
	public User getUserByEmailId(String emailId,boolean updateQuota);
	
	public User getUserByEmailIdWithRoles(String emailId,boolean updateQuota);
	
	public void saveUserSocialData(UserSocialDetail userSocialDetails);
	
	public Map<Long,User> getUsersMapFromUserIds(List<Long> userIds);
	
	public Map<String,UserSocialDetail> getSocialDetails(Set<String> socialIds);
	
	public UserSocialDetail getSocialDetail(String socialId);
	
	public MeetupAttendeeEntity getAttendeeByMeetupIdAndSocialId(String meetupId, Long socialId);
	
	public Role getRoleType(UserRoleType roleType);
	
	public List<User> setupFriendsUsingExternalIds(User user,String[] externalIds);
	
	public List<User> getUserFriends(User user);
	
	
	public List<User> getUserFriendsByIds(User user,List<Long> friendIds);
	
	public List<UserSetting> getUserSettings(User user);
	
	public void saveUserSettings(List<UserSetting> oldSettings,List<UserSetting> newSettings);
	
	public void addMessageForUser(UserMessage userMessage);
	
	public List<UserMessage> getMessages(Long userId);
	
	public UserMessage getMessage(Long userId,Long messageId);
	
	
	
}
