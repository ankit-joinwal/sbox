package com.bitlogic;

import java.io.File;

public interface Constants {

	String MEETUPS_BASE_URL_PROPERTY = "sb.meetups.base.url";
	String EVENTS_BASE_URL_PROPERTY = "sb.events.base.url";
	String EO_HOME_URL_PROPERTY = "sb.eo.events.url";
	String DEFAULT_MEETUP_IMAGE_URL = "https://s3-ap-southeast-1.amazonaws.com/sociallbox/cdn/images/mobile/meetup_cover.png";
	
	//Hibernate Properties
	String JDBC_DRIVER_PROPERTY = "jdbc.driverClassName";
	String HIBERNATE_DIALECT_PROPERTY = "hibernate.dialect";
	String HIBERNATE_SHOW_SQL_PROPERTY = "hibernate.show_sql";
	String HIBERNATE_FORMAT_SQL_PROPERTY = "hibernate.format_sql";
	String HIBERNATE_HBM_DDL_PROPERTY = "hibernate.hbm2ddl.auto";
	String HIBERNATE_JDBC_BATCH_SIZE = "hibernate.jdbc.batch_size";
	
	//BoneCP properties
	String BONECP_URL = "bonecp.url";
	String BONECP_USERNAME = "bonecp.username";
	String BONECP_PASSWORD = "bonecp.password";
	String BONECP_IDLE_MAX_AGE_IN_MINUTES = "bonecp.idleMaxAgeInMinutes";
	String BONECP_IDLE_CONNECTION_TEST_PERIOD_IN_MINUTES = "bonecp.idleConnectionTestPeriodInMinutes";
	String BONECP_MAX_CONNECTIONS_PER_PARTITION = "bonecp.maxConnectionsPerPartition";
	String BONECP_MIN_CONNECTIONS_PER_PARTITION = "bonecp.minConnectionsPerPartition";
	String BONECP_PARTITION_COUNT = "bonecp.partitionCount";
	String BONECP_ACQUIRE_INCREMENT = "bonecp.acquireIncrement";
	String BONECP_STATEMENTS_CACHE_SIZE = "bonecp.statementsCacheSize";
	
	//Not used
	String DEFAULT_USER_DAILY_QUOTA_PROPERTY = "ggenie.default.user.quota";
	Integer DEFAULT_USER_DAILY_QUOTA = 100;
	
	//Google API Config Properties
	String G_NEARBY_PLACES_URL = "gplaces.nearby.url";
	String G_TSEARCH_URL = "gplaces.tsearch.url";
	String G_PLACE_DETAIL_URL = "gplaces.place.details.url";
	String DEFAULT_GAPI_DATA_EXCHANGE_FMT = "gapi.data.format";
	String G_PLACE_PHOTOS_URL_KEY = "gplaces.photo.url";
	String GAPI_GCM_SERVER_URL = "gapi.gcm.server.url";
	String GAPI_KEY = "gapi.key";
	
	//Zomato API Config Properties
	String ZOMATO_NEARBY_PLACES_URL = "zplaces.nearby.url";
	String ZOMATO_PLACE_DETAIL_URL = "zplaces.place.details.url";
	String ZOMATO_DEFAULT_GAPI_DATA_EXCHANGE_FMT = "zapi.data.format";
	String PLACES_PHOTOS_GET_API_BASE_PATH_KEY = "places.photos.api";
	String ZOMATO_API_KEY = "zapi.key";
	
	//Common Request Header
	String AUTHORIZATION_HEADER = "Authorization";
	String USER_TYPE_HEADER = "type";
	String ACCEPT_HEADER = "Accept";
	String LATTITUDE_KEY = "LATTITUDE";
	String LONGITUDE_KEY = "LONGITUDE";
	String SHOPPING_EVENT_TYPE_NAME = "shop";
	String LOCATION_HEADER = "Location";
	String AUTH_DATE_HEADER = "X-Auth-Date";
	

