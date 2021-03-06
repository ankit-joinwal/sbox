package com.bitlogic.sociallbox.service.dao.impl;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.hibernate.Criteria;
import org.hibernate.FetchMode;
import org.hibernate.SQLQuery;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.bitlogic.Constants;
import com.bitlogic.sociallbox.data.model.CompanyEmailVerificationToken;
import com.bitlogic.sociallbox.data.model.EOAdminStatus;
import com.bitlogic.sociallbox.data.model.Event;
import com.bitlogic.sociallbox.data.model.EventImage;
import com.bitlogic.sociallbox.data.model.EventOrganizer;
import com.bitlogic.sociallbox.data.model.EventOrganizerAdmin;
import com.bitlogic.sociallbox.data.model.EventStatus;
import com.bitlogic.sociallbox.data.model.Location;
import com.bitlogic.sociallbox.data.model.ResetPasswordToken;
import com.bitlogic.sociallbox.data.model.UserEmailVerificationToken;
import com.bitlogic.sociallbox.data.model.response.EventDetailsResponse;
import com.bitlogic.sociallbox.data.model.response.EventResponse;
import com.bitlogic.sociallbox.service.dao.AbstractDAO;
import com.bitlogic.sociallbox.service.dao.EventOrganizerDAO;

@Repository("eventOrganizerDAO")
public class EventOrganizerDAOImpl extends AbstractDAO implements EventOrganizerDAO{

	@Override
	public EventOrganizer createEO(EventOrganizer eventOrganizer) {
		eventOrganizer.setIsEnabled(Boolean.TRUE);
		String id = (String) save(eventOrganizer);
		return getEODetails(id);
	}
	
	@Override
	public EventOrganizer getEODetails(String organizerId) {
		Criteria criteria = getSession().createCriteria(EventOrganizer.class)
				.add(Restrictions.eq("isEnabled", Boolean.TRUE))
				.add(Restrictions.eq("uuid", organizerId));
		EventOrganizer eventOrganizer = (EventOrganizer) criteria.uniqueResult();
		return eventOrganizer;
	}
	
	@Override
	public EventOrganizer getEOByName(String name) {
		Criteria criteria = getSession().createCriteria(EventOrganizer.class)
				.add(Restrictions.eq("isEnabled", Boolean.TRUE))
				.add(Restrictions.eq("name", name));
		EventOrganizer eventOrganizer = (EventOrganizer) criteria.uniqueResult();
		return eventOrganizer;
	}
	
	@Override
	public EventOrganizerAdmin createEOAdmin(
			EventOrganizerAdmin eventOrganizerAdmin) {
		Long id = (Long) getSession().save(eventOrganizerAdmin);
		eventOrganizerAdmin.setId(id);
		return eventOrganizerAdmin;
	}
	
	
	
	@Override
	public List<EventOrganizerAdmin> getEOAdminProfilesByIds(List<Long> profileIds) {
		Criteria criteria = getSession().createCriteria(EventOrganizerAdmin.class)
							.add(Restrictions.in("id", profileIds));
		return criteria.list();
	}
	
	@Override
	public EventOrganizerAdmin getEOAdminProfileById(Long profileId) {
		Criteria criteria = getSession().createCriteria(EventOrganizerAdmin.class)
				.add(Restrictions.eq("id", profileId));
		return (EventOrganizerAdmin) criteria.uniqueResult();
	}
	
	@Override
	public EventOrganizerAdmin getEOAdminProfileByUserId(Long userId) {
		String sql = "SELECT * FROM ORGANIZER_ADMINS WHERE USER_ID = :userId";
		SQLQuery query = getSession().createSQLQuery(sql);
		query.addEntity(EventOrganizerAdmin.class);
		query.setParameter("userId", userId);
		
		Object result = query.uniqueResult();
		EventOrganizerAdmin organizerAdmin = (EventOrganizerAdmin) result;
		
		return organizerAdmin;
	}
	
