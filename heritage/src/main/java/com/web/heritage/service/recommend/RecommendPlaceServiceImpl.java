package com.web.heritage.service.recommend;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.web.heritage.domain.recommend.RecommendPlace;
import com.web.heritage.domain.recommend.RecommendPlaceRespository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service

public class RecommendPlaceServiceImpl implements RecommendPlaceService{
	private final RecommendPlaceRespository recommendPlaceRespository;

	@Override
	public List<RecommendPlace> getRecommendPlace(String type, String sort, String place, String searchName, int index) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("type", type);	
		map.put("sort", sort);
		map.put("place", place);	
		map.put("searchName", searchName);	
		
		List<RecommendPlace> getSearch = recommendPlaceRespository.getRecommendPlace(map);
		List<RecommendPlace> outSearch = new ArrayList<RecommendPlace>();		
		
		int start = index*8;
		int end = index*8+8;
		
		if(getSearch.size()>0) {
			int size = getSearch.size();
			while(true) {
				try {
					
					outSearch.add(RecommendPlace.builder()
							.size(size)							
							.data_koname(getSearch.get(start).getData_koname())
							.data_code(getSearch.get(start).getData_code())
							.place_id(getSearch.get(start).getPlace_id())
							.place_name(getSearch.get(start).getPlace_name())
							.category_name(getSearch.get(start).getCategory_name())
							.place_address(getSearch.get(start).getPlace_address())
							.place_url(getSearch.get(start).getPlace_url())
							.place_img(getSearch.get(start).getPlace_img())	
							.recommend_cnt(getSearch.get(start).getRecommend_cnt())					
							.review_cnt(getSearch.get(start).getReview_cnt())											
							.build()
					);
					
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
