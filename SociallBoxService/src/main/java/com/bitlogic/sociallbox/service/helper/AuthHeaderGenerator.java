package com.bitlogic.sociallbox.service.helper;

import java.security.GeneralSecurityException;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import org.springframework.security.crypto.codec.Base64;

import com.bitlogic.Constants;

public class AuthHeaderGenerator {
	public static void main(String[] args)throws Exception {
		
		//generateAuthorization("6bbdec87e8198cf4", "d1348667-8f74-45e9-8aa2-64499c26f476");
		generateHeaderForWeb("ankit.joinwal@gmail.com", "610a07e9a2385a066d89902a845c50f2");
		//generateHeaderForISA("contact@sociallbox.com", "7d6167d24582509150eeb3cefbe85738");
	}
	
	public static void generateHeaderForWeb(String userId,String password){
		Long timeStamp = System.currentTimeMillis();
		System.out.println("X-Auth-Date Header :"+timeStamp);
		String passAndTime = password+"~"+timeStamp;
		
		String encryptedKey = new String(Base64.encode(passAndTime.getBytes()));
		String username = "W~"+userId;
		String token = new String(Base64.encode((username+":"+encryptedKey).getBytes()));
		System.out.println("Token : "+"Basic "+token);
		
	}
	
	public static Map<String,String> generateHeaderForISA(String userId,String password){
		Long timeStamp = System.currentTimeMillis();
		System.out.println("X-Auth-Date Header :"+timeStamp);
		String passAndTime = password+"~"+timeStamp;
		
		String encryptedKey = new String(Base64.encode(passAndTime.getBytes()));
		String username = "ISA~"+userId;
		String token = new String(Base64.encode((username+":"+encryptedKey).getBytes()));
		
		String authHeader = "Basic "+ token;
		String timeHeader = timeStamp.toString();
		Map<String,String> authMap = new HashMap<String, String>();
		authMap.put(Constants.AUTH_DATE_HEADER, timeHeader);
		authMap.put(Constants.AUTHORIZATION_HEADER, authHeader);
		
		return authMap;
		
	}
	
	public static void generateAuthorization(String deviceId,String privateKey){
		Long timeStamp = System.currentTimeMillis();
		String signature = calculateSignature(privateKey, timeStamp);
		String username = "SD~"+deviceId;
		System.out.println("X-Auth-Date Header :"+timeStamp);
		String token = new String(Base64.encode((username+":"+signature).getBytes()));
		System.out.println("Token : "+"Basic "+token);
		
	}
	
	private static String calculateSignature(String secret, Long timeStamp) {
		try {
			SecretKeySpec signingKey = new SecretKeySpec(secret.getBytes(),
					"HmacSHA256");
			Mac mac = Mac.getInstance("HmacSHA256");
			mac.init(signingKey);
			String timeStampStr = timeStamp + "";
			byte[] rawHmac = mac.doFinal(timeStampStr.getBytes());
			String result = new String(Base64.encode(rawHmac));
			return result;
		} catch (GeneralSecurityException e) {
			throw new IllegalArgumentException();
		}
	}
}
