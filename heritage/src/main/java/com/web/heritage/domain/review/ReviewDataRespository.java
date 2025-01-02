package com.web.heritage.domain.review;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;


@Mapper

public interface ReviewDataRespository {
	public List<ReviewData> getReviewData(Map<String, Object> map) throws Exception;	
}
