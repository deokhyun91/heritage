package com.web.heritage.service.map;

import java.util.List;

import com.web.heritage.domain.map.MapUserRecommendPlace;

public interface MapUserRecommendPlaceService {
	public List<MapUserRecommendPlace> getUserRecommendPlace(String id) throws Exception;
	public boolean saveUserRecommendPlace(String id,String placeId) throws Exception;
	public boolean deleteUserRecommendPlace(String id,String placeId,int recommendCode) throws Exception;
}