	@Override
	public Map<String, ?> getEventsForOrganizer(String timeline,
			EventStatus eventStatus, Integer page, Long adminProfileId) {
		
		int startIdx = (page - 1) * Constants.RECORDS_PER_PAGE_UI;
		int noOfRecords = Constants.RECORDS_PER_PAGE_UI;
		StringBuilder queryForTotalRecords = new StringBuilder("SELECT COUNT(1) "
				+ "		FROM EVENT EVENT INNER JOIN EVENT_DETAILS DTL	ON EVENT.ID = DTL.EVENT_ID ");
		queryForTotalRecords.append(" WHERE DTL.ORGANIZER_ADMIN_ID = :adminProfileId");
		
		StringBuilder sql = new StringBuilder("SELECT EVENT.ID , EVENT.TITLE , DATE_FORMAT(EVENT.START_DT,'%b %d %Y %h:%i %p') , DATE_FORMAT(EVENT.END_DT,'%b %d %Y %h:%i %p') ,"
					+ "	EVENT.EVENT_STATUS, DTL.LOCALITY , IMG.URL FROM EVENT EVENT INNER JOIN EVENT_DETAILS DTL	ON EVENT.ID = DTL.EVENT_ID "
					+ " LEFT JOIN EVENT_IMAGES IMG ON EVENT.ID = IMG.EVENT_ID ");
		sql.append(" WHERE DTL.ORGANIZER_ADMIN_ID = :adminProfileId");
		Date now = new Date();
		if(timeline.equals(Constants.TIMELINE_UPCOMING)){
			sql.append(" AND EVENT.END_DT > :dateLimit ");
			queryForTotalRecords.append(" AND EVENT.END_DT > :dateLimit ");
		}else{
			sql.append(" AND EVENT.END_DT < :dateLimit ");
			queryForTotalRecords.append(" AND EVENT.END_DT < :dateLimit ");
		}
		
		if(eventStatus!=null){
			sql.append(" AND EVENT.EVENT_STATUS = :eventStatus ");
			queryForTotalRecords.append(" AND EVENT.EVENT_STATUS = :eventStatus ");
		}
		
		sql.append(" ORDER BY DTL.CREATE_DT DESC");
		
		sql.append(" LIMIT :startIdx,:noOfRecords");
		
		SQLQuery query = getSession().createSQLQuery(sql.toString());
		query.setParameter("adminProfileId", adminProfileId);
		query.setParameter("dateLimit", now);
		if(eventStatus!=null){
			query.setParameter("eventStatus", eventStatus.name());
		}
		query.setParameter("startIdx", startIdx);
		query.setParameter("noOfRecords", noOfRecords);
		
		SQLQuery totalRecordsQuery = getSession().createSQLQuery(queryForTotalRecords.toString());
		totalRecordsQuery.setParameter("adminProfileId", adminProfileId);
		totalRecordsQuery.setParameter("dateLimit", now);
		if(eventStatus!=null){
			totalRecordsQuery.setParameter("eventStatus", eventStatus.name());
		}
		
		List results = query.list();
		List<EventResponse> events = new ArrayList<EventResponse>();
		Integer totalRecords = 0;
		if(results!=null){
			
			Object result = totalRecordsQuery.uniqueResult();
			totalRecords = ((BigInteger)result).intValue();
			
			 for (Iterator iterator = results.iterator(); iterator.hasNext();) {
				 Object[] resultArr = (Object[]) iterator.next();
				 EventResponse eventResponse = new EventResponse();
				 EventDetailsResponse detailsResponse = new EventDetailsResponse();
				 Location location = new Location();
				 eventResponse.setUuid((String) resultArr[0]);
				 eventResponse.setTitle((String)resultArr[1]);
				 eventResponse.setStartDate((String)resultArr[2]);
				 eventResponse.setEndDate((String)resultArr[3]);
				 
				 eventResponse.setEventStatus(EventStatus.getStatusFromValue((String)resultArr[4]));
				 
				 location.setLocality((String)resultArr[5]);
				 EventImage eventImage = new EventImage();
				 eventImage.setUrl((String)resultArr[6]);
				 eventResponse.setDisplayImage(eventImage);
				 detailsResponse.setLocation(location);
				 eventResponse.setEventDetails(detailsResponse);
				 events.add(eventResponse);
			 }
		}
		Map<String,Object> resultMap = new HashMap<>();
		resultMap.put("EVENTS", events);
		resultMap.put("TOTAL_RECORDS", totalRecords);
		return resultMap;
	}
	
