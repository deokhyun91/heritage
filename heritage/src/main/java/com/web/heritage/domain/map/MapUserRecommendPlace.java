package com.web.heritage.domain.map;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data

public class MapUserRecommendPlace {
	private int recommend_code;
	private String user_id;
	private String place_id;
	private LocalDateTime create_date;
	private LocalDateTime update_date;
}
