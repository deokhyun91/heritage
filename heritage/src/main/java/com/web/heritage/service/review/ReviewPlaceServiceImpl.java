package com.web.heritage.service.review;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.web.heritage.domain.review.ReviewData;
import com.web.heritage.domain.review.ReviewPlace;
import com.web.heritage.domain.review.ReviewPlaceRespository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service

public class ReviewPlaceServiceImpl implements ReviewPlaceService{
	private final ReviewPlaceRespository reviewPlaceRespository;

	@Override
	public List<ReviewPlace> getPlaceData(String type, String sort,String place, String searchName, int index) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("type", type);	
		map.put("sort", sort);
		map.put("place", place);
		map.put("searchName", searchName);		
		
		List<ReviewPlace> getSearch = reviewPlaceRespository.getPlaceData(map);
		List<ReviewPlace> outSearch = new ArrayList<ReviewPlace>();
		
		int start = index*10;
		int end = index*10+10;
		
		if(getSearch.size()>0) {
			int size = getSearch.size();
			
			while(true) {
				try {
					outSearch.add(ReviewPlace.builder()
							.size(size)
							.review_code(getSearch.get(start).getReview_code())							
							.data_code(getSearch.get(start).getData_code())
							.data_koname(getSearch.get(start).getData_koname())
							.place_id(getSearch.get(start).getPlace_id())
							.place_name(getSearch.get(start).getPlace_name())
							.review_name(getSearch.get(start).getReview_name())
							.user_id(getSearch.get(start).getUser_id())
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
