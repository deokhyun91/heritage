package com.web.heritage.domain.map;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data

public class MapRecommendData {
	private int recommend_code;
	private String user_id;
	private String data_code;
}