	//Common Constants
	String QUESTIONMARK = "?";
	String COMMA = ",";
	String AMP = "&";
	String EQUAL = "=";
	String PLUS = "+";
	String UNAME_DELIM = "~";
	String DEVICE_PREFIX = "SD";
	String WEB_USER_PREFIX = "W";
	String ISA_PREFIX = "ISA";
	String URL_PATH_SEPARATOR = "/";
	String TRUE = "true";
	String KILOMETRES = " Kms";
	String IS_ENABLED_TRUE = "true";
	String ONE_WHITESPACE = " ";
	String COLON = ":";
	String DOUBLE_COLON = "::";
	String BLANK = "";
	String ZERO = "0";
	String HYPHEN = "-";
	Integer RECORDS_PER_PAGE = 20;
	Integer RECORDS_PER_PAGE_UI = 10;
	String SUCCESS_STATUS = "Success";
	String DEFAULT_USER_PICTURE = "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xla1/v/t1.0-1/c15.0.50.50/p50x50/1379841_10150004552801901_469209496895221757_n.jpg?oh=1ecfea0dda4f046e7d518ce2243c1a61&oe=57789C33&__gda__=1471731386_863525fcdf1cee40b0e9562b633a5197";
	//Default Radius for Nearby Search
	String DEFAULT_RADIUS = "5000";
	String TIMELINE_UPCOMING = "upcoming";
	String TIMELINE_PAST = "past";
	Integer FEEDS_PER_PAGE = 20;
	
	//Date Formats 
	String MEETUP_DATE_FORMAT = "dd/MM/yyyy hh:mm aa";
	String CREATE_EVENT_DATE_FORMAT = "dd/MM/yyyy hh:mm aa";
	String EVENT_RESPONSE_DATE_FORMAT = "EEE, d MMM yyyy hh:mm aa";
	String MEETUP_RESPONSE_DATE_FORMAT = "EEE, d MMM yyyy hh:mm aa";
	String ACTIVITY_RESPONSE_DATE_FORMAT = "EEE, d MMM yyyy hh:mm aa";
	String FEED_TIME_FORMAT = "dd/MM/yyyy hh:mm aa";
	//Service Names
	String GEO_SERVICE_NAME = "SociallBoxService";
	String IMAGE_SERVICE_NAME = "ImageService";
	String NOTIFICATION_SERVICE_NAME = "NotificationService";
	String EMAIL_SERVICE_NAME = "MailService";
	//User Roles
	String ROLE_TYPE_ADMIN = "ADMIN";
	String ROLE_TYPE_APP_USER = "APP_USER";
	String ROLE_ORGANIZER = "EVENT_ORGANIZER";
	
	//For Logging Purposes
	String SECURED_REQUEST_START_LOG_MESSAGE = "Request Recieved | {} ";
	//Pass Request Name
	String PUBLIC_REQUEST_START_LOG = "Request Recieved | {} ";
	
	//Message keys for EOAdmin users
	String WELCOME_MESSAGE_KEY = "eo.welcome.message";
	String COMPANY_ADDED_MESSAGE = "eo.company.added.message";
	String COMPANY_APPROVED_MESSAGE = "eo.company.approved.message";
	String COMPANY_REJECTED_MESSAGE = "eo.company.rejected.message";
	String EVENT_APPROVED_MESSAGE = "eo.event.approved.message";
	String EVENT_REJECTED_MESSAGE = "eo.event.rejected.message";
	String EO_EVENT_CREATED_MESSAGE = "eo.event.created.message";
	String EO_PASS_RESET_EMAIL_SENT_MESSAGE = "eo.pass.reset.email.sent.mesage";
	String EO_PASS_RESET_EMAIL_SEND_FAIL_MESSAGE = "eo.pass.reset.email.send.fail.mesage";
	String EO_PASS_RESET_UPDATED_MESAGE = "eo.pass.reset.updated.mesage";
	
	//S3 Config Properties
	String AWS_EVENTS_ROOT_FOLDER_KEY = "aws.s3.events.root.path";
	String AWS_MEETUPS_ROOT_FOLDER_KEY = "aws.s3.meetups.root.path";	
	String AWS_USERS_ROOT_FOLDER_KEY = "aws.s3.users.root.path";
	String AWS_COMPANIES_ROOT_FOLDER_KEY = "aws.s3.companies.root.path";
	String AWS_BUCKET_NAME_KEY = "aws.s3.bucket.name";
	String AWS_IMAGES_BASE_URL_KEY = "aws.s3.images.bas.url";
	String EVENT_IMAGE_STORE_PATH = System.getProperty("catalina.home")+File.separator+"images"+File.separator+"events";
	String MEETUP_IMAGE_STORE_PATH = System.getProperty("catalina.home")+File.separator+"images"+File.separator+"meetups";
	
