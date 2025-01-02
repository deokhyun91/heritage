package com.web.heritage.service.review;

import org.springframework.stereotype.Service;

import com.web.heritage.domain.review.ReviewDataView;
import com.web.heritage.domain.review.ReviewDataViewRespository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service

public class ReviewDataViewServiceImpl implements ReviewDataViewService{
	private final ReviewDataViewRespository reviewDataViewRespository;

	@Override
	public ReviewDataView getReviewDataView(int code) throws Exception {	
		return reviewDataViewRespository.getReviewDataView(code);
	}
	
	
}
