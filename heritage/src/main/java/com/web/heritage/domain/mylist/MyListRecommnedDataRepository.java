package com.web.heritage.domain.mylist;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.web.heritage.domain.recommend.RecommendData;

@Mapper
public interface MyListRecommnedDataRepository {
	public List<MyListRecommendData> getMyRecommendData(Map<String, Object> map) throws Exception;
	public int getMyRecommendDataCount(Map<String, Object> map) throws Exception;
	public int deleteMyListRecommendData(Map<String, Object> map) throws Exception;
}
