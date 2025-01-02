package com.web.heritage.web.api.resp.main;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class CMMainSearchDto<T> {	
	private String message;
	private T data;	
}
