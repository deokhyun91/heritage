package com.web.heritage.service.map;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.web.heritage.domain.map.MapData;
import com.web.heritage.domain.map.MapDataRespository;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service

public class MapServiceImpl implements MapService{	
	private final MapDataRespository mapDataRespository;
	
	@Override
	public List<MapData> getSearch(String type,String sort,String searchName,int index) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("type", type);		
		map.put("searchName", searchName);
		map.put("sort", sort);
				
		List<MapData> getSearch = mapDataRespository.getSearch(map);
		List<MapData> outSearch = new ArrayList<MapData>();
		
		int start = index*20;
		int end = index*20+20;
		
		if(getSearch.size()>0) {
			int size = getSearch.size();
			
			while(true) {
				try {
					outSearch.add(MapData.builder()
							.size(size)
							.data_number(getSearch.get(start).getData_number())	
							.data_divide(getSearch.get(start).getData_divide())
							.data_koname(getSearch.get(start).getData_koname())	
							.data_period(getSearch.get(start).getData_period())
							.data_dynasty(getSearch.get(start).getData_dynasty())	
							.data_group(getSearch.get(start).getData_group())	
							.data_address(getSearch.get(start).getData_address())	
							.data_code(getSearch.get(start).getData_code())	
							.data_img(getSearch.get(start).getData_img())	
							.data_pointx(getSearch.get(start).getData_pointx())	
							.data_pointy(getSearch.get(start).getData_pointy())		
							.review_cnt(getSearch.get(start).getReview_cnt())	
							.recommend_cnt(getSearch.get(start).getRecommend_cnt())
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
	
	@Override
	public List<MapData> getSearchOption(String sort,String address, String divide, String period, String group, int index) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();		
		map.put("sort", sort);		
		if(address.equals("지역")){
			map.put("addressCheck", "disable");		
		}
		else {
			map.put("addressCheck", "enable");		
		}
		map.put("address", address);		
		if(divide.equals("지정종목")){
			map.put("divideCheck", "disable");		
		}
		else {
			map.put("divideCheck", "enable");		
		}
		map.put("divide", divide);
		if(period.equals("시대")){
			map.put("periodCheck", "disable");		
		}
		else {
			map.put("periodCheck", "enable");		
		}
		map.put("period", period);
		if(group.equals("유형분류")){
			map.put("groupCheck", "disable");		
		}
		else {
			map.put("groupCheck", "enable");		
		}
		map.put("group", group);
				
		List<MapData> getSearch = mapDataRespository.getSearchOption(map);
		List<MapData> outSearch = new ArrayList<MapData>();
		
		int start = index*20;
		int end = index*20+20;
		
		if(getSearch.size()>0) {
			int size = getSearch.size();
			
			while(true) {
				try {
					outSearch.add(MapData.builder()
							.size(size)
							.data_number(getSearch.get(start).getData_number())	
							.data_divide(getSearch.get(start).getData_divide())
							.data_koname(getSearch.get(start).getData_koname())	
							.data_period(getSearch.get(start).getData_period())
							.data_dynasty(getSearch.get(start).getData_dynasty())	
							.data_group(getSearch.get(start).getData_group())	
							.data_address(getSearch.get(start).getData_address())	
							.data_code(getSearch.get(start).getData_code())	
							.data_img(getSearch.get(start).getData_img())	
							.data_pointx(getSearch.get(start).getData_pointx())	
							.data_pointy(getSearch.get(start).getData_pointy())		
							.review_cnt(getSearch.get(start).getReview_cnt())	
							.recommend_cnt(getSearch.get(start).getRecommend_cnt())
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
