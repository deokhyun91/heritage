package com.web.heritage.domain.mylist;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MyListRecommendPlaceRepository {
	public List<MyListRecommendPlaceData> getMyRecommendPlaceData(Map<String, Object> map) throws Exception;
	public int getMyRecommendPlaceDataCount(Map<String, Object> map) throws Exception;
	public int deleteMyListRecommendPlace(Map<String, Object> map) throws Exception;
}
