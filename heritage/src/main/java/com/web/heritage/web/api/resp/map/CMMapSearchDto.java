package com.web.heritage.web.api.resp.map;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class CMMapSearchDto<T> {
	private int size;
	private String message;
	private T data;
}

