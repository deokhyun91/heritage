package com.web.heritage.service.mylist;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.web.heritage.domain.mylist.MyListReviewData;
import com.web.heritage.domain.mylist.MyListReviewDataRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service

public class MylistReviewDataSeriveImpl implements MylistReviewDataSerive{

	private final MyListReviewDataRepository myListReviewDataRepository;

	@Override
	public List<MyListReviewData> getMyReviewData(String userId,String type, String sort, String searchName, int index) throws Exception{
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("userId", userId);	
		map.put("type", type);	
		map.put("sort", sort);
		map.put("searchName", searchName);	
		map.put("index", index*10);	
		
		return myListReviewDataRepository.getMyReviewData(map);
	}

	@Override
	public int getMyReviewDataCount(String userId, String type, String sort, String searchName) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("userId", userId);	
		map.put("type", type);	
		map.put("sort", sort);
		map.put("searchName", searchName);	
		
		return myListReviewDataRepository.getMyReviewDataCount(map);
	}
}
