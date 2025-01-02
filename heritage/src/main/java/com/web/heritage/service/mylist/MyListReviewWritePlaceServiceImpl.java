package com.web.heritage.service.mylist;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.web.heritage.domain.mylist.MyListReviewWritePlace;
import com.web.heritage.domain.mylist.MyListReviewWritePlaceReposity;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class MyListReviewWritePlaceServiceImpl implements MyListReviewWritePlaceService{
	private final MyListReviewWritePlaceReposity myListReviewWritePlaceReposity;

	@Override
	public MyListReviewWritePlace getMyListPlaceView(int code, String place) throws Exception {	
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("code", code);	
		map.put("place", place);	
		
		return myListReviewWritePlaceReposity.getMyListPlaceView(map);
	}

	@Override
	public boolean updateMyListPlace(String userId, int reviewCode, String dataCode, String placeId, String reviewName, String reviewContent) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("userId", userId);	
		map.put("reviewCode", reviewCode);	
		map.put("dataCode", dataCode);	
		map.put("placeId", placeId);	
		map.put("reviewName", reviewName);	
		map.put("reviewContent", reviewContent);	
		
		return myListReviewWritePlaceReposity.updateMyListPlace(map);
	}

	@Override
	public boolean deleteMyListPlace(String userId, int reviewCode, String dataCode, String placeId) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("userId", userId);	
		map.put("reviewCode", reviewCode);	
		map.put("dataCode", dataCode);	
		map.put("placeId", placeId);	
		
		return myListReviewWritePlaceReposity.deleteMyListPlace(map);
	}
}
