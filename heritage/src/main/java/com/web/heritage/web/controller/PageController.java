package com.web.heritage.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller

public class PageController {
	@GetMapping({"/", "/heritage/main"})
	public String loadMain() {
		return "main";
	}
	
	@GetMapping("/heritage/map")
	public String loadMap() {
		return "map";
	}

	@GetMapping("/heritage/recommend")
	public String loadRecommend() {
		return "recommend";
	}
	
	@GetMapping("/heritage/reviewList")
	public String loadReviewList() {
		return "reviewList";
	}
	@GetMapping("/heritage/reviewView")
	public String loadReviewView() {
		return "reviewView";
	}
	@GetMapping("/heritage/reviewWrite")
	public String loadReviewWrite() {
		return "reviewWrite";
	}
	
	@GetMapping("/heritage/auth/login")
	public String loadSignin() {
		return "auth/login";
	}
	
	@GetMapping("/heritage/auth/join")
	public String loadSignup() {
		return "auth/join";
	}
	
	@GetMapping("/heritage/auth/userUpdate")
	public String userUpdate() {
		return "auth/userUpdate";
	}
	
	@GetMapping("/heritage/myPage")
	public String loadmyPage() {
		return "myPage";
	}
	
	@GetMapping("/heritage/myReviewList")
	public String myReviewListPage() {
		return "myReviewList";
	}
	
	@GetMapping("/heritage/myReviewWrite")
	public String myReviewWritePage() {
		return "myReviewWrite";
	}
	
	@GetMapping("/heritage/myRecommend")
	public String myRecommendListPage() {
		return "myRecommend";
	}
	
}
