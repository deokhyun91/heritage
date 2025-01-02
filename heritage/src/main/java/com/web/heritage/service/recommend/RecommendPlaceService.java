package com.web.heritage.service.recommend;

import java.util.List;

import com.web.heritage.domain.recommend.RecommendPlace;

public interface RecommendPlaceService {
	public List<RecommendPlace> getRecommendPlace(String type,String sort,String place,String searchName,int index) throws Exception;	
}
