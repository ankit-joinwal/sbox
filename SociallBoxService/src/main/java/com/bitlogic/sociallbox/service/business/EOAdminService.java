package com.bitlogic.sociallbox.service.business;

import java.util.List;
import java.util.Map;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.multipart.MultipartFile;

import com.bitlogic.Constants;
import com.bitlogic.sociallbox.data.model.CompanyEmailVerificationToken;
import com.bitlogic.sociallbox.data.model.EventOrganizerAdmin;
import com.bitlogic.sociallbox.data.model.EventStatus;
import com.bitlogic.sociallbox.data.model.User;
import com.bitlogic.sociallbox.data.model.UserEmailVerificationToken;
import com.bitlogic.sociallbox.data.model.requests.AddCompanyToProfileRequest;
import com.bitlogic.sociallbox.data.model.requests.UpdateEOAdminProfileRequest;
import com.bitlogic.sociallbox.data.model.requests.UpdateEventRequest;
import com.bitlogic.sociallbox.data.model.response.EOAdminProfile;
import com.bitlogic.sociallbox.data.model.response.EODashboardResponse;
import com.bitlogic.sociallbox.data.model.response.EventResponseForAdmin;
import com.bitlogic.sociallbox.service.model.EventApprovedApplicationEvent;

public interface EOAdminService {

	public EOAdminProfile signup(User user,String appUrl);
	
	public EOAdminProfile signin(String emailId);
	
	@PreAuthorize("hasAnyRole('"+Constants.ROLE_TYPE_ADMIN+"','"+Constants.ROLE_ORGANIZER+"')")
	public EOAdminProfile addCompany(AddCompanyToProfileRequest addCompanyRequest,Long userId);
	
	public EOAdminProfile getProfile(Long id);
	
	@PreAuthorize("hasAnyRole('"+Constants.ROLE_TYPE_ADMIN+"','"+Constants.ROLE_ORGANIZER+"')")
	public EOAdminProfile updateProfile(UpdateEOAdminProfileRequest updateProfileRequest);
	
	@PreAuthorize("hasAnyRole('"+Constants.ROLE_TYPE_ADMIN+"','"+Constants.ROLE_ORGANIZER+"')")
	public String updateProfilePic(Long userId,List<MultipartFile> images);
	
	@PreAuthorize("hasAnyRole('"+Constants.ROLE_TYPE_ADMIN+"','"+Constants.ROLE_ORGANIZER+"')")
	public String updateCompanyPic(Long userId,String orgId,List<MultipartFile> images,String type);
	
	@PreAuthorize("hasAnyRole('"+Constants.ROLE_TYPE_ADMIN+"','"+Constants.ROLE_ORGANIZER+"')")
	public void makeEventLive(String eventId);
	
	@PreAuthorize("hasAnyRole('"+Constants.ROLE_TYPE_ADMIN+"','"+Constants.ROLE_ORGANIZER+"')")
	public void cancelEvent(String eventId);
	
	public EODashboardResponse getDashboardData(Long userId);
	
	public EODashboardResponse getAttendeesByMonth(Long profileId);
	
	@PreAuthorize("hasAnyRole('"+Constants.ROLE_TYPE_ADMIN+"','"+Constants.ROLE_ORGANIZER+"')")
	public EventOrganizerAdmin createEOAdmin(EventOrganizerAdmin eventOrganizerAdmin);
	
	public EventOrganizerAdmin getEOAdminById(Long eoAdminId);
	
	public EventOrganizerAdmin getEOAdminByUserId(Long userId);
	
	@PreAuthorize("hasAnyRole('"+Constants.ROLE_TYPE_ADMIN+"','"+Constants.ROLE_ORGANIZER+"')")
	public Map<String,?> getMyEvents(Long userId ,String timeline,EventStatus status,Integer page);
	
	@PreAuthorize("hasAnyRole('"+Constants.ROLE_TYPE_ADMIN+"','"+Constants.ROLE_ORGANIZER+"')")
	public EventResponseForAdmin getEventDetails(String userEmail,String eventId);
	
	@PreAuthorize("hasAnyRole('"+Constants.ROLE_TYPE_ADMIN+"','"+Constants.ROLE_ORGANIZER+"')")
	public EventResponseForAdmin getEventStatistics(String userEmail,String eventId);
	
	@PreAuthorize("hasAnyRole('"+Constants.ROLE_TYPE_ADMIN+"','"+Constants.ROLE_ORGANIZER+"')")
	public void updateEvent(Long userId,UpdateEventRequest updateEventRequest);
	
	@PreAuthorize("hasAnyRole('"+Constants.ROLE_TYPE_ADMIN+"','"+Constants.ROLE_ORGANIZER+"')")
	public void updateEventImage(Long userId,List<MultipartFile> images,String eventId);

	public void resendEmailVerification(Long userId);
	
	public void createCompanyEmailVerification(CompanyEmailVerificationToken emailVerificationToken);
	
	public void sendEventApprovalNotification(EventApprovedApplicationEvent event);
	
	public void verifyCompanyEmail(String token);
	
	public void resendCompanyEmailVerification(String orgId);
}
