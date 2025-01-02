package com.web.heritage.service.main;

import java.util.List;
import com.web.heritage.domain.main.MainSearh;

public interface MainSearchService {
	public List<MainSearh> getMainSearchAddress(String searchName) throws Exception;	
	public List<MainSearh> getMainSearchName(String searchName) throws Exception;
}
