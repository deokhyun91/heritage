package com.web.heritage.service.recommend;

import java.util.List;
import com.web.heritage.domain.recommend.RecommendData;


public interface RecommendDataService {
	public List<RecommendData> getRecommendData(String type,String sort,String searchName,int index) throws Exception;	
}
