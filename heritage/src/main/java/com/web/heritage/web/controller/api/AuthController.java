package com.web.heritage.web.controller.api;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.web.heritage.handler.aop.annotation.Log;
import com.web.heritage.handler.aop.annotation.Time;
import com.web.heritage.handler.aop.annotation.ValidCheck;
import com.web.heritage.service.login.auth.AuthService;
import com.web.heritage.service.login.auth.PrincipalDetailsService;
import com.web.heritage.service.login.auth.PrinsipalDetails;
import com.web.heritage.web.api.dto.SignupReqDto;
import com.web.heritage.web.api.dto.UsernameCheckDto;
import com.web.heritage.web.api.resp.CMRespDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/heritage")
@RequiredArgsConstructor
@Slf4j
public class AuthController {

	private final PrincipalDetailsService principalDetailsService; 
	private final AuthService authService;
	@ValidCheck
	@PostMapping("/auth/join")
	public ResponseEntity<?> signUp(@RequestBody @Valid SignupReqDto signupReqDto, BindingResult bindingResult){
		boolean status = false;
		try {
			status = principalDetailsService.addUser(signupReqDto);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "회원가입실패", status));
		}
		log.info(">>> {} <<<", signupReqDto);
		System.out.println(signupReqDto);
		return ResponseEntity.ok().body(new CMRespDto<>(1, "회원가입성공", status));
		
		
	}
	//log와 time역할 질문
	@ValidCheck
	@Log
	@Time
	@GetMapping("/join/validation/username")
	public ResponseEntity<?> checkUsername(@Valid UsernameCheckDto usernameCheckReqDto, BindingResult bindingResult){
		System.out.println(usernameCheckReqDto);
		Map<String, String> errorMessage = new HashMap<String, String>();
		

		boolean status = false;
		try {
			status = authService.CheckUsername(usernameCheckReqDto);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "서버오류", status));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "회원가입가능여부", status));
	}
	
	//prinsipalDetails 언제 user가 담기는지
	@GetMapping("/principal")
	public ResponseEntity<?> getPrincipal(@AuthenticationPrincipal PrinsipalDetails prinsipalDetails){
		if(prinsipalDetails == null) {
			return ResponseEntity.badRequest().body(new CMRespDto<>(-1, "prcipal is null", null));
		}
		return ResponseEntity.ok(new CMRespDto<>(1, "sucess load", prinsipalDetails.getUser()));
	}
	
	//삭제
	@DeleteMapping("/principal/{user_id}")
	public ResponseEntity<?> DeleteUser(@PathVariable String user_id){
		boolean status = false;
		System.out.println(user_id);
		try {
			status = authService.deleteUser(user_id);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMRespDto<>(-1, "삭제 실패", status));
		}

		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "삭제 성공", status));
	}
	
	//수정
	@ValidCheck
	@PutMapping("/principal/setUser")
	public ResponseEntity<?> setUser(@RequestBody @Valid SignupReqDto signupReqDto, BindingResult bindingResult){
		System.out.println(signupReqDto);
		boolean status = false;
		try {
			status = principalDetailsService.setUser(signupReqDto);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "업데이트 실패", status));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "업데이트 성공", status));
	}
	
	
	
}
