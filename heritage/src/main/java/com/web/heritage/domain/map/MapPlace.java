package com.web.heritage.domain.map;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data

public class MapPlace {
	private int place_code;
	private String data_code;
	private String place_id;
	private String category_name;
	private String place_name;
	private String place_road_address;
	private String place_address;
	private String place_phone;
	private String place_url;
	private String place_img;
	private double place_pointx;
	private double place_pointy;
	private int review_cnt;	
	private int recommend_cnt;	
}
