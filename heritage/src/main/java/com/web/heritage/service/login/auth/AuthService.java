package com.web.heritage.service.login.auth;

import com.web.heritage.web.api.dto.UsernameCheckDto;

public interface AuthService {

	public boolean CheckUsername(UsernameCheckDto usernameCheckDto) throws Exception;
	public boolean signup() throws Exception;
	public boolean deleteUser(String user_id) throws Exception;
}
