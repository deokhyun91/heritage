package com.web.heritage.web.controller.api;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web.heritage.domain.recommend.RecommendData;
import com.web.heritage.domain.recommend.RecommendPlace;
import com.web.heritage.service.recommend.RecommendDataService;
import com.web.heritage.service.recommend.RecommendPlaceService;
import com.web.heritage.web.api.resp.recommend.CMRecommendSearchDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/recommend")
@RequiredArgsConstructor

public class RecommendContoroller {
	private final RecommendDataService recommendDataService;
	private final RecommendPlaceService recommendPlaceService;
	
	@GetMapping("/data")
	public ResponseEntity<?> getSearch(@RequestParam String type,String sort,String searchName,int index){
		List<RecommendData> search = null;
		int size = -1;
		
		try {					
			search = recommendDataService.getRecommendData(type,sort,searchName,index);
			
			if(search.size()>0) {
				size = search.get(0).getSize();
			}
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMRecommendSearchDto<>(size,"추천목록 검색 실패",search));
		}		
		return ResponseEntity.ok().body(new CMRecommendSearchDto<>(size,"추천목록 검색 성공",search));	
	}
	
	@GetMapping("/place")
	public ResponseEntity<?> getPlaceSearch(@RequestParam String type, String sort, String place, String searchName,int index){
		List<RecommendPlace> search = null;
		int size = -1;
		
		try {					
			search = recommendPlaceService.getRecommendPlace(type,sort,place,searchName,index);	
			
			if(search.size()>0) {
				size = search.get(0).getSize();
			}		
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMRecommendSearchDto<>(size,"추천목록 검색 실패",search));
		}		
		return ResponseEntity.ok().body(new CMRecommendSearchDto<>(size,"추천목록 검색 성공",search));	
	}
}
