package com.web.heritage.domain.login.auth;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

	private int user_code;
	private String user_id;
	private String oauth_id;
	private String user_provider;
	private String user_pw;
	private String user_name;
	private String user_phon;
	private String user_email;
	private String user_gender;
	private LocalDateTime create_date;
	private LocalDateTime update_date;
	
	//다음주 리스트로 받는 이유 질문 user,admin.. 이라서? 권한을 주는건 어디서?
	public List<String> getUserRoles(){
		if(user_provider == null || user_provider.isBlank()) {
			return new ArrayList<>();
		}
		return Arrays.asList(user_provider.replaceAll(" ", "").split(","));
	}
}
