package com.bitlogic.sociallbox.notification.service.util;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.bitlogic.sociallbox.data.model.response.EventResponseForAdmin.DailyEventUserStatistics;

public class Test {

	public static void main(String[] args) throws Exception{
		 Map<String,DailyEventUserStatistics> eventStatDetailsMap = new LinkedHashMap<>();
		 
		
		List<DailyEventUserStatistics> dailyEventUserStatistics = new ArrayList<>(eventStatDetailsMap.values());
		System.out.println(dailyEventUserStatistics);
	}

	public static String getDate(Calendar cal){
		cal.set(Calendar.DAY_OF_MONTH, 1);
        return "" + cal.get(Calendar.DAY_OF_MONTH) +"/" +
                (cal.get(Calendar.MONTH)+1) + "/" + cal.get(Calendar.YEAR);
    }

}
