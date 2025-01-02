package com.web.heritage.domain.map;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper

public interface MapUserRecommendDataRespository {
	public List<MapUserRecommendData> getUserRecommendData(String id) throws Exception;
	public boolean saveUserRecommendData(Map<String, Object> map) throws Exception;
	public boolean deleteUserRecommendData(Map<String, Object> map) throws Exception;
}
