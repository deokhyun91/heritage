package com.web.heritage.domain.review;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper

public interface ReviewPlaceRespository {
	public List<ReviewPlace> getPlaceData(Map<String, Object> map) throws Exception;	
}
