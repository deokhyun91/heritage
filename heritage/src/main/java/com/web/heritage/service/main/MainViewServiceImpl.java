package com.web.heritage.service.main;

import java.util.List;

import org.springframework.stereotype.Service;
import com.web.heritage.domain.main.MainView;
import com.web.heritage.domain.main.MainViewRespository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service

public class MainViewServiceImpl implements MainViewService{
	private final MainViewRespository mainViewRespository;

	@Override
	public List<MainView> getMainRecommend() throws Exception {		
		System.out.println("서비스단");
		return mainViewRespository.getMainRecommend();
	}

	@Override
	public List<MainView> getMainReview() throws Exception {	
		return mainViewRespository.getMainReview();
	}

}
