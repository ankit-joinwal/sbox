package com.bitlogic.sociallbox.mail.service.exception;


public class ClientException extends RestException{

	private static final long serialVersionUID = 1L;


	public ClientException(){
		super();
	}
	
	public ClientException(RestErrorCodes errorCode, String message){
		super(errorCode,message);
	}
	
}
