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

public class MapUserRecommendData {
	private int recommend_code;
	private String user_id;
	private String data_code;
	private LocalDateTime create_date;
	private LocalDateTime update_date;
}
