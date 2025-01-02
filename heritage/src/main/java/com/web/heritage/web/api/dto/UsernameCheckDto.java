package com.web.heritage.web.api.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class UsernameCheckDto {
	//signup에 있는 조건과 맞춰줘야하는지 질문
	@NotBlank(message = "빈값일 수 없습니다")
	@Size(max = 16, min = 4)
	private String username;
}
