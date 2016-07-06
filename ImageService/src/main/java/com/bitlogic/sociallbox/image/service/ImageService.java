package com.bitlogic.sociallbox.image.service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.util.Map;
import java.util.Properties;

import javax.imageio.ImageIO;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.bitlogic.Constants;

public class ImageService {

	public static AmazonS3Config amazonS3Config;
	private static final Logger LOGGER = LoggerFactory.getLogger(ImageService.class);
	
	public static void setConfigProperties(Properties properties){
		String eventsRootFolder = properties.getProperty(Constants.AWS_EVENTS_ROOT_FOLDER_KEY);
		String bucketName = properties.getProperty(Constants.AWS_BUCKET_NAME_KEY);
		String imageBaseUrl = properties.getProperty(Constants.AWS_IMAGES_BASE_URL_KEY);
		String meetupsRootFolder = properties.getProperty(Constants.AWS_MEETUPS_ROOT_FOLDER_KEY);
		String usersRootFolder = properties.getProperty(Constants.AWS_USERS_ROOT_FOLDER_KEY);
		String companiesRootFolder = properties.getProperty(Constants.AWS_COMPANIES_ROOT_FOLDER_KEY);
		amazonS3Config = new AmazonS3Config();
		amazonS3Config.setBucketName(bucketName);
		amazonS3Config.setEventsRootFolder(eventsRootFolder);
		amazonS3Config.setImageBaseUrl(imageBaseUrl);
		amazonS3Config.setMeetupsRootFolder(meetupsRootFolder);
		amazonS3Config.setUserPicUrl(usersRootFolder);
		amazonS3Config.setCompaniesRootFolder(companiesRootFolder);
		LOGGER.info("###       AWS S3 Config       ###");
		LOGGER.info("{}",amazonS3Config);
		LOGGER.info("#################################");
		
	}
	
	public static Map<String,?> uploadImageToEvent(String eventId, InputStream inputStream,
			String contentType,
			Integer contentLength,
			String fileName) throws Exception{
		LOGGER.info("Inside ImageService to upload image :{} for Event : {} ",fileName,eventId);
		LOGGER.info("S3Config {}",amazonS3Config);
		AmazonS3ImageService s3ImageService = new AmazonS3ImageService(amazonS3Config);
		Map<String,?> imageInfoMap = s3ImageService.uploadImage(ImageFolderType.EVENT,eventId, fileName, inputStream,contentType,contentLength);
		return imageInfoMap;
	}
	
	public static Map<String,?> uploadImageToMeetup(String meetupId, InputStream inputStream,
			String contentType,
			Integer contentLength,
			String fileName) throws Exception{
		LOGGER.info("Inside ImageService to upload image :{} for Meetup : {} ",fileName,meetupId);
		LOGGER.info("S3Config {}",amazonS3Config);
		AmazonS3ImageService s3ImageService = new AmazonS3ImageService(amazonS3Config);
		InputStream scaledImage = null;
		Map<String,?> imageInfoMap = null;
		Image resized  = null;
		ByteArrayOutputStream baos = new ByteArrayOutputStream();
		try{
			Image image = ImageLoader.fromStream(inputStream);
			resized = image.getResizedToWidth(350);
			
    		
    		ImageIO.write( resized.getBufferedImage(), "jpg", baos );
    		scaledImage = new ByteArrayInputStream(baos.toByteArray());
    		contentLength = baos.size();
    		imageInfoMap= s3ImageService.uploadImage(ImageFolderType.MEETUP,meetupId, fileName, scaledImage,contentType,contentLength);
    	}catch(Exception ex){
    		LOGGER.error("Error while scaling image {} ",fileName,ex);
    		throw new Exception("Error occured while uploading image. Please try again later.");
    	}finally{
    		resized.getBufferedImage().flush();
    		baos.close();
    	}
		
		return imageInfoMap;
	}
	
	public static Map<String,?> uploadUserProfilePic(String userId, InputStream inputStream,
			String contentType,
			Integer contentLength,
			String fileName) throws Exception{
		LOGGER.info("Inside ImageService to upload image :{} for User Profile Pic : {} ",fileName,userId);
		LOGGER.info("S3Config {}",amazonS3Config);
		AmazonS3ImageService s3ImageService = new AmazonS3ImageService(amazonS3Config);
		Map<String,?> imageInfoMap = s3ImageService.uploadImage(ImageFolderType.USER,userId, fileName, inputStream,contentType,contentLength);
		return imageInfoMap;
	}
	
	public static Map<String,?> uploadCompanyPic(String userId, InputStream inputStream,
			String contentType,
			Integer contentLength,
			String fileName){
		LOGGER.info("Inside ImageService to upload image :{} for Company Pic : {} ",fileName,userId);
		LOGGER.info("S3Config {}",amazonS3Config);
		AmazonS3ImageService s3ImageService = new AmazonS3ImageService(amazonS3Config);
		Map<String,?> imageInfoMap = s3ImageService.uploadImage(ImageFolderType.COMPANIES,userId, fileName, inputStream,contentType,contentLength);
		return imageInfoMap;
	}
}
