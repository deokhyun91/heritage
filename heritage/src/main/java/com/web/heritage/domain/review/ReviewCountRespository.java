package com.web.heritage.domain.review;

import org.apache.ibatis.annotations.Mapper;

@Mapper

public interface ReviewCountRespository {
	public boolean reviewDataCount(int reviewCode) throws Exception;	
	public boolean reviewPlaceCount(int reviewCode) throws Exception;	
}	
