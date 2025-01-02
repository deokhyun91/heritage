package com.web.heritage.handler;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import com.web.heritage.handler.exception.ValidationApiException;
import com.web.heritage.web.api.resp.CMRespDto;

@RestController
@ControllerAdvice

public class RestContorollerExceptionHandler {
	
	@ExceptionHandler(ValidationApiException.class)
	public ResponseEntity<?> valdationApiException(ValidationApiException e){
		return  ResponseEntity.badRequest().body(new CMRespDto<>(-1,e.getMessage(),e.getErrorMap()));
	}
}

