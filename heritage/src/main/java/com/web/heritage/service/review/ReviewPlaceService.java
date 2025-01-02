package com.web.heritage.service.review;

import java.util.List;

import com.web.heritage.domain.review.ReviewPlace;


public interface ReviewPlaceService {
	public List<ReviewPlace> getPlaceData(String type,String sort,String place,String searchName,int index) throws Exception;	
}
