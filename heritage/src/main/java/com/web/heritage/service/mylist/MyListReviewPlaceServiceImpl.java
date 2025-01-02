package com.web.heritage.service.mylist;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.web.heritage.domain.mylist.MyListReviewPlaceData;
import com.web.heritage.domain.mylist.MyListReviewPlaceReposity;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MyListReviewPlaceServiceImpl implements MyListReviewPlaceService{
	private final MyListReviewPlaceReposity myListReviewPlaceReposity;
	
	@Override
	public List<MyListReviewPlaceData> getMyReviewPlace(String userId, String type, String sort, String place, String searchName, int index) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("userId", userId);	
		map.put("type", type);	
		map.put("sort", sort);
		map.put("place", place);
		map.put("searchName", searchName);
		map.put("index", index*10);	
		
		return myListReviewPlaceReposity.getMyReviewPlaceData(map);
	}

	@Override
	public int getMyReviewPlaceCount(String userId, String type, String sort, String place, String searchName) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("userId", userId);	
		map.put("type", type);	
		map.put("sort", sort);
		map.put("place", place);
		map.put("searchName", searchName);	
		
		return myListReviewPlaceReposity.getMyReViewPlaceDataCount(map);
	}

}
