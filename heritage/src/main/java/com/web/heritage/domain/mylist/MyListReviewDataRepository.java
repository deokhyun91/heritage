package com.web.heritage.domain.mylist;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper

public interface MyListReviewDataRepository {
	public List<MyListReviewData> getMyReviewData(Map<String, Object> map) throws Exception;
	public int getMyReviewDataCount(Map<String, Object> map) throws Exception;
}
