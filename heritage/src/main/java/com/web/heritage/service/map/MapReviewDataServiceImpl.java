package com.web.heritage.service.map;

import java.util.List;

import org.springframework.stereotype.Service;
import com.web.heritage.domain.map.MapReviewData;
import com.web.heritage.domain.map.MapReviewDataRespository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service

public class MapReviewDataServiceImpl implements MapReviewDataService{
	private final MapReviewDataRespository mapReviewDataRespository;
	@Override
	public List<MapReviewData> getReviewData(String dataCode) throws Exception {		
		return mapReviewDataRespository.getReviewData(dataCode);
	}
	
}
