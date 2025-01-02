package com.web.heritage.domain.main;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data

public class MainView {
	private String data_code;
	private String data_koname;
	private String data_dynasty;
	private String data_address;
	private String data_img;
	private int cnt;
}
