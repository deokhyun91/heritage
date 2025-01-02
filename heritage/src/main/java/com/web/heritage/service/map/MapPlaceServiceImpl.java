package com.web.heritage.service.map;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.web.heritage.domain.map.MapPlace;
import com.web.heritage.domain.map.MapPlaceRespository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service

public class MapPlaceServiceImpl implements MapPlaceService{
	private final MapPlaceRespository mapPlaceRespository;
	@Override
	public List<MapPlace> getPlaceData(String type,String dataCode) throws Exception {	
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("type", type);
		map.put("dataCode", dataCode);
		return mapPlaceRespository.getPlaceData(map);
	}
	
}
