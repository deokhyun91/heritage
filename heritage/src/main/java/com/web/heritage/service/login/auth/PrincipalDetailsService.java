package com.web.heritage.service.login.auth;


import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.web.heritage.domain.login.auth.User;
import com.web.heritage.domain.login.auth.UserRespository;
import com.web.heritage.web.api.dto.SignupReqDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService{

	private final UserRespository userRespository;

	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
	
		User userEntity = null;
	
		try {
			userEntity = userRespository.findUserByUsername(username);
			System.out.println(userEntity);
		} catch (Exception e) {
			
			e.printStackTrace();
			throw new UsernameNotFoundException(username);
		}
		if(userEntity == null) {
			throw new UsernameNotFoundException(username + "사용자 이름은 사용할 수 없습니다.");
			//어디서 찍히는지 질문
		}
		
		return new PrinsipalDetails(userEntity);
	}
	
	public boolean addUser(SignupReqDto signupReqDto) throws Exception{
		System.out.println("서비스" + signupReqDto.toEntity());
		return userRespository.save(signupReqDto.toEntity()) > 0;
		
	}
	
	public boolean setUser(SignupReqDto signupReqDto) throws Exception{
		System.out.println("서비스" + signupReqDto.toEntity());
		
		return userRespository.set(signupReqDto.toEntity()) > 0;
		
	}

}
