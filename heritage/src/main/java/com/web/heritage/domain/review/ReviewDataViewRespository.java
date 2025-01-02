package com.web.heritage.domain.review;

import org.apache.ibatis.annotations.Mapper;

@Mapper

public interface ReviewDataViewRespository {
	public ReviewDataView getReviewDataView(int code) throws Exception;	
}
