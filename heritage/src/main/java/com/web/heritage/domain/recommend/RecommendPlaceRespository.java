package com.web.heritage.domain.recommend;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper

public interface RecommendPlaceRespository {
	public List<RecommendPlace> getRecommendPlace(Map<String, Object> map) throws Exception;
}
