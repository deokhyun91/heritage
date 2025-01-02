package com.web.heritage.service.login.auth;

import org.springframework.stereotype.Service;

import com.web.heritage.domain.login.auth.UserRespository;
import com.web.heritage.web.api.dto.UsernameCheckDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{
	
	private final UserRespository userRespository;
	
	@Override
	public boolean signup() throws Exception {
		
		return false;
		//이거 왜있는지 질문, 
	}

	@Override
	public boolean CheckUsername(UsernameCheckDto usernameCheckDto) throws Exception {
		return userRespository.findUserByUsername(usernameCheckDto.getUsername()) == null;
		
	}

	@Override
	public boolean deleteUser(String user_id) throws Exception {
		userRespository.deleteDataRecommend(user_id);
		userRespository.deleteDataReview(user_id);
		userRespository.deletePlaceRecommend(user_id);
		userRespository.deletePlaceReview(user_id);
		return userRespository.deleteUserInfo(user_id) > 0;
	}

}
