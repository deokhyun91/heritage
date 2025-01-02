package com.web.heritage.domain.review;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper

public interface ReviewWritePlaceRespository {
	public ReviewWritePlace getReviewPlace(Map<String, Object> map) throws Exception;
	public boolean saveReivewPlace(Map<String, Object> map) throws Exception;;
}
