package com.web.heritage.domain.mylist;

import com.web.heritage.domain.recommend.RecommendPlace;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class MyListRecommendPlaceData {
	private int size;
	private int recommend_code;	
	private String data_koname;
	private String data_code;
	private String place_id;
	private String place_name;
	private String category_name;
	private String place_address;
	private String place_url;
	private String place_img;	
	
}
