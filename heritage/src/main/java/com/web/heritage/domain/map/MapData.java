package com.web.heritage.domain.map;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data

public class MapData {
	private int size;
	private int data_number;	
	private String data_divide;
	private String data_koname;	
	private String data_period;
	private String data_dynasty;	
	private String data_group;	
	private String data_address;	
	private String data_code;	
	private String data_img;	
	private double data_pointx;	
	private double data_pointy;		
	private int review_cnt;	
	private int recommend_cnt;	
}
