package com.web.heritage.service.map;

import java.util.List;

import com.web.heritage.domain.map.MapReviewPlace;

public interface MapReviewPlaceService {
	public List<MapReviewPlace> getReviewPlace(String placeId) throws Exception;
}
