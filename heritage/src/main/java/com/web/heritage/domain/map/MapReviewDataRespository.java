package com.web.heritage.domain.map;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;

@Mapper

public interface MapReviewDataRespository {
	public List<MapReviewData> getReviewData(String dataCode) throws Exception;
}
