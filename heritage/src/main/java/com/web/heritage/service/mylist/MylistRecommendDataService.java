package com.web.heritage.service.mylist;

import java.util.List;

import com.web.heritage.domain.mylist.MyListRecommendData;


public interface MylistRecommendDataService {
	public List<MyListRecommendData> getMyRecommendData(String userName,String type,String sort,String searchName,int index) throws Exception;	
	public int getMyRecommendDataCount(String userName,String type,String sort,String searchName,int index) throws Exception;
	public boolean deleteMyListRecommendData(String recommendCode, String userName) throws Exception;
}
