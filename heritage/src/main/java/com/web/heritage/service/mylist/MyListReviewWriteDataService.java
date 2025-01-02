package com.web.heritage.service.mylist;

import com.web.heritage.domain.mylist.MyListReviewWriteData;

public interface MyListReviewWriteDataService {
	public MyListReviewWriteData getMyListDataView(int code) throws Exception;
	public boolean updateMyListData(String userId,String dataCode,String reviewCode, String reviewName, String reviewContent) throws Exception;
	public boolean deleteMyListData(String userId, String dataCode, String reviewCode) throws Exception;
}
