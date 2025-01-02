package com.web.heritage.domain.mylist;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MyListReviewPlaceReposity {
	public List<MyListReviewPlaceData> getMyReviewPlaceData(Map<String, Object> map) throws Exception;
	public int getMyReViewPlaceDataCount(Map<String, Object> map) throws Exception;
}
