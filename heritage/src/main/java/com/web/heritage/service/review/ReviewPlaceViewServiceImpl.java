package com.web.heritage.service.review;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.web.heritage.domain.review.ReviewPlaceView;
import com.web.heritage.domain.review.ReviewPlaceViewRespository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service

public class ReviewPlaceViewServiceImpl implements ReviewPlaceViewService{
	private final ReviewPlaceViewRespository reviewPlaceViewRespository;
	
	@Override
	public ReviewPlaceView getReviewPlaceView(String place,int code) throws Exception {		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("place", place);	
		map.put("code", code);
		
		return reviewPlaceViewRespository.getReviewPlaceView(map);
	}
	
}
