package com.bitlogic.sociallbox.service.dao;

import java.util.List;
import java.util.Map;

import com.bitlogic.sociallbox.data.model.CompanyEmailVerificationToken;
import com.bitlogic.sociallbox.data.model.EventOrganizer;
import com.bitlogic.sociallbox.data.model.EventOrganizerAdmin;
import com.bitlogic.sociallbox.data.model.EventStatus;
import com.bitlogic.sociallbox.data.model.UserEmailVerificationToken;
import com.bitlogic.sociallbox.data.model.response.EventResponse;


public interface EventOrganizerDAO {

	public EventOrganizer createEO(EventOrganizer eventOrganizer);
	
	public EventOrganizer getEODetails(String organizerId);
	
	public EventOrganizer getEOByName(String name);
	
	public EventOrganizerAdmin createEOAdmin(EventOrganizerAdmin eventOrganizerAdmin);
	
	public Map<String, Object> getPendingEOAdminProfiles(Integer page);
	
	public List<EventOrganizerAdmin> getEOAdminProfilesByIds(List<Long> profileIds);
	
	public EventOrganizerAdmin getEOAdminProfileById(Long profileId);
	
	public EventOrganizerAdmin getEOAdminProfileByUserId(Long userId);
	
	public Map<String, ?> getEventsForOrganizer(String timeline,EventStatus eventStatus,Integer page,Long adminProfileId);
	
	public Map<String, Object> getAllOrganizers(Integer page);
	
	public void createVerificationToken(CompanyEmailVerificationToken emailVerificationToken);
	
	public CompanyEmailVerificationToken getCompanyEmailVerificationToken(String token);
}
