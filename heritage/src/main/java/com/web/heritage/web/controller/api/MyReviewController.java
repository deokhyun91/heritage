package com.web.heritage.web.controller.api;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.web.heritage.domain.mylist.MyListReviewData;
import com.web.heritage.domain.mylist.MyListReviewPlaceData;
import com.web.heritage.domain.mylist.MyListReviewWriteData;
import com.web.heritage.domain.mylist.MyListReviewWritePlace;
import com.web.heritage.service.mylist.MyListReviewPlaceService;
import com.web.heritage.service.mylist.MyListReviewWriteDataService;
import com.web.heritage.service.mylist.MyListReviewWritePlaceService;
import com.web.heritage.service.mylist.MylistReviewDataSerive;
import com.web.heritage.web.api.resp.recommend.CMRecommendSearchDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/myreview")
@RequiredArgsConstructor

public class MyReviewController {

	private final MylistReviewDataSerive mylistReviewDataSerive;
	private final MyListReviewPlaceService myListReviewPlaceService;
	private final MyListReviewWriteDataService myListReviewWriteDataService; 
	private final MyListReviewWritePlaceService myListReviewWritePlaceService;
	
	@GetMapping("/data")
	public ResponseEntity<?> getSearch(@RequestParam String userId, String type,String sort,String searchName,int index){
		List<MyListReviewData> search = null;
		int size = -1;
		
		try {			
			search = mylistReviewDataSerive.getMyReviewData(userId, type, sort, searchName, index);
			size = mylistReviewDataSerive.getMyReviewDataCount(userId, type, sort, searchName);			
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRecommendSearchDto<>(size,"후기 검색 실패",search));
		}		
		return ResponseEntity.ok().body(new CMRecommendSearchDto<>(size,"후기 검색 성공",search));	
	}
	
	@GetMapping("/place")
	public ResponseEntity<?> getPlaceSearch(@RequestParam String userId, String type,String sort, String place, String searchName,int index){		
		List<MyListReviewPlaceData> search = null;
		int size = -1;
		
		try {
			search = myListReviewPlaceService.getMyReviewPlace(userId, type, sort, place, searchName, index);
			size = myListReviewPlaceService.getMyReviewPlaceCount(userId, type, sort, place, searchName);			
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRecommendSearchDto<>(size,"후기 검색 실패",search));
		}
		
		return ResponseEntity.ok().body(new CMRecommendSearchDto<>(size,"후기 검색 성공",search));	
	}
	
	@GetMapping("/data/view")
	public ResponseEntity<?> getDataView(@RequestParam int code){
		MyListReviewWriteData myListReviewWriteData = null;
		int size = -1;
		
		try {			
			myListReviewWriteData = myListReviewWriteDataService.getMyListDataView(code);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRecommendSearchDto<>(size,"후기 데이터 업데이트뷰 실패",myListReviewWriteData));
		}		
		return ResponseEntity.ok().body(new CMRecommendSearchDto<>(size,"후기 데이터 업데이트뷰 성공",myListReviewWriteData));	
	}
	
	@PostMapping("/data/update")
	public ResponseEntity<?> updateMyListData(@RequestParam String userId,String dataCode,String reviewCode, String reviewName, String reviewContent){		
		boolean result = false;
		int size = -1;
		
		try {
			result = myListReviewWriteDataService.updateMyListData(userId, dataCode, reviewCode, reviewName, reviewContent);	
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRecommendSearchDto<>(size,"후기 데이터 업데이트 실패",result));
		}
		
		return ResponseEntity.ok().body(new CMRecommendSearchDto<>(size,"후기 데이터 업데이트 성공",result));	
	}
	
	@PostMapping("/data/delete")
	public ResponseEntity<?> deleteMyListData(@RequestParam String userId,String dataCode,String reviewCode){		
		boolean result = false;
		int size = -1;
		
		try {
			result = myListReviewWriteDataService.deleteMyListData(userId, dataCode, reviewCode);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRecommendSearchDto<>(size,"후기 데이터 삭제 실패",result));
		}
		
		return ResponseEntity.ok().body(new CMRecommendSearchDto<>(size,"후기 데이터 삭제 성공",result));	
	}
	
	@GetMapping("/place/view")
	public ResponseEntity<?> getDataPlace(@RequestParam int code,String place){
		MyListReviewWritePlace myListReviewWritePlace = null;
		int size = -1;
		
		try {			
			myListReviewWritePlace = myListReviewWritePlaceService.getMyListPlaceView(code, place);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRecommendSearchDto<>(size,"후기 플레이스 업데이트뷰 실패",myListReviewWritePlace));
		}		
		return ResponseEntity.ok().body(new CMRecommendSearchDto<>(size,"후기 플레이스  업데이트뷰 성공",myListReviewWritePlace));	
	}
	
	@PostMapping("/place/update")
	public ResponseEntity<?> updateMyListPlace(@RequestParam String userId, int reviewCode, String dataCode, String placeId, String reviewName, String reviewContent){		
		boolean result = false;
		int size = -1;
		
		try {
			result = myListReviewWritePlaceService.updateMyListPlace(userId, reviewCode, dataCode, placeId, reviewName, reviewContent);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRecommendSearchDto<>(size,"후기 플레이스 업데이트 실패",result));
		}
		
		return ResponseEntity.ok().body(new CMRecommendSearchDto<>(size,"후기 플레이스 업데이트 성공",result));	
	}
	
	@PostMapping("/place/delete")
	public ResponseEntity<?> deleteMyListPlace(@RequestParam String userId, int reviewCode, String dataCode, String placeId){		
		boolean result = false;
		int size = -1;
		
		try {
			result = myListReviewWritePlaceService.deleteMyListPlace(userId, reviewCode, dataCode, placeId);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRecommendSearchDto<>(size,"후기 플레이스 삭제 실패",result));
		}
		
		return ResponseEntity.ok().body(new CMRecommendSearchDto<>(size,"후기 플레이스 삭제 성공",result));	
	}
}
