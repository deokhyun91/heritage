package com.web.heritage.web.controller.api;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web.heritage.domain.map.MapData;
import com.web.heritage.domain.map.MapPlace;
import com.web.heritage.domain.map.MapReviewData;
import com.web.heritage.domain.map.MapReviewPlace;
import com.web.heritage.domain.map.MapUserRecommendData;
import com.web.heritage.domain.map.MapUserRecommendPlace;
import com.web.heritage.service.map.MapService;
import com.web.heritage.service.map.MapUserRecommendDataService;
import com.web.heritage.service.map.MapUserRecommendPlaceService;
import com.web.heritage.service.map.MapPlaceService;
import com.web.heritage.service.map.MapReviewDataService;
import com.web.heritage.service.map.MapReviewPlaceService;
import com.web.heritage.web.api.resp.map.CMMapSearchDto;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api/v1/map")
@RequiredArgsConstructor

public class MapController {
	
	private final MapService mapService;
	private final MapPlaceService placeService;
	private final MapReviewDataService mapReviewDataService;
	private final MapReviewPlaceService mapReviewPlaceService;
	private final MapUserRecommendDataService mapUserRecommendDataService;
	private final MapUserRecommendPlaceService mapUserRecommendPlaceService;
	
	@GetMapping("/search")
	public ResponseEntity<?> getSearch(@RequestParam String type,String sort,String searchName,int index){
		List<MapData> search = null;
		int size = 0;
	
		try {			
			search = mapService.getSearch(type,sort,searchName,index);
			if(search.size()>0) {
				size = search.get(0).getSize();
			}			
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMMapSearchDto<>(size,"맵 검색 실패",search));
		}		
		return ResponseEntity.ok().body(new CMMapSearchDto<>(size,"맵 검색 성공",search));	
	}
	
	@GetMapping("/search/option")
	public ResponseEntity<?> getSearchOption(@RequestParam String sort,String address,String divide,String period,String group,int index){
		List<MapData> searchOption = null;
		int size = 0;
			
		try {				
			searchOption = mapService.getSearchOption(sort,address,divide,period,group,index);
			if(searchOption.size()>0) {
				size = searchOption.get(0).getSize();
			}			
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMMapSearchDto<>(size,"옵션 검색 실패",searchOption));
		}		
		return ResponseEntity.ok().body(new CMMapSearchDto<>(size,"옵션 검색 성공",searchOption));	
	}
	
	@GetMapping("/place/{type}")
	public ResponseEntity<?> getPlace(@PathVariable String type,@RequestParam String dataCode){
		
		List<MapPlace> place = null;
		int size = 0;
		
		try {			
			place = placeService.getPlaceData(type,dataCode);
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMMapSearchDto<>(size,"플레이스 검색 실패",place));
		}		
		return ResponseEntity.ok().body(new CMMapSearchDto<>(size,"플레이스 검색 성공",place));		
	}
	
	@GetMapping("/review/data")
	public ResponseEntity<?> getReviewData(@RequestParam String dataCode){
		
		List<MapReviewData> reviewData = null;
		int size = 0;
		
		try {			
			reviewData = mapReviewDataService.getReviewData(dataCode);
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMMapSearchDto<>(size,"데이터 리뷰 검색 실패",reviewData));
		}		
		return ResponseEntity.ok().body(new CMMapSearchDto<>(size,"데이터 리뷰 검색 성공",reviewData));		
	}
	
	@GetMapping("/review/place")
	public ResponseEntity<?> getReviewPlace(@RequestParam String placeId){
		
		List<MapReviewPlace> reviewPlace = null;
		int size = 0;
		
		try {		
			reviewPlace = mapReviewPlaceService.getReviewPlace(placeId);			
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMMapSearchDto<>(size,"플레이스 리뷰 검색 실패",reviewPlace));
		}		
		return ResponseEntity.ok().body(new CMMapSearchDto<>(size,"플레이스 리뷰 검색 성공",reviewPlace));		
	}
	
	@GetMapping("/user/recommed/data")
	public ResponseEntity<?> getUserRecommendData(@RequestParam String id){
		
		List<MapUserRecommendData> mapUserRecommendData = null;
		int size = 0;
		
		try {		
			mapUserRecommendData = mapUserRecommendDataService.getUserRecommendData(id);
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMMapSearchDto<>(size,"유저 데이터 추천 검색 실패",mapUserRecommendData));
		}		
		return ResponseEntity.ok().body(new CMMapSearchDto<>(size,"유저 데이터 추천 검색 성공",mapUserRecommendData));		
	}
	
	@PostMapping("/user/recommed/data/save")
	public ResponseEntity<?> saveUserRecommendData(@RequestParam String id,String dataCode){
		
		boolean result = false;
		int size = 0;
		
		try {		
			result = mapUserRecommendDataService.saveUserRecommendData(id,dataCode);
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMMapSearchDto<>(size,"유저 추천목록 추가 실패",result));
		}		
		return ResponseEntity.ok().body(new CMMapSearchDto<>(size,"유저 추천목록 추가 성공",result));		
	}
	
	@PostMapping("/user/recommed/data/delete")
	public ResponseEntity<?> deleteUserRecommendData(@RequestParam String id,String dataCode,int recommendCode){
		
		boolean result = false;
		int size = 0;
		
		try {					
			result = mapUserRecommendDataService.deleteUserRecommendData(id,dataCode,recommendCode);
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMMapSearchDto<>(size,"유저 추천목록 삭제 실패",result));
		}		
		return ResponseEntity.ok().body(new CMMapSearchDto<>(size,"유저 추천목록 삭제 성공",result));		
	}
	
	@GetMapping("/user/recommed/place")
	public ResponseEntity<?> getUserRecommendPlace(@RequestParam String id){
		
		List<MapUserRecommendPlace> mapUserRecommendPlace = null;
		int size = 0;
		
		try {		
			mapUserRecommendPlace = mapUserRecommendPlaceService.getUserRecommendPlace(id);
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMMapSearchDto<>(size,"유저 플레이스 추천 검색 실패",mapUserRecommendPlace));
		}		
		return ResponseEntity.ok().body(new CMMapSearchDto<>(size,"유저 플레이스 추천 검색 성공",mapUserRecommendPlace));		
	}
	
	@PostMapping("/user/recommed/place/save")
	public ResponseEntity<?> saveUserRecommendPlace(@RequestParam String id,String placeId){
		
		boolean result = false;
		int size = 0;
		
		try {		
			result = mapUserRecommendPlaceService.saveUserRecommendPlace(id, placeId);
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMMapSearchDto<>(size,"유저 추천목록 추가 실패",result));
		}		
		return ResponseEntity.ok().body(new CMMapSearchDto<>(size,"유저 추천목록 추가 성공",result));		
	}
	
	@PostMapping("/user/recommed/place/delete")
	public ResponseEntity<?> deleteUserRecommendPlace(@RequestParam String id,String placeId,int recommendCode){
		
		boolean result = false;
		int size = 0;
		
		try {					
			result = mapUserRecommendPlaceService.deleteUserRecommendPlace(id, placeId, recommendCode);
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMMapSearchDto<>(size,"유저 추천목록 삭제 실패",result));
		}		
		return ResponseEntity.ok().body(new CMMapSearchDto<>(size,"유저 추천목록 삭제 성공",result));		
	}
}
