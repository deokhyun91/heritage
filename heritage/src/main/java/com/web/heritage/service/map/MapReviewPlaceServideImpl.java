package com.web.heritage.service.map;

import java.util.List;
import org.springframework.stereotype.Service;

import com.web.heritage.domain.map.MapReviewPlace;
import com.web.heritage.domain.map.MapReviewPlaceRespository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service

public class MapReviewPlaceServideImpl implements MapReviewPlaceService{
	private final MapReviewPlaceRespository mapReviewPlaceRespository;
	@Override	
	public List<MapReviewPlace> getReviewPlace(String placeId) throws Exception {	
		return mapReviewPlaceRespository.getReviewPlace(placeId);
	}

}
