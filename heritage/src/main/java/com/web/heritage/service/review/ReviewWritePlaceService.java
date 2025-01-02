package com.web.heritage.service.review;

import com.web.heritage.domain.review.ReviewWritePlace;

public interface ReviewWritePlaceService {
	public ReviewWritePlace getReviewPlace(String dataCode,String place,String placeId) throws Exception;	
	public boolean saveReivewPlace(String dataCode, String placeId,String userId,String reviewName, String reviewContent) throws Exception;
}
