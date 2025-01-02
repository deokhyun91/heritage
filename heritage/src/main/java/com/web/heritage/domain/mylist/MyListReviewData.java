package com.web.heritage.domain.mylist;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data

public class MyListReviewData {
	private int review_code;		
	private String data_code;
	private String user_id;
	private String review_name;
	private int review_count;
	private String data_koname;
	private LocalDateTime create_date;
}