	@Override
	public Map<String, Object> getPendingEOAdminProfiles(Integer page) {
		
		String sql = "SELECT COUNT(1) FROM ORGANIZER_ADMINS WHERE STATUS = :status";
		
		SQLQuery query = getSession().createSQLQuery(sql);
		query.setParameter("status", EOAdminStatus.PENDING.name());
		
		Object result = query.uniqueResult();
		
		Integer totalRecords = ((BigInteger)result).intValue();
		List<EventOrganizerAdmin> pendingProfiles = new ArrayList<>();
		if (totalRecords != 0) {
			int startIdx = (page - 1) * Constants.RECORDS_PER_PAGE_UI;
			int noOfRecords = Constants.RECORDS_PER_PAGE_UI;
			Criteria criteria = getSession().createCriteria(EventOrganizerAdmin.class)
								.setFetchMode("user", FetchMode.JOIN)
								.setFetchMode("organizer", FetchMode.JOIN)
								.addOrder(Order.desc("createDt"))
								.add(Restrictions.eq("status", EOAdminStatus.PENDING))
								.setFirstResult(startIdx)
								.setMaxResults(noOfRecords);
			pendingProfiles = criteria.list();
			
		}
		
		Map<String,Object> resultMap = new HashMap<>();
		resultMap.put("PENDING_PROFILES", pendingProfiles);
		resultMap.put("TOTAL_RECORDS", totalRecords);
		return resultMap;
	}
	
	@Override
	public Map<String, Object> getAllOrganizers(Integer page) {
		String sql = "SELECT COUNT(1) FROM ORGANIZER_ADMINS";
		
		SQLQuery query = getSession().createSQLQuery(sql);
		Object result = query.uniqueResult();
		
		Integer totalRecords = ((BigInteger)result).intValue();
		List<EventOrganizerAdmin> profiles = new ArrayList<>();
		if (totalRecords != 0) {
			int startIdx = (page - 1) * Constants.RECORDS_PER_PAGE_UI;
			int noOfRecords = Constants.RECORDS_PER_PAGE_UI;
			Criteria criteria = getSession().createCriteria(EventOrganizerAdmin.class)
				.setFetchMode("user", FetchMode.JOIN)
				.setFetchMode("organizer", FetchMode.JOIN)
				.addOrder(Order.desc("createDt"))
				.setFirstResult(startIdx)
				.setMaxResults(noOfRecords);
			
			profiles = criteria.list();
		}
		Map<String,Object> resultMap = new HashMap<>();
		resultMap.put("ADMIN_PROFILES", profiles);
		resultMap.put("TOTAL_RECORDS", totalRecords);
		return resultMap;
	}
	@Override
	public void createVerificationToken(
			CompanyEmailVerificationToken emailVerificationToken) {
		String sql = "SELECT * FROM COMPANY_EMAIL_VERIFICATION_TOKEN WHERE ORGANIZER_ID = :orgId";
		SQLQuery query = getSession().createSQLQuery(sql);
		
		query.addEntity(CompanyEmailVerificationToken.class);
		query.setParameter("orgId", emailVerificationToken.getOrganizer().getUuid());
		
		CompanyEmailVerificationToken existingToken = (CompanyEmailVerificationToken)query.uniqueResult();
		
		if(existingToken == null){
			getSession().save(emailVerificationToken);
		}else{
			existingToken.setToken(emailVerificationToken.getToken());
			existingToken.setExpiryDate(emailVerificationToken.getExpiryDate());
		}
		
	}
	
	@Override
	public CompanyEmailVerificationToken getCompanyEmailVerificationToken(
			String token) {
		Criteria criteria = getSession().createCriteria(CompanyEmailVerificationToken.class)
							.add(Restrictions.eq("token", token));
		
		return (CompanyEmailVerificationToken) criteria.uniqueResult();
	}
	
	@Override
	public ResetPasswordToken getResetPasswordToken(String token) {
		Criteria criteria = getSession().createCriteria(ResetPasswordToken.class)
							.add(Restrictions.eq("token", token));
		return (ResetPasswordToken) criteria.uniqueResult();
	}
}
