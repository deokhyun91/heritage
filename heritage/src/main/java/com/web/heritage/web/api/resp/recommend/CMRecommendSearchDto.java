package com.web.heritage.web.api.resp.recommend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class CMRecommendSearchDto<T> {
	private int size;
	private String message;
	private T data;
}

