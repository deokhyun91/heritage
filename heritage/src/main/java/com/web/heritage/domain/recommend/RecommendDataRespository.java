package com.web.heritage.domain.recommend;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper

public interface RecommendDataRespository {
	public List<RecommendData> getRecommendData(Map<String, Object> map) throws Exception;	
}
