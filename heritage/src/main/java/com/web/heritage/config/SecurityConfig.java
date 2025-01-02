package com.web.heritage.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.filter.CorsFilter;

import com.web.heritage.service.login.auth.PrincipalOauth2UserService;

import lombok.RequiredArgsConstructor;

@EnableWebSecurity
@Configuration
@RequiredArgsConstructor

public class SecurityConfig extends WebSecurityConfigurerAdapter{
	
    private final CorsFilter corsFilter;
	
	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	private final PrincipalOauth2UserService principalOauth2UserService;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception{
		http.csrf().disable(); //csrf 사용안함
		
		http.headers()
			.frameOptions()
			.disable();         //cors 인증을 하지 않겠다.
		http.addFilter(corsFilter);
		
		http.authorizeRequests() // 요청이 들어왔을때 인증을 거쳐라는 의미
		
		
		
		.antMatchers("/heritage/login", "/heritage/myPage") //1) 우리가 지정한 요청 url
		.authenticated()	// 2) 인증을 거쳐라
		
	
	
		
		
		
	
		.anyRequest() // 3) 모든 다른 요청들은
		.permitAll()  // 4) 모두 접근 권한을 부여하겠다.
		.and()
		.formLogin()  // 5) 로그인 방식은 form 로그인을 사용하겠다
		.loginPage("/heritage/auth/login") // 6) 로그인 페이지는 해당 get요청을 통해 접근하겠다
		.loginProcessingUrl("/heritage/login") // 7) 로그인요청(post) 컨트롤러 따로 필요없음
		
		.failureHandler(new AuthFailerHandler())
		//yml 파일에서 구글 로그인 키 추가 + 주석해제
//		.and()
//		.oauth2Login()
//		.userInfoEndpoint()
//		.userService(principalOauth2UserService)
//		.and()
		
		
		.defaultSuccessUrl("/heritage/main");			
	}
}
