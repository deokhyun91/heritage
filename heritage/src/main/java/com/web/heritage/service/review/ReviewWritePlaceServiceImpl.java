package com.web.heritage.service.review;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.web.heritage.domain.review.ReviewWritePlace;
import com.web.heritage.domain.review.ReviewWritePlaceRespository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service

public class ReviewWritePlaceServiceImpl implements ReviewWritePlaceService{
	private final ReviewWritePlaceRespository reviewWritePlaceRespository;

	@Override
	public ReviewWritePlace getReviewPlace(String dataCode, String place, String placeId) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("dataCode", dataCode);	
		map.put("place", place);
		map.put("placeId", placeId);
	
		return reviewWritePlaceRespository.getReviewPlace(map);
	}

	@Override
	public boolean saveReivewPlace(String dataCode, String placeId, String userId, String reviewName, String reviewContent) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("dataCode", dataCode);	
		map.put("placeId", placeId);
		map.put("userId", userId);	
		map.put("reviewName", reviewName);
		map.put("reviewContent", reviewContent);
		
		return reviewWritePlaceRespository.saveReivewPlace(map);
	}
	
	
}
