package com.web.heritage.domain.mylist;

import java.util.Map;
import org.apache.ibatis.annotations.Mapper;

@Mapper

public interface MyListReviewWritePlaceReposity {
	public MyListReviewWritePlace getMyListPlaceView(Map<String, Object> map) throws Exception;
	public boolean updateMyListPlace(Map<String, Object> map) throws Exception;
	public boolean deleteMyListPlace(Map<String, Object> map) throws Exception;
}
