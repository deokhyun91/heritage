package com.web.heritage.service.mylist;

import java.util.List;

import com.web.heritage.domain.mylist.MyListReviewData;

public interface MylistReviewDataSerive {
	public List<MyListReviewData> getMyReviewData(String userId, String type,String sort,String searchName,int index) throws Exception;
	public int getMyReviewDataCount(String userId, String type, String sort, String searchName) throws Exception;
}
