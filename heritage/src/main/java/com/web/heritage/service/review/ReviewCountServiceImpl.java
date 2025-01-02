package com.web.heritage.service.review;

import org.springframework.stereotype.Service;
import com.web.heritage.domain.review.ReviewCountRespository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service

public class ReviewCountServiceImpl implements ReviewCountService{
	private final ReviewCountRespository reviewCountRespository;

	@Override
	public boolean reviewDataCount(int reviewCode) throws Exception {	
		return reviewCountRespository.reviewDataCount(reviewCode);
	}

	@Override
	public boolean reviewPlaceCount(int reviewCode) throws Exception {
		return reviewCountRespository.reviewPlaceCount(reviewCode);
	}
}
