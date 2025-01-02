package com.web.heritage.service.map;

import java.util.List;

import com.web.heritage.domain.map.MapData;

public interface MapService {	
	public List<MapData> getSearch(String type,String sort,String searchName,int index) throws Exception;
	public List<MapData> getSearchOption(String sort,String address,String divide,String period,String group,int index) throws Exception;
}
