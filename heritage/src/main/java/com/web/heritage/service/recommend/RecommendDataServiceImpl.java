package com.web.heritage.service.recommend;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.web.heritage.domain.recommend.RecommendData;
import com.web.heritage.domain.recommend.RecommendDataRespository;
import com.web.heritage.domain.recommend.RecommendPlace;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service

public class RecommendDataServiceImpl  implements RecommendDataService{
	private final RecommendDataRespository recommendDataRespository;
	@Override
	public List<RecommendData> getRecommendData(String type,String sort,String searchName,int index) throws Exception {		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("type", type);	
		map.put("sort", sort);
		map.put("searchName", searchName);		
		
		List<RecommendData> getSearch = recommendDataRespository.getRecommendData(map);
		List<RecommendData> outSearch = new ArrayList<RecommendData>();
		
		int start = index*8;
		int end = index*8+8;
		
		if(getSearch.size()>0) {
			int size = getSearch.size();
			
			while(true) {
				try {					
					outSearch.add(RecommendData.builder()
							.size(size)
							.recommend_code(getSearch.get(start).getRecommend_code())								
							.data_code(getSearch.get(start).getData_code())	
							.data_img(getSearch.get(start).getData_img())	
							.data_koname(getSearch.get(start).getData_koname())	
							.data_dynasty(getSearch.get(start).getData_dynasty())	
							.data_address(getSearch.get(start).getData_address())	
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
