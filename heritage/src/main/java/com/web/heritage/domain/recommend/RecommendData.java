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

public class RecommendData {
	private int size;	
	private int recommend_code;		
	private String data_code;
	private String data_img;
	private String data_koname;
	private String data_dynasty;
	private String data_address;
	private int recommend_cnt;	
	private int review_cnt;	
}
