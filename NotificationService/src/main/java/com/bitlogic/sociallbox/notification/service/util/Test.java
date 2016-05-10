package com.bitlogic.sociallbox.notification.service.util;

import io.getstream.client.StreamClient;
import io.getstream.client.apache.StreamClientImpl;
import io.getstream.client.config.ClientConfiguration;
import io.getstream.client.config.StreamRegion;
import io.getstream.client.model.feeds.Feed;
import io.getstream.client.model.filters.FeedFilter;
import io.getstream.client.service.FlatActivityServiceImpl;

import java.util.Calendar;
import java.util.List;

import com.bitlogic.sociallbox.data.model.feed.EventRegisterActivity;
import com.bitlogic.sociallbox.data.model.feed.UserActivity;

public class Test {

	public static void main(String[] args) throws Exception{
		ClientConfiguration streamConfig = new ClientConfiguration();
		streamConfig.setRegion(StreamRegion.AP_NORTH_EAST);
    	StreamClient streamClient = new StreamClientImpl(streamConfig, "26h25wxm65j8", "7j72rjbgpjy2k4gejmh92tep6mu28xfd2ypcy3dbzyc6dfkjwbfxc2heym42thc6");
    	
		Feed feed = streamClient.newFeed("user", "16");

    	FlatActivityServiceImpl<UserActivity> flatActivityService = feed.newFlatActivityService(UserActivity.class);
    	
    	FeedFilter filter = new FeedFilter.Builder().withLimit(5).build();
    	List<UserActivity> activities = flatActivityService.getActivities(filter).getResults();
    	System.out.println("Feeds for User 1");
    	for(UserActivity simpleActivity : activities){
    		if(simpleActivity.getActivityType().equals("CREATED_MEETUP")){
    			EventRegisterActivity createMeetupActivity = (EventRegisterActivity) simpleActivity;
    			
	    		System.out.println("Actor :"+createMeetupActivity.getActor());
	    		System.out.println("ID :"+createMeetupActivity.getId());
	    		System.out.println("Object "+createMeetupActivity.getObject());
	    		System.out.println(createMeetupActivity.getActivityType());
	    		System.out.println(createMeetupActivity.getActor());
	    		System.out.println(createMeetupActivity.getActorPic());
	    		System.out.println(createMeetupActivity.getTime());
	    		System.out.println(createMeetupActivity.getId());
    		}
    		break;
    	}
    	
    	streamClient.shutdown();
	}

	public static String getDate(Calendar cal){
		cal.set(Calendar.DAY_OF_MONTH, 1);
        return "" + cal.get(Calendar.DAY_OF_MONTH) +"/" +
                (cal.get(Calendar.MONTH)+1) + "/" + cal.get(Calendar.YEAR);
    }

}
