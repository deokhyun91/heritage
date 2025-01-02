package com.web.heritage.domain.review;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data

public class ReviewWritePlace {
	private String place_name;
	private String data_koname;
	private String place_img;
}