	//Image Service Constants
	String IMAGE_URL_KEY = "IMAGE_URL_KEY";
	
	//Notification Service Constants
	String PACKAGE_NAME_FOR_NOTIFICATIONS = "com.bitlogic.sociallbox";
	String NOTIFICATION_SERVICE_URL = "sb.notification.service.url";
	String NOTIFICATION_SOUND = "default";
	String NOTIFICATION_COLOR = "#FF5A5F";
	String NEW_FRIEND_JOINED_NOT_TITLE = "Friend joined you";
	String NEW_FRIEND_JOINED_NOT_BODY = "%s is now on SociallBox";
	String NEW_FRIEND_JOINED_NOT_TARGET = "SociallBox";
	String NEW_MEETUP_INVITE_NOT_TITLE = "Meetup Invite";
	String NEW_MEETUP_INVITE_NOT_BODY = "%s invited you to meetup %s";
	String NEW_MEETUP_INVITE_NOT_TARGET = "%s";//Meetup Title
	String NEW_MEETUP_PHOTO_NOT_TITLE = "%s"; //Meetup Title
	String NEW_MEETUP_PHOTO_NOT_BODY = "%s posted a photo to meetup"; 
	String NEW_MEETUP_PHOTO_NOT_TARGET = "%s"; //Meetup Title 
	String MEETUP_MODIFY_NOT_TITLE = "%s"; //Meetup Title
	String MEETUP_MODIFY_NOT_BODY = "%s modified meetup"; 
	String MEETUP_MODIFY_NOT_TARGET = "%s"; //Meetup Title 
	String MEETUP_CANCEL_NOT_TITLE = "%s"; //Meetup Title
	String MEETUP_CANCEL_NOT_BODY = "%s cancelled meetup";
	String MEETUP_CANCEL_NOT_TARGET = "%s"; //Meetup  Title
	String MEETUP_MESSAGE_NOT_TITLE = "%s";
	String MEETUP_MESSAGE_NOT_BODY = "New message from %s";
	String MEETUP_MESSAGE_NOT_TARGET = "%s"; //Meetup title
	String NEW_EVENT_NOT_TITLE = "Checkout new event";
	String NEW_EVENT_NOT_BODY = "%s is now available on SociallBox. Be the star of your group by creating meetup here and invite friends.";
	String NEW_EVENT_NOT_TARGET = "SociallBox";
	//Feed service Constants
	String STREAMS_API_KEY_PROP = "streams.api.key";
	String STREAMS_PRIVATE_KEY_PROP = "streams.private.key";
	String FEED_SERVICE_URL = "sb.feed.service.url";
	
