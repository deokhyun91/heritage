package com.web.heritage.domain.review;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper

public interface ReviewWriteDataRespository {
	public ReviewWriteData getReviewData(String dataCode) throws Exception;
	public boolean saveReivewData(Map<String, Object> map) throws Exception;
}
