package com.web.heritage.domain.main;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;

@Mapper

public interface MainSearhRespository {
	public List<MainSearh> getMainSearchAddress(String searchName) throws Exception;	
	public List<MainSearh> getMainSearchName(String searchName) throws Exception;	
}
