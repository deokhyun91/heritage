package com.web.heritage.domain.review;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper

public interface ReviewPlaceViewRespository {
	public ReviewPlaceView getReviewPlaceView(Map<String, Object> map) throws Exception;
}
