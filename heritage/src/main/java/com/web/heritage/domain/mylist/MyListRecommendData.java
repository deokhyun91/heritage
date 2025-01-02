package com.web.heritage.domain.mylist;

import com.web.heritage.domain.recommend.RecommendData;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class MyListRecommendData {
		
	private int recommend_code;		
	private String data_code;
	private String data_img;
	private String data_koname;
	private String data_dynasty;
	private String data_address;
	

	
}
