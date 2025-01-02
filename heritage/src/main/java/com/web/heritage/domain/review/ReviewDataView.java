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

public class ReviewDataView {
	private String review_name;
	private String user_id;
	private String user_gender;
	private String data_koname;
	private String data_img;
	private int review_count;
	private String review_content;
	private LocalDateTime create_date;
	private LocalDateTime update_date;	
}
