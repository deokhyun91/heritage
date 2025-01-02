package com.web.heritage.domain.review;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data

public class ReviewPlace {	
	private int size;
	private int review_code;
	private String data_code;
	private String data_koname;
	private String place_id;
	private String place_name;
	private String review_name;
	private String user_id;
	private int review_count;
	private LocalDateTime create_date;
}
