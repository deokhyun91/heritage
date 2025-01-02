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

public class MyListReviewWritePlace {
	private int review_code;
	private String data_code;
	private String place_id;
	private String review_name;
	private String user_id;
	private String user_gender;
	private String data_koname;
	private String data_img;
	private String place_name;
	private String place_img;
	private String review_content;
	private int review_count;
	private LocalDateTime create_date;
	private LocalDateTime update_date;
}
