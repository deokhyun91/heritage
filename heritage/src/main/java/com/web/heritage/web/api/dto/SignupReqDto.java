package com.web.heritage.web.api.dto;

import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.web.heritage.domain.login.auth.User;

import lombok.Data;

@Data
public class SignupReqDto {
	
	private int usercode;	
	@NotBlank
	@Pattern(regexp = "^[가-힇]*$", message = "한글만 입력 가능합니다.")
	private String name;
	
	@NotBlank
	@Email
	private String email;
	
	@NotBlank
	@Pattern(regexp = "^[a-zA-Z]{1}[a-zA-Z0-9]{4,12}$")
	private String username;
	
	@NotBlank
	@Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[-~!@#$%^&*_+=])[a-zA-Z\\d-~!@#$%^&*_+=]{8,16}$")
	private String password;
	
	@NotBlank
	@Pattern(regexp = "^[0-9]+$", message = "숫자만 입력 가능합니다.")
	private String phone;
	
	@NotBlank
	private String sex;
	
	@AssertTrue(message = "아이디 중복 확인이 되지 않았습니다.")
	private boolean checkUsernameFlag;
	
	public User toEntity() {
		return User.builder()
					.user_code(usercode)
					.oauth_id("null")
					.user_name(name)
					.user_email(email)
					.user_id(username)
					.user_pw(new BCryptPasswordEncoder().encode(password))
					.user_phon(phone)
					.user_gender(sex)
					.user_provider("ROLE_USER")
					.build();
				
					
	}
}
