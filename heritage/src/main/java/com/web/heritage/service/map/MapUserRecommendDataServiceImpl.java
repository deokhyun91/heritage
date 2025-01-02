package com.web.heritage.service.map;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.web.heritage.domain.map.MapUserRecommendData;
import com.web.heritage.domain.map.MapUserRecommendDataRespository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service

public class MapUserRecommendDataServiceImpl implements MapUserRecommendDataService{
	private final MapUserRecommendDataRespository mapUserRecommendDataRespository;

	@Override
	public List<MapUserRecommendData> getUserRecommendData(String id) throws Exception {		
		return mapUserRecommendDataRespository.getUserRecommendData(id);
	}

	@Override
	public boolean saveUserRecommendData(String id, String dataCode) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", id);
		map.put("dataCode", dataCode);
		
		return mapUserRecommendDataRespository.saveUserRecommendData(map);
	}

	@Override
	public boolean deleteUserRecommendData(String id, String dataCode, int recommendCode) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", id);
		map.put("dataCode", dataCode);
		map.put("recommendCode", recommendCode);
		
		return mapUserRecommendDataRespository.deleteUserRecommendData(map);
	}
}
