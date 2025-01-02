package com.web.heritage.domain.main;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;

@Mapper

public interface MainViewRespository {
	public List<MainView> getMainRecommend() throws Exception;	
	public List<MainView> getMainReview() throws Exception;
}
