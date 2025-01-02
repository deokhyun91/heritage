package com.web.heritage.service.mylist;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.web.heritage.domain.mylist.MyListRecommendData;
import com.web.heritage.domain.mylist.MyListRecommnedDataRepository;


import lombok.RequiredArgsConstructor;
@RequiredArgsConstructor
@Service
public class MylistRecommnedDataServiceImpl implements MylistRecommendDataService{
	
	private final MyListRecommnedDataRepository myListRecommnedDataRepository;

	@Override
	public List<MyListRecommendData> getMyRecommendData(String userName, String type,String sort,String searchName,int index) throws Exception {
		System.out.println("서비스단");
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("userName", userName);	
		map.put("type", type);	
		map.put("sort", sort);
		map.put("searchName", searchName);	
		map.put("index", (index*8));	
		
	
		List<MyListRecommendData> getSearch = myListRecommnedDataRepository.getMyRecommendData(map);
	
		return getSearch;
	}

	@Override
	public int getMyRecommendDataCount(String userName, String type,String sort,String searchName,int index) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("userName", userName);
		map.put("type", type);	
		map.put("sort", sort);
		map.put("searchName", searchName);	
		int count = myListRecommnedDataRepository.getMyRecommendDataCount(map);
		return count;
	}

	@Override
	public boolean deleteMyListRecommendData(String recommendCode, String userName) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("recommendCode", recommendCode);	
		map.put("userName", userName);
	
		return myListRecommnedDataRepository.deleteMyListRecommendData(map) > 0;
	}



}
