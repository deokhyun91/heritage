package com.web.heritage.domain.recommend;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data

public class RecommendPlace {
	private int size;
	private String data_koname;
	private String data_code;
	private String place_id;
	private String place_name;
	private String category_name;
	private String place_address;
	private String place_url;
	private String place_img;		
	private int recommend_cnt;	
	private int review_cnt;
}
