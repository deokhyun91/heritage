package com.web.heritage.service.main;

import java.util.List;

import org.springframework.stereotype.Service;
import com.web.heritage.domain.main.MainSearh;
import com.web.heritage.domain.main.MainSearhRespository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service

public class MainSearchServiceImpl implements MainSearchService{
	private final MainSearhRespository mainSearhRespository;
	
	@Override
	public List<MainSearh> getMainSearchAddress(String searchName) throws Exception {		
		return mainSearhRespository.getMainSearchAddress(searchName);
	}

	@Override
	public List<MainSearh> getMainSearchName(String searchName) throws Exception {		
		return mainSearhRespository.getMainSearchName(searchName);
	}

}
