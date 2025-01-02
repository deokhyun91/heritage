package com.web.heritage.domain.map;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper

public interface MapUserRecommendPlaceRespository {
	public List<MapUserRecommendPlace> getUserRecommendPlace(String id) throws Exception;
	public boolean saveUserRecommendPlace(Map<String, Object> map) throws Exception;
	public boolean deleteUserRecommendPlace(Map<String, Object> map) throws Exception;
}
