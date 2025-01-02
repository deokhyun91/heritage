package com.web.heritage.service.review;

import com.web.heritage.domain.review.ReviewPlaceView;

public interface ReviewPlaceViewService {
	public ReviewPlaceView getReviewPlaceView(String place,int code)throws Exception;
}
