package com.web.heritage.service.map;

import java.util.List;

import com.web.heritage.domain.map.MapPlace;

public interface MapPlaceService {
	public List<MapPlace> getPlaceData(String type,String dataCode) throws Exception;
}