	//Mail Service Constants
	String SB_MAIL_SERVICE_HOST_PROP = "sb.mail.host";
	String SB_MAIL_SERVICE_PORT_PROP = "sb.mail.port";
	String SB_MAIL_SERVICE_USERNAME_PROP = "sb.mail.username";
	String SB_MAIL_SERVICE_PASSWORD_PROP = "sb.mail.password";
	String SB_MAIL_SERVICE_URL_PROP = "sb.mail.service.url";
	String SB_EO_VERIFY_SENDER_EMAIL  = "sb.eo.verify.sender.email";
	String SB_EO_VERIFY_EMAIL_CC = "sb.eo.verify.email.cc";
	String SB_EO_VERIFY_EMAIL_BCC = "sb.eo.verify.email.bcc";
	String EMAIL_VERIFICATION_SUBJECT = "sb.eo.verify.email.subject";
	String PASS_RESET_EMAIL_SUBJECT = "sb.eo.reset.password.subject";
	String EVENT_APPROVED_SUBJECT = "sb.eo.event.approved.mail.subject";
	String PROFILE_APPROVED_SUBJECT = "sb.eo.profile.approved.mail.subject";
	String SB_EO_VERIFY_SENDER_NAME = "sb.eo.verify.sender.name";
	String EMAIL_VERIF_TEMPLATE_NAME = "verifyEmailTemplate.vm";
	String EMAIL_RESET_PASS_TEMPLATE_NAME = "resetPasswordTemplate.vm";
	String EVENT_APPROVED_TEMPLATE_NAME = "eventApprovedTemplate.vm";
	String COMPANY_APPROVED_TEMPLATE_NAME = "profileApprovedTemplate.vm";
	String EMAIL_LOGO_PATH = "images/sociallboxlogo.png";
	String EMAIL_CSS_PATH = "css/mail.css";
	String EMAIL_VERIFY_LINK_PARAM = "link";
	String EMAIL_EVENT_ORGANIZER_NAME_PARAM = "name";
	String EMAIL_PROFILE_APPROVED_NAME_PARAM = "profileName";
	String EMAIL_EVENT_NAME_PARAM = "eventName";
	String SB_EO_EMAIL_VERIFY_LINK = "sb.eo.email.verify.link";
	String SB_EO_RESET_PASSWORD_LINK = "sb.eo.reset.password.link";
	String SB_COMPANY_EMAIL_VERIFY_LINK = "sb.company.email.verify.link";
	
	
	//Inter Service Constants 
	String SB_ISA_USERNAME = "sb.isa.username";
	String SB_ISA_PASSWORD = "sb.isa.password";
	
