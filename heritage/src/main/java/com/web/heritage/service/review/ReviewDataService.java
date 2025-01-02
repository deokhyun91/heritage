package com.web.heritage.service.review;

import java.util.List;

import com.web.heritage.domain.review.ReviewData;


public interface ReviewDataService {
	public List<ReviewData> getReviewData(String type,String sort,String searchName,int index) throws Exception;	
}
