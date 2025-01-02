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

public class ReviewData {
	private int size;
	private int review_code;
	private String user_id;
	private String data_code;
	private String data_koname;
	private String review_name;
	private String review_count;
	private LocalDateTime create_date;	
}
