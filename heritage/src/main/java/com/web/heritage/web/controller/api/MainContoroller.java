package com.web.heritage.web.controller.api;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web.heritage.domain.main.MainSearh;
import com.web.heritage.domain.main.MainView;
import com.web.heritage.service.main.MainSearchService;
import com.web.heritage.service.main.MainViewService;
import com.web.heritage.web.api.resp.main.CMMainSearchDto;
import com.web.heritage.web.api.resp.main.CMMainViewDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/main")
@RequiredArgsConstructor

public class MainContoroller {
	private final MainViewService mainViewService;
	private final MainSearchService mainSearchService;
	
	@GetMapping("/view/recommend")
	public ResponseEntity<?> getViewRecommend(){
		System.out.println("컨트롤러단");
		List<MainView> mainView = null;
		int size = 0;
	
		try {
			mainView = 	mainViewService.getMainRecommend();
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMMainViewDto<>("메인뷰 검색 실패",mainView));
		}		
		return ResponseEntity.ok().body(new CMMainViewDto<>("메인뷰 검색 성공",mainView));	
	}
	
	@GetMapping("/view/review")
	public ResponseEntity<?> getViewReview(){
		List<MainView> mainView = null;
		int size = 0;
	
		try {
			mainView = 	mainViewService.getMainReview();
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMMainViewDto<>("메인뷰 검색 실패",mainView));
		}		
		return ResponseEntity.ok().body(new CMMainViewDto<>("메인뷰 검색 성공",mainView));	
	}
	
	@GetMapping("/search/address")
	public ResponseEntity<?> getSearchAddress(@RequestParam String searchName){
		List<MainSearh> address = null;		
		
		try {
			address = mainSearchService.getMainSearchAddress(searchName);
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMMainSearchDto<>("메인 주소 검색 실패",address));
		}		
		return ResponseEntity.ok().body(new CMMainSearchDto<>("메인 주소 검색 성공",address));	
	}
	
	@GetMapping("/search/name")
	public ResponseEntity<?> getSearchName(@RequestParam String searchName){
		List<MainSearh> name = null;		
		
		try {
			name = mainSearchService.getMainSearchName(searchName);
		} 
		catch (Exception e) {				
			e.printStackTrace();
			return ResponseEntity.internalServerError().body(new CMMainSearchDto<>("메인 이름 검색 실패",name));
		}		
		return ResponseEntity.ok().body(new CMMainSearchDto<>("메인 이름 검색 성공",name));	
	}
}
