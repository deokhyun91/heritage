package com.web.heritage.service.review;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.web.heritage.domain.review.ReviewWriteData;
import com.web.heritage.domain.review.ReviewWriteDataRespository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service


public class ReviewWriteDataServiceImpl implements ReviewWriteDataService{
	private final ReviewWriteDataRespository reviewWriteDataRespository;
	
	@Override
	public ReviewWriteData getReviewData(String dataCode) throws Exception {		
		return reviewWriteDataRespository.getReviewData(dataCode);
	}
	
	@Override
	public boolean saveReivewData(String dataCode, String userId, String reviewName, String reviewContent) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("dataCode", dataCode);	
		map.put("userId", userId);
		map.put("reviewName", reviewName);
		map.put("reviewContent", reviewContent);
		
		return reviewWriteDataRespository.saveReivewData(map);
	}
}
