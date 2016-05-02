package com.bitlogic.sociallbox.test.util;

import java.math.BigInteger;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.hibernate.Criteria;
import org.hibernate.FetchMode;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

import com.bitlogic.Constants;
import com.bitlogic.sociallbox.data.model.Category;
import com.bitlogic.sociallbox.data.model.Event;
import com.bitlogic.sociallbox.data.model.EventOrganizerAdmin;
import com.bitlogic.sociallbox.data.model.EventStatus;
import com.bitlogic.sociallbox.data.model.Meetup;
import com.bitlogic.sociallbox.data.model.MeetupMessage;
import com.bitlogic.sociallbox.data.model.PushNotificationSettingMaster;
import com.bitlogic.sociallbox.data.model.Role;
import com.bitlogic.sociallbox.data.model.SocialDetailType;
import com.bitlogic.sociallbox.data.model.SourceSystemForPlaces;
import com.bitlogic.sociallbox.data.model.UserRoleType;
import com.bitlogic.sociallbox.service.transformers.EventTransformer;
import com.bitlogic.sociallbox.service.transformers.TransformerFactory;
import com.bitlogic.sociallbox.service.transformers.TransformerFactory.TransformerTypes;

public class DBSetup {
	private static Session session = null;

	public static void main(String[] args) throws Exception {
		Configuration configuration = new Configuration().configure();
		StandardServiceRegistryBuilder srb = new StandardServiceRegistryBuilder();
		srb.applySettings(configuration.getProperties());
		ServiceRegistry sr = srb.build();
		SessionFactory factory = configuration.buildSessionFactory(sr);

		session = factory.openSession();

		session.beginTransaction();
		// setupRoleData();
		// setupCategories();
		// setupPushSettingTypes();
		String sql = " SELECT COUNT(1) , 'MEETUPS_AT_EVENT' FROM MEETUP WHERE EVENT_ID = :eventId "
				+" 	UNION ALL "
				+"	SELECT COUNT(1) , 'TOTAL_REGISTERED_USERS' FROM EVENT_ATTENDEES WHERE EVENT_ID = :eventId  "
				+"	UNION ALL	"
				+"	SELECT COUNT(1) , 'TOTAL_INTERESTED_USERS' FROM USER_FAVOURITE_EVENTS WHERE EVENT_ID = :eventId ";
		SQLQuery query = session.createSQLQuery(sql);
		query.setParameter("eventId", "2c9f8ff353bd8bf50153bd9ea0a10000");
		Map<String,Integer> eventStatSummary = new HashMap<>();
		
		List results = query.list();
		 if(results!=null && !results.isEmpty()){
			 for (Iterator iterator = results.iterator(); iterator.hasNext();) {
				 Object[] resultArr = (Object[]) iterator.next();
				 eventStatSummary.put((String) resultArr[1] , ((BigInteger) resultArr[0] ).intValue());
			 }
    	 }
		 
		session.getTransaction().commit();
		session.close();
		factory.close();
		
	}

	private static void setupRoleData() {
		Role role = new Role();
		role.setUserRoleType(UserRoleType.APP_USER);

		Role role1 = new Role();
		role1.setUserRoleType(UserRoleType.EVENT_ORGANIZER);

		Role role2 = new Role();
		role2.setUserRoleType(UserRoleType.ADMIN);
		session.save(role);
		session.save(role1);
		session.save(role2);
	}

	private static void setupCategories() {
		Category category = new Category();
		category.setName("event");
		category.setDescription("Event-o-pedia");
		category.setDisplayOrder(1);
		category.setExtId("1");
		category.setSystemForPlaces(SourceSystemForPlaces.SOCIALLBOX);
		category.setCreateDt(new Date());

		Category categoryFood = new Category();
		categoryFood.setDisplayOrder(2);
		categoryFood.setName("restaurant");
		categoryFood.setDescription("Food Lust");
		categoryFood.setExtId("2");
		categoryFood.setSystemForPlaces(SourceSystemForPlaces.ZOMATO);
		categoryFood.setCreateDt(new Date());

		Category categoryCafe = new Category();
		categoryCafe.setDisplayOrder(3);
		categoryCafe.setName("cafe");
		categoryCafe.setDescription("Coffee Love");
		categoryCafe.setExtId("6");
		categoryCafe.setSystemForPlaces(SourceSystemForPlaces.ZOMATO);
		categoryCafe.setCreateDt(new Date());

		Category categoryClub = new Category();
		categoryClub.setDisplayOrder(4);
		categoryClub.setName("night_club");
		categoryClub.setDescription("NightLife");
		categoryClub.setExtId("3");
		categoryClub.setSystemForPlaces(SourceSystemForPlaces.ZOMATO);
		categoryClub.setCreateDt(new Date());

		Category categoryMovie = new Category();
		categoryMovie.setDisplayOrder(5);
		categoryMovie.setName("movie_theater");
		categoryMovie.setExtId("movie_theater");
		categoryMovie.setSystemForPlaces(SourceSystemForPlaces.GOOGLE);
		categoryMovie.setDescription("Movie-O-Logy");
		categoryMovie.setCreateDt(new Date());

		session.save(category);
		session.save(categoryFood);
		session.save(categoryCafe);
		session.save(categoryClub);
		session.save(categoryMovie);
	}

	private static void setupPushSettingTypes() {
		PushNotificationSettingMaster type = new PushNotificationSettingMaster();
		type.setName("newFriendNot");
		type.setDisplayName("Notify me when my friend joins SociallBox");
		type.setDisplayOrder(1);

		PushNotificationSettingMaster type1 = new PushNotificationSettingMaster();
		type1.setName("meetupInvite");
		type1.setDisplayName("Notify me when I'm invited for meetup");
		type1.setDisplayOrder(2);

		session.save(type);
		session.save(type1);

	}

}
