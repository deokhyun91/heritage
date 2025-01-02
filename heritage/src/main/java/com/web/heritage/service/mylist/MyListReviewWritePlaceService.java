package com.web.heritage.service.mylist;

import com.web.heritage.domain.mylist.MyListReviewWritePlace;

public interface MyListReviewWritePlaceService {
	public MyListReviewWritePlace getMyListPlaceView(int code, String place) throws Exception; 
	public boolean updateMyListPlace(String userId, int reviewCode, String dataCode, String placeId, String reviewName, String reviewContent) throws Exception; 
	public boolean deleteMyListPlace(String userId, int reviewCode, String dataCode, String placeId) throws Exception; 	
}
