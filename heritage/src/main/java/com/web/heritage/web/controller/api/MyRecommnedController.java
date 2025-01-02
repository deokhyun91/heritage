package com.web.heritage.web.controller.api;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web.heritage.domain.mylist.MyListRecommendData;
import com.web.heritage.domain.mylist.MyListRecommendPlaceData;
import com.web.heritage.service.mylist.MyListRecommendPlaceService;
import com.web.heritage.service.mylist.MylistRecommendDataService;
import com.web.heritage.web.api.resp.CMRespDto;
import com.web.heritage.web.api.resp.recommend.CMRecommendSearchDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/myrecommend")
@RequiredArgsConstructor

public class MyRecommnedController {
	
	private final MylistRecommendDataService mylistRecommendDataService;
	private final MyListRecommendPlaceService myListRecommendPlaceService;
	
	@GetMapping("/data")
	public ResponseEntity<?> getSearch(@RequestParam String userName, String type, String sort, String searchName, int index){
		System.out.println("컨트롤러");
		List<MyListRecommendData> search = null;
		int size = -1;
		try {
			size = mylistRecommendDataService.getMyRecommendDataCount(userName, type, sort, searchName, index);
			search = mylistRecommendDataService.getMyRecommendData(userName, type, sort, searchName, index);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRecommendSearchDto<>(size,"추천목록 검색 실패",search));
		}
		
		return ResponseEntity.ok().body(new CMRecommendSearchDto<>(size,"추천목록 검색 성공",search));	
	}
	
	@GetMapping("/place")
	public ResponseEntity<?> getPlaceSearch(@RequestParam String userName, String type, String sort, String place, String searchName, int index){
		List<MyListRecommendPlaceData> search = null;
		int size = -1;
		try {
			size = myListRecommendPlaceService.getMyRecommendPlaceCount(userName, type, sort, place, searchName, index);
			search = myListRecommendPlaceService.getMyRecommendPlace(userName, type, sort, place, searchName, index);
			
			
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRecommendSearchDto<>(size,"추천목록 검색 실패",search));
		}
		
		return ResponseEntity.ok().body(new CMRecommendSearchDto<>(size,"추천목록 검색 성공",search));	
	}
	
	//삭제
		@DeleteMapping("/data/delete")
		public ResponseEntity<?> DeleteData(@RequestParam String recommendCode, String userName){
			System.out.println(recommendCode);
			boolean status = false;
		
			try {
				status = mylistRecommendDataService.deleteMyListRecommendData(recommendCode,userName);
			} catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.internalServerError().body(new CMRespDto<>(-1, "삭제 실패", status));
			}

			
			return ResponseEntity.ok().body(new CMRespDto<>(1, "삭제 성공", status));
		}
		
		@DeleteMapping("/place/delete")
		public ResponseEntity<?> Deleteplace(@RequestParam String recommendCode2, String userName){
			System.out.println(recommendCode2);
			boolean status = false;
		
			try {
				status = myListRecommendPlaceService.deleteMyListRecommendPlace(recommendCode2, userName);
			} catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.internalServerError().body(new CMRespDto<>(-1, "삭제 실패", status));
			}

			
			return ResponseEntity.ok().body(new CMRespDto<>(1, "삭제 성공", status));
		}
}
