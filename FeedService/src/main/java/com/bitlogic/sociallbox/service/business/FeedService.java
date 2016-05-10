package com.bitlogic.sociallbox.service.business;

import java.util.List;

import org.springframework.util.concurrent.ListenableFuture;

import com.bitlogic.sociallbox.data.model.feed.CreateFeedRequest;
import com.bitlogic.sociallbox.data.model.feed.UserFeed;

public interface FeedService {

	public ListenableFuture<String> createFeeds(CreateFeedRequest<?> createFeedRequest);
	
	public List<UserFeed> getFeedsForUser(String deviceId,String fromId,Integer limit);
}
