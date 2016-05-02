package com.bitlogic.sociallbox.service.transformers;

public class TransformerFactory {
	
	public enum TransformerTypes{
		MEETUP_TRANS , EVENT_TRANS , 
		MULTIPART_TO_EVENT_IMAGE_TRANFORMER ,
		MULTIPART_TO_MEETUP_IMAGE_TRANFORMER, 
		USER_TO_FRIEND_TRANSFORMER , 
		CREATE_EO_TO_EO_TRANSFORMER,
		EO_TO_EO_RESPONSE_TRANSFORMER,
		MEETUP_ATTENDEE_TRANSFORMER,
		USER_MEETUP_ACTIVITY_TRANSFORMER ,
		NOTIFICATION_TRANSFORMER
	}
	
	public static Transformer<?, ?> getTransformer(TransformerTypes types){
		if(types.equals(TransformerTypes.MEETUP_TRANS)){
			return MeetupTransformer.getInstance();
		}else if(types.equals(TransformerTypes.EVENT_TRANS)){
			return EventTransformer.getInstance();
		}else if(types.equals(TransformerTypes.MULTIPART_TO_EVENT_IMAGE_TRANFORMER)){
			return MultipartToEventImageTransformer.getInstance();
		}else if(types.equals(TransformerTypes.MULTIPART_TO_MEETUP_IMAGE_TRANFORMER)){
			return MultipartToMeetupImageTransformer.getInstance();
		}else if(types.equals(TransformerTypes.USER_TO_FRIEND_TRANSFORMER)){
			return  UsersToFriendsTransformer.getInstance();
		}else if (types.equals(TransformerTypes.CREATE_EO_TO_EO_TRANSFORMER)){
			return  CreateEOReqToEOTransformer.getInstance();
		}else if(types.equals(TransformerTypes.EO_TO_EO_RESPONSE_TRANSFORMER)){
			return  EOToEOResponseTransformer.getInstance();
		}else if (types.equals(TransformerTypes.MEETUP_ATTENDEE_TRANSFORMER)){
			return MeetupAttendeeTransformer.getInstance();
		}else if(types.equals(TransformerTypes.USER_MEETUP_ACTIVITY_TRANSFORMER)){
			return MeetupActivityTransformer.getInstance();
		}else if (types.equals(TransformerTypes.NOTIFICATION_TRANSFORMER)){
			return NotificationTransformer.getInstance();
					
		}
		
		
		throw new IllegalArgumentException("Wrong input to factory");
	}
}
