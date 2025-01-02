package com.web.heritage.domain.mylist;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper

public interface MyListReviewWriteDataReposity {
	public MyListReviewWriteData getMyListDataView(int code) throws Exception;
	public boolean updateMyListData(Map<String, Object> map) throws Exception;
	public boolean deleteMyListData(Map<String, Object> map) throws Exception;
}
