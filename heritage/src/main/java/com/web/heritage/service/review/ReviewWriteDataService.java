package com.web.heritage.service.review;

import com.web.heritage.domain.review.ReviewWriteData;

public interface ReviewWriteDataService {
	public ReviewWriteData getReviewData(String dataCode) throws Exception;
	public boolean saveReivewData(String dataCode,String userId,String reviewName,String reviewContent) throws Exception;
}
