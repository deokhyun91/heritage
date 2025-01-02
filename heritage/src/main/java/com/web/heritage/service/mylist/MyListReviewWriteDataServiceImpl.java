package com.web.heritage.service.mylist;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.web.heritage.domain.mylist.MyListReviewWriteData;
import com.web.heritage.domain.mylist.MyListReviewWriteDataReposity;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service

public class MyListReviewWriteDataServiceImpl implements MyListReviewWriteDataService{
	private final MyListReviewWriteDataReposity myListReviewWriteDataReposity;
	
	@Override
	public MyListReviewWriteData getMyListDataView(int code) throws Exception {		
		return myListReviewWriteDataReposity.getMyListDataView(code);
	}	
	
	@Override
	public boolean updateMyListData(String userId, String dataCode, String reviewCode, String reviewName, String reviewContent)throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("userId", userId);	
		map.put("dataCode", dataCode);		
		map.put("reviewCode", reviewCode);	
		map.put("reviewName", reviewName);
		map.put("reviewContent", reviewContent);	
				
		return myListReviewWriteDataReposity.updateMyListData(map);
	}

	@Override
	public boolean deleteMyListData(String userId, String dataCode, String reviewCode) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("userId", userId);	
		map.put("dataCode", dataCode);		
		map.put("reviewCode", reviewCode);	
		
		return myListReviewWriteDataReposity.deleteMyListData(map);
	}
}
