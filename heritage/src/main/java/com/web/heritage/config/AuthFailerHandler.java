package com.web.heritage.config;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

public class AuthFailerHandler implements AuthenticationFailureHandler{

	@Override
	public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
		AuthenticationException exception) throws IOException, ServletException {

		response.setContentType("utf-8");
		response.setContentType("text/html; charset=utf-8");
		response.getWriter().print("<html><head></head><body><script>alert(\"로그인 실패\");history.back();</script></body></html>");
	}

}
