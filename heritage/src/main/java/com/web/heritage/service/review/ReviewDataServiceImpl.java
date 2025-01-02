package com.web.heritage.service.review;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.web.heritage.domain.review.ReviewData;
import com.web.heritage.domain.review.ReviewDataRespository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service

public class ReviewDataServiceImpl implements ReviewDataService{
	private final ReviewDataRespository reviewDataRespository;

	@Override
	public List<ReviewData> getReviewData(String type, String sort, String searchName, int index) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("type", type);	
		map.put("sort", sort);
		map.put("searchName", searchName);		
		
		List<ReviewData> getSearch = reviewDataRespository.getReviewData(map);
		List<ReviewData> outSearch = new ArrayList<ReviewData>();
		
		int start = index*10;
		int end = index*10+10;
		
		if(getSearch.size()>0) {
			int size = getSearch.size();
			
			while(true) {
				try {
					outSearch.add(ReviewData.builder()
							.size(size)
							.review_code(getSearch.get(start).getReview_code())
							.user_id(getSearch.get(start).getUser_id())
							.data_code(getSearch.get(start).getData_code())
							.data_koname(getSearch.get(start).getData_koname())
							.review_name(getSearch.get(start).getReview_name())
							.review_count(getSearch.get(start).getReview_count())
							.create_date(getSearch.get(start).getCreate_date())	
							.build());
					
					start++;
					if(start==end) {
						break;
					}
				}
				catch(Exception e) {
					break;
				}
			}
		}
		
		return outSearch;
	}
}
