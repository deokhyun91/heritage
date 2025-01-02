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

public class MapReviewData {	
	private int review_code;
	private String data_code;	
	private String user_id;	
	private String user_gender;	
	private String review_name;	
	private String review_content;	
	private String review_count;
	private LocalDateTime create_date;	
	private LocalDateTime update_date;
}
