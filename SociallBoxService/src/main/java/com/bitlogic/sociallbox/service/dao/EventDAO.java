package com.bitlogic.sociallbox.service.dao;

import java.util.List;
import java.util.Map;
import java.util.Set;

import com.bitlogic.sociallbox.data.model.Event;
import com.bitlogic.sociallbox.data.model.EventAttendee;
import com.bitlogic.sociallbox.data.model.EventImage;
import com.bitlogic.sociallbox.data.model.EventOrganizerAdmin;
import com.bitlogic.sociallbox.data.model.User;
import com.bitlogic.sociallbox.data.model.UserFavouriteEvents;
import com.bitlogic.sociallbox.data.model.response.EODashboardResponse.AttendeesInMonth;
import com.bitlogic.sociallbox.data.model.response.EventResponse;
import com.bitlogic.sociallbox.data.model.response.EventResponseForAdmin.DailyEventMeetupStatistics;
import com.bitlogic.sociallbox.data.model.response.EventResponseForAdmin.DailyEventUserStatistics;
import com.bitlogic.sociallbox.service.exception.ServiceException;

public interface EventDAO {

	public Event create(Event event);
	
	public Event saveEvent(Event event);
	
	public Event getEvent(String id);
	
	public Event getEventWithoutImage(String id);
	
	public List<EventResponse> searchEventsByName(String name);
	
	public void makeEventLive(Event event);
	
	public List<EventResponse> getEventsByFilter(Long userId,Map<String,Double> cordinatesMap,List<Long> tagIds,String city,String country,Integer page) throws ServiceException;
	
	public List<EventResponse> getUpcomingEventsOfOrg(Long userId,Map<String, Double> cordinatesMap,Set<EventOrganizerAdmin> eventOrganizerAdmins,String filterEventId);
	
	public void saveEventImages(List<EventImage> images);
	
	public List<EventImage> getEventImages(String eventId);
	
	public Map<String, ?> getPendingEvents(Integer page);
	
	public List<Event> getEventsByIds(List<String> eventIds);
	
	public EventAttendee saveAttendee(EventAttendee attendee);
	
	public EventAttendee getAttendee(String eventId , Long userId);
	
	public EventAttendee getAttendeeById(Long attendeeId);
	
	public Boolean addEventToFav(UserFavouriteEvents favouriteEvents);
	
	public void removeEventFromFav(UserFavouriteEvents favouriteEvents);
	
	public Boolean checkIfUserRegisteredForEvent(EventAttendee attendee);
	
	public Boolean checkIfUserFavEvent(UserFavouriteEvents userFavouriteEvents);
	
	public List<EventAttendee> getEventAttendees(Event event);
	
	public List<Long> getEventAttendeesIds(Event event);
	
	public void deRegisterForEvent(String eventId, Long userId);
	
	public void deRegisterMeetupAtEvent(String meetupId,String eventId);
	
	public List<Event> getUserPastRegisteredEvents(User user);
	
	public List<Event> getUserPastFavouriteEvents(User user);
	
	public List<Event> getUserUpcomingRegisteredEvents(User user);
	
	public List<Event> getUserUpcomingFavouriteEvents(User user);
	
	public List<String> getEventCountPastSixMonth(Long profileId);
	
	public Integer getAttendeesCountForEvents(List<String> eventIds);
	
	public Integer getInterestedUsersCountForEvents(List<String> eventIds);
	
	public Integer getMeetupsAtEvents(List<String> eventIds);
	
	public List<AttendeesInMonth> getAttendeesByMonth(Long userId);
	
	public Map<String,Integer> getEventStatSummary(Event event);
	
	public List<DailyEventUserStatistics> getEventUsersStatDetails(Event event,List<String> datesForCalculation);
	
	public List<DailyEventMeetupStatistics> getEventMeetupsStatDetails(Event event,List<String> datesForCalculation);
}
