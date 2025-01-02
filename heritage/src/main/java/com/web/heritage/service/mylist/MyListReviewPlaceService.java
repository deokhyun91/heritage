package com.web.heritage.service.mylist;

import java.util.List;

import com.web.heritage.domain.mylist.MyListReviewPlaceData;



public interface MyListReviewPlaceService {
	public List<MyListReviewPlaceData> getMyReviewPlace(String userId, String type,String sort,String place,String searchName,int index) throws Exception;
	public int getMyReviewPlaceCount(String userId, String type, String sort, String place, String searchName) throws Exception;
}
