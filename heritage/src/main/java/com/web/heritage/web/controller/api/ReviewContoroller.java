package com.web.heritage.web.controller.api;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web.heritage.domain.review.ReviewData;
import com.web.heritage.domain.review.ReviewDataView;
import com.web.heritage.domain.review.ReviewPlace;
import com.web.heritage.domain.review.ReviewPlaceView;
import com.web.heritage.domain.review.ReviewWriteData;
import com.web.heritage.domain.review.ReviewWritePlace;
import com.web.heritage.service.review.ReviewCountService;
import com.web.heritage.service.review.ReviewDataService;
import com.web.heritage.service.review.ReviewDataViewService;
import com.web.heritage.service.review.ReviewPlaceService;
import com.web.heritage.service.review.ReviewPlaceViewService;
import com.web.heritage.service.review.ReviewWriteDataService;
import com.web.heritage.service.review.ReviewWritePlaceService;
import com.web.heritage.web.api.resp.review.CMReviewSearchDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/review")
@RequiredArgsConstructor

public class ReviewContoroller {
	private final ReviewDataService reviewDataService;
	private final ReviewPlaceService reviewPlaceService;
	private final ReviewDataViewService reviewDataViewService;
	private final ReviewPlaceViewService reviewPlaceViewService;
	private final ReviewWriteDataService reviewWriteDataService;
	private final ReviewWritePlaceService reviewWritePlaceService;
	private final ReviewCountService reviewCountService;
	
	@GetMapping("/data")
	public ResponseEntity<?> getData(@RequestParam String type,String sort,String searchName,int index){
		List<ReviewData> reviewData = null;
		int size = 0;
	
		try {
			reviewData = reviewDataService.getReviewData(type, sort, searchName, index);
			if(reviewData.size()>0) {
				size = reviewData.get(0).getSize();
			}
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMReviewSearchDto<>(size,"리뷰 데이터 검색 실패",reviewData));
		}		
		return ResponseEntity.ok().body(new CMReviewSearchDto<>(size,"리뷰 데이터 성공",reviewData));	
	}
	
	@GetMapping("/place")
	public ResponseEntity<?> getPlace(@RequestParam String type,String sort,String place,String searchName,int index){
		List<ReviewPlace> reviewPlace = null;
		int size = 0;
	
		try {
			reviewPlace = reviewPlaceService.getPlaceData(type, sort, place, searchName, index);
			if(reviewPlace.size()>0) {
				size = reviewPlace.get(0).getSize();
			}
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMReviewSearchDto<>(size,"리뷰 플레이스 검색 실패",reviewPlace));
		}		
		return ResponseEntity.ok().body(new CMReviewSearchDto<>(size,"리뷰 플레이스 검색 성공",reviewPlace));	
	}
	
	@GetMapping("/dataview")
	public ResponseEntity<?> getDataView(@RequestParam int code){
		ReviewDataView reviewDataView = null;
		int size = 0;
	
		try {
			reviewDataView = reviewDataViewService.getReviewDataView(code);			
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMReviewSearchDto<>(size,"리뷰 데이터 보기 실패",reviewDataView));
		}		
		return ResponseEntity.ok().body(new CMReviewSearchDto<>(size,"리뷰 데이터 보기 성공",reviewDataView));	
	}
	
	@GetMapping("/placeview")
	public ResponseEntity<?> getPlaceView(@RequestParam String place,int code){
		ReviewPlaceView reviewPlaceView = null;
		int size = 0;
	
		try {
			reviewPlaceView = reviewPlaceViewService.getReviewPlaceView(place,code);
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMReviewSearchDto<>(size,"리뷰 플레이스 보기 실패",reviewPlaceView));
		}		
		return ResponseEntity.ok().body(new CMReviewSearchDto<>(size,"리뷰 플레이스 보기 성공",reviewPlaceView));	
	}
	
	@GetMapping("/load/data")
	public ResponseEntity<?> getReviewData(@RequestParam String dataCode){
		ReviewWriteData reviewWriteData = null;
		int size = 0;
	
		try {
			reviewWriteData = reviewWriteDataService.getReviewData(dataCode);
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMReviewSearchDto<>(size,"데이터 로드 실패",reviewWriteData));
		}		
		return ResponseEntity.ok().body(new CMReviewSearchDto<>(size,"데이터 로드 성공",reviewWriteData));	
	}
	
	@PostMapping("/save/data")
	public ResponseEntity<?> saveReivewData(@RequestParam String dataCode,String userId,String reviewName,String reviewContent){
		boolean result = false;
		int size = 0;
	
		try {			
			result = reviewWriteDataService.saveReivewData(dataCode, userId, reviewName, reviewContent);
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMReviewSearchDto<>(size,"데이터 글쓰기 실패",result));
		}		
		return ResponseEntity.ok().body(new CMReviewSearchDto<>(size,"데이터 글쓰기 성공",result));	
	}
	
	@GetMapping("/load/place")
	public ResponseEntity<?> getReviewPlace(@RequestParam String dataCode,String place,String placeId){
		ReviewWritePlace reviewWritePlace = null;
		int size = 0;
	
		try {
			reviewWritePlace = reviewWritePlaceService.getReviewPlace(dataCode,place,placeId);
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMReviewSearchDto<>(size,"플레이스 로드 실패",reviewWritePlace));
		}		
		return ResponseEntity.ok().body(new CMReviewSearchDto<>(size,"플레이스 로드 성공",reviewWritePlace));	
	}
	
	@PostMapping("/save/place")
	public ResponseEntity<?> saveReivewPlace(@RequestParam String dataCode,String placeId,String userId,String reviewName, String reviewContent){
		boolean result = false;
		int size = 0;
	
		try {			
			result = reviewWritePlaceService.saveReivewPlace(dataCode, placeId, userId, reviewName, reviewContent);
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMReviewSearchDto<>(size,"플레이스 글쓰기 실패",result));
		}		
		return ResponseEntity.ok().body(new CMReviewSearchDto<>(size,"플레이스 글쓰기 성공",result));	
	}
	
	@PostMapping("/save/data/count")
	public ResponseEntity<?> saveReviewDataCount(@RequestParam int reviewCode){
		boolean result = false;
		int size = 0;
	
		try {			
			result = reviewCountService.reviewDataCount(reviewCode);
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMReviewSearchDto<>(size,"데이터 카운트 실패",result));
		}		
		return ResponseEntity.ok().body(new CMReviewSearchDto<>(size,"데이터 카운트 성공",result));	
	}
	
	@PostMapping("/save/place/count")
	public ResponseEntity<?> saveReviewPlaceCount(@RequestParam int reviewCode){
		boolean result = false;
		int size = 0;
	
		try {			
			result = reviewCountService.reviewPlaceCount(reviewCode);
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMReviewSearchDto<>(size,"플레이스 카운트 실패",result));
		}		
		return ResponseEntity.ok().body(new CMReviewSearchDto<>(size,"플레이스 카운트 성공",result));	
	}
}
