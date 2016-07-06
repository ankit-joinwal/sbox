package com.bitlogic.sociallbox.notification.service.util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.security.crypto.codec.Base64;

import com.bitlogic.sociallbox.data.model.mail.MailImage;
import com.bitlogic.sociallbox.data.model.mail.MailImage.ImageType;
import com.bitlogic.sociallbox.data.model.mail.SendMailRequest;
import com.fasterxml.jackson.databind.ObjectMapper;

public class Test {

	public static void main(String[] args) throws Exception{
		/*ClientConfiguration streamConfig = new ClientConfiguration();
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
    	
    	streamClient.shutdown();*/
		
	/*	SendMailRequest sendMailRequest = new SendMailRequest();
		sendMailRequest.setMailFrom("ankit.joinwal@gmail.com");
		sendMailRequest.setMailRecipients(new String[]{"deepikavyan@gmail.com"});
		sendMailRequest.setMailSubject("SociallBox | Email Verification Required");
		sendMailRequest.setSenderName("SociallBox Admin");
		sendMailRequest.setTemplateName("verifyEmailTemplate.vm");
		
		MailImage mailImage = new MailImage();
		mailImage.setImageType(ImageType.CLASSPATH);
		mailImage.setName("sblogo");
		mailImage.setPath("sociallboxlogo.png");
		List<MailImage> images = new ArrayList<>();
		images.add(mailImage);
		sendMailRequest.setImages(images);
		
		Map<String,Object> params = new HashMap<>();
		params.put("link", "www.sociallbox.com/eo/verify/1234");
		sendMailRequest.setParams(params);
		
		ObjectMapper mapper = new ObjectMapper();
		System.out.println(mapper.writeValueAsString(sendMailRequest));*/
		
		String s1 = "14 Kms";
		String s2 = "7 Kms";
		String s3 = "20 Kms";
		
		List<String> list = new ArrayList<>();
		list.add(s3);
		list.add(s2);
		list.add(s1);
		
		Collections.sort(list);
		System.out.println(list);
		
	}

	public static String getDate(Calendar cal){
		cal.set(Calendar.DAY_OF_MONTH, 1);
        return "" + cal.get(Calendar.DAY_OF_MONTH) +"/" +
                (cal.get(Calendar.MONTH)+1) + "/" + cal.get(Calendar.YEAR);
    }

}
