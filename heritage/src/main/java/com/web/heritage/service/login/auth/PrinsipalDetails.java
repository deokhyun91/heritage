package com.web.heritage.service.login.auth;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;

import com.web.heritage.domain.login.auth.User;

import lombok.Data;

@Data
public class PrinsipalDetails implements UserDetails, OAuth2User{
	
	private static final long serialVersionUID = 1L;
	
	private User user;
	private Map<String, Object> attributes;
	
	//둘중에 어디서 user가 담기는
	public PrinsipalDetails(User user) {
		this.user = user;
	}
	
	//oauth
	public PrinsipalDetails(User user, Map<String, Object> attributes) {
		this.user = user;
		this.attributes = attributes;
	}
	
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		Collection<GrantedAuthority> grantedAuthorities = new ArrayList<GrantedAuthority>();
		user.getUserRoles().forEach(role -> {
			grantedAuthorities.add(() -> role); //다음주 role이 아니고 변수를 왜 함수로 받는지
		});
		
		return grantedAuthorities;
	}
	

	
	@Override
	public String getPassword() {
	
		return user.getUser_pw();
	}
	
	@Override
	public String getUsername() {
		
		return user.getUser_id();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
		/*
		 * 계정만료여부
		 * true : 만료안됨
		 * false: 만료됨
		 */
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
		/*
		 * 계정 잠김 여부
		 * true : 잠기지 않음
		 * false: 잠김
		 */
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
		/*
		 * 비밀번호 만료 여부
		 * true : 만료 안됨
		 * false: 만료됨
		 */
	}

	@Override
	public boolean isEnabled() {
		return true;
		/*
		 * 사용자 활성화 여부
		 * true : 활성화
		 * false: 비활성화
		 * 
		 */
	}

	//다음주 왜쓰는지 OAuth2User 상속 받고 자동 override 안됨
	@Override
	public Map<String, Object> getAttributes() {
		return attributes;
	}
	
	@Override
	public String getName() {
		return user.getUser_name();
	}

}
