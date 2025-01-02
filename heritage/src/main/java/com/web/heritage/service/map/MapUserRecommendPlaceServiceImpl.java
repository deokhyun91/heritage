package com.web.heritage.service.map;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.web.heritage.domain.map.MapUserRecommendPlace;
import com.web.heritage.domain.map.MapUserRecommendPlaceRespository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service

public class MapUserRecommendPlaceServiceImpl implements MapUserRecommendPlaceService{
	private final MapUserRecommendPlaceRespository mapUserRecommendPlaceRespository;

	@Override
	public List<MapUserRecommendPlace> getUserRecommendPlace(String id) throws Exception {	
		return mapUserRecommendPlaceRespository.getUserRecommendPlace(id);
	}

	@Override
	public boolean saveUserRecommendPlace(String id, String placeId) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", id);
		map.put("placeId", placeId);
		
		return mapUserRecommendPlaceRespository.saveUserRecommendPlace(map);
	}

	@Override
	public boolean deleteUserRecommendPlace(String id, String placeId, int recommendCode) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", id);
		map.put("placeId", placeId);
		map.put("recommendCode", recommendCode);
		
		return mapUserRecommendPlaceRespository.deleteUserRecommendPlace(map);
	}
}
