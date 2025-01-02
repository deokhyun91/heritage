package com.web.heritage.service.main;

import java.util.List;

import com.web.heritage.domain.main.MainView;

public interface MainViewService {
	public List<MainView> getMainRecommend() throws Exception;	
	public List<MainView> getMainReview() throws Exception;
}
