package com.web.heritage.service.mylist;

import java.util.List;

import com.web.heritage.domain.mylist.MyListRecommendPlaceData;



public interface MyListRecommendPlaceService {
	public List<MyListRecommendPlaceData> getMyRecommendPlace(String userName,String type,String sort, String place, String searchName,int index) throws Exception;	
	public int getMyRecommendPlaceCount(String userName,String type, String sort, String place, String searchName, int index) throws Exception;
	public boolean deleteMyListRecommendPlace(String recommendCode, String userName) throws Exception;
}

