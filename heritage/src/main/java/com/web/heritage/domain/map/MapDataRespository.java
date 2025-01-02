package com.web.heritage.domain.map;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper

public interface MapDataRespository {	
	public List<MapData> getSearch(Map<String, Object> map) throws Exception;		
	public List<MapData> getSearchOption(Map<String, Object> map) throws Exception;	
}
