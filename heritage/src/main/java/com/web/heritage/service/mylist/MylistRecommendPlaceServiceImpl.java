package com.web.heritage.service.mylist;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.web.heritage.domain.mylist.MyListRecommendPlaceData;
import com.web.heritage.domain.mylist.MyListRecommendPlaceRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class MylistRecommendPlaceServiceImpl implements MyListRecommendPlaceService {
	
	private final MyListRecommendPlaceRepository myListRecommendPlaceRepository;
	
	@Override
	public List<MyListRecommendPlaceData> getMyRecommendPlace(String userName,String type, String sort, String place, String searchName, int index) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("userName", userName);
		map.put("type", type);	
		map.put("sort", sort);
		map.put("place", place);	
		map.put("searchName", searchName);	
		map.put("index", (index*8));
		System.out.println("서비스");
		List<MyListRecommendPlaceData> getSearch = myListRecommendPlaceRepository.getMyRecommendPlaceData(map);
		return getSearch;
	}

	@Override
	public int getMyRecommendPlaceCount(String userName,String type, String sort, String place, String searchName, int index) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("userName", userName);
		map.put("type", type);	
		map.put("sort", sort);
		map.put("place", place);	
		map.put("searchName", searchName);	
		
		int count = myListRecommendPlaceRepository.getMyRecommendPlaceDataCount(map);
		return count;
	}

	@Override
	public boolean deleteMyListRecommendPlace(String recommendCode, String userName) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("recommendCode", recommendCode);	
		map.put("userName", userName);
	
		return myListRecommendPlaceRepository.deleteMyListRecommendPlace(map) > 0;
	}

}
