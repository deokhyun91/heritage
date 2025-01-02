package com.web.heritage.service.map;

import java.util.List;
import com.web.heritage.domain.map.MapUserRecommendData;

public interface MapUserRecommendDataService {
	public List<MapUserRecommendData> getUserRecommendData(String id) throws Exception;
	public boolean saveUserRecommendData(String id,String dataCode) throws Exception;
	public boolean deleteUserRecommendData(String id,String dataCode,int recommendCode) throws Exception;
}
