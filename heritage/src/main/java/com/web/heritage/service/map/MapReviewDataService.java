package com.web.heritage.service.map;

import java.util.List;
import com.web.heritage.domain.map.MapReviewData;

public interface MapReviewDataService {
	public List<MapReviewData> getReviewData(String dataCode) throws Exception;
}
