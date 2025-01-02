package com.web.heritage.web.api.resp.review;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class CMReviewSearchDto<T> {
	private int size;
	private String message;
	private T data;
}
