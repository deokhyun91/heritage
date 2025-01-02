package com.web.heritage.domain.map;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper

public interface MapPlaceRespository {
	public List<MapPlace> getPlaceData(Map<String, Object> map) throws Exception;
}
