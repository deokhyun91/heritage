package com.web.heritage.service.login.auth;

import java.util.Map;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import com.web.heritage.domain.login.auth.User;
import com.web.heritage.domain.login.auth.UserRespository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j //logger 안달아도됨
@Service
@RequiredArgsConstructor
public class PrincipalOauth2UserService extends DefaultOAuth2UserService{

private final UserRespository userRespository;
	
	@Override
	public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
		OAuth2User oAuth2User = super.loadUser(userRequest);
		log.info(">>>>>ClientRefistration: {}", userRequest.getClientRegistration());
		log.info(">>>>>oAuth2User: {}", oAuth2User);
		
		
		String provider = null;
		ClientRegistration clientRegistration = userRequest.getClientRegistration();
		
		Map<String, Object> attributes = oAuth2User.getAttributes();
		
		provider = clientRegistration.getClientName();
		
		User user = getOAuth2User(provider, attributes);
		
		
		return new PrinsipalDetails(user, attributes);
	}
	
	private User getOAuth2User(String provider, Map<String, Object> attributes) throws OAuth2AuthenticationException {
		User user = null;
		String oauth2_id = null;
		String id = null;
		Map<String, Object> response = null;
		
		
		if(provider.equalsIgnoreCase("google")) {
			response = attributes;
			id = (String)response.get("email");
		}else if(provider.equalsIgnoreCase("naver")) {
			response = (Map<String, Object>)attributes.get("response");
			id = (String)response.get("email");
		}else {
			throw new OAuth2AuthenticationException("provider Error!");
		}
		int mail = id.indexOf("@");
		oauth2_id = id.substring(0, mail);
		
		try {
			user = userRespository.findUserByUsername(oauth2_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		//다음주 비밀번호에 아이디 넣는 이유, 실제 네이버 아이디가 토큰되서 들어오는지
		if(user == null) {
			user = User.builder()
						.user_name((String)response.get("name"))
						.user_email((String)response.get("email"))
						.user_id(oauth2_id)
						.oauth_id(oauth2_id)
						.user_pw(new BCryptPasswordEncoder().encode(id))
						.user_provider("ROLE_USER")
						.user_phon("null")
						.user_gender("null")
						.build();
			
			try {
				userRespository.save(user);
			} catch (Exception e) {
				e.printStackTrace();
				throw new OAuth2AuthenticationException("DATABASE Error!");
			}
						
		}
		System.out.println(response);
		return user;
		
	}
}