	//Error Message Keys
	String ERROR_ID_MANDATORY = "error.id.mandatory";
	String ERROR_NAME_MANDATORY = "error.name.mandatory";
	String ERROR_EMAIL_MANDATORY = "error.email.mandatory";
	String ERROR_GAPI_CLIENT_REQUEST = "error.gapi.client.request";
	String ERROR_NOTIFICATION_CLIENT_REQUEST = "error.notification.client.request";
	String ERROR_EMAIL_CLIENT_REQUEST = "error.email.client.request";
	String ERROR_FEED_CLIENT_REQUEST = "error.feed.client.request";
	String ERROR_GAPI_WEBSERVICE_ERROR = "error.gapi.webservice.error";
	String ERROR_ZAPI_CLIENT_REQUEST = "error.zapi.client.request";
	String ERROR_ZAPI_WEBSERVICE_ERROR = "error.zapi.webservice.error";
	String ERROR_NOTIFICATION_WEBSERVICE_ERROR = "error.notification.webservice.error";
	String ERROR_EMAIL_WEBSERVICE_ERROR = "error.mail.webservice.error";
	String ERROR_FEED_WEBSERVICE_ERROR = "error.feed.webservice.error";
	String ERROR_LOGIN_SOCIAL_DETAILS_MISSING = "error.login.social.details.missing";
	String ERROR_LOGIN_INVALID_DEVICES_IN_REQ = "error.login.invalid.devices.in.req";
	String ERROR_LOGIN_DEVICE_MISSING = "error.login.device.missing";
	String ERROR_LOGIN_SD_ID_MISSING = "error.login.sd.id.missing";
	String ERROR_LOGIN_INVALID_CREDENTIALS = "error.login.invalid.credentials";
	String ERROR_LOGIN_USER_UNAUTHORIZED = "error.login.user.unauthorized";
	String ERROR_INVALID_EVENT_IN_REQUEST = "error.invalid.event.in.request";
	String ERROR_INVALID_MEETUP_IN_REQUEST = "error.invalid.meetup.in.request";
	String ERROR_INVALID_CATEGORY = "error.invalid.category";
	String ERROR_USER_INVALID = "error.user.invalid";
	String ERROR_INVALID_DEVICE = "error.invalid.device";
	String ERROR_USER_TYPE_INVALID = "error.user.type.invalid";
	String ERROR_MEETUP_NOT_FOUND = "error.meetup.not.found";
	String ERROR_SOCIAL_DETAILS_NOT_FOUND = "error.social.details.not.found";
	String ERROR_EVENT_TYPE_INVALID = "error.event.type.invalid";
	String ERROR_IMAGE_NOT_FOUND = "error.image.not.found";
	String ERROR_FEATURE_AVAILABLE_TO_MOBILE_ONLY = "error.feature.available.to.mobile.only";
	String ERROR_LOCATION_INVALID_FORMAT = "error.location.invalid.format";
	String ERROR_ADDRESS_MANDATORY = "error.address.mandatory";
	String ERROR_CITY_MANDATORY = "error.city.mandatory";
	String ERROR_ORGANIZER_EXISTS = "error.organizer.exists";
	String ERROR_DATE_INVALID_FORMAT = "error.date.invalid.format";
	String ERROR_ORGANIZER_NOT_FOUND = "error.organizer.not.found";
	String ERROR_FEATURE_AVAILABLE_TO_WEB_ONLY = "error.feature.available.to.web.only";
	String ERROR_USER_ALREADY_EXISTS = "error.user.already.exists";
	String ERROR_INVALID_SOURCE_SYSTEM_PLACES = "error.invalid.source.system.places";
	String ERROR_INVALID_INPUT_RADIUS = "error.invalid.input.radius";
	String ERROR_INVALID_INPUT_PAGE = "error.invalid.input.page";
	String ERROR_INVALID_SOURCE_SYSTEM = "error.invalid.source.system";
	String ERROR_COMPANY_ID_MANDATORY = "error.company.id.mandatory";
	String ERROR_STATE_MANDATORY  = "error.state.mandatory";
	String ERROR_STREET_MANDATORY = "error.street.mandatory";
	String ERROR_COUNTRY_MANDATORY = "error.country.mandatory";
	String ERROR_ZIPCODE_MANDATORY = "error.zipcode.mandatory";
	String ERROR_PHONE_MANDATORY = "error.phone.mandatory";
	String ERROR_INVALID_EOADMIN_ID = "error.invalid.eoadmin.id";
	String ERROR_TAGS_MANDATORY = "error.tags.mandatory";
	String ERROR_EO_ADMIN_UNAPPROVED = "error.eo.admin.unapproved";
	String ERROR_EDIT_MEETUP_INVALID_USER = "error.edit.meetup.invalid.user";
	String ERROR_CANCEL_MEETUP_INVALID_USER = "error.cancel.meetup.invalid.user";
	String ERROR_ACTION_NOT_ALLOWED = "error.action.not.allowed";
	String ERROR_USER_NOT_ATTENDEE_OF_MEETUP = "error.user.not.attendee.of.meetup";
	String ERROR_INVALID_TIMELINE = "error.invalid.timeline";
	String ERROR_INVALID_COMPANY_ID = "error.invalid.company.id";
	String ERROR_INVALID_COMPANY_PIC_TYPE = "error.invalid.company.pic.type";
	String EO_COMPANY_ALREADY_LINKED = "eo.company.already.linked";
	String ERROR_INVALID_EVENT_STATUS = "error.invalid.event.status";
	String EO_ERROR_EVENT_CANNOT_BE_LIVE = "eo.error.event.cannot.be.live";
	String EO_ERROR_EVENT_CANNOT_BE_CANCELLED = "eo.error.event.cannot.be.cancelled";
	String EO_ERROR_INVALID_ADMIN = "eo.error.invalid.admin";
	String EO_ERROR_COMPANY_NOT_LINKED = "eo.error.company.not.linked";
	String EO_ERROR_COMPANY_NOT_APPROVED = "eo.error.company.not.approved";
	String ERROR_EMAIL_VERIFICATION_TOKEN_NOT_FOUND = "error.email.verification.token.not.found";
	String ERROR_EMAIL_VERIFICATION_TOKEN_EXPIRED = "error.email.verification.token.expired";
	String ERROR_TIME_HEADER_EXPIRED = "error.time.header.expired";
	String ERROR_EMAIL_NOT_RECOGNIZED = "error.email.not.recognized";
	String ERROR_PASS_RESET_TOKEN_NOT_FOUND = "error.pass.reset.token.not.found";
	String ERROR_PASS_RESET_TOKEN_EXPIRED = "error.pass.reset.token.expired";
}
