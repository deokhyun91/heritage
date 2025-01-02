package com.web.heritage.domain.login.auth;



import org.apache.ibatis.annotations.Mapper;





@Mapper
public interface UserRespository {
	public int save(User user) throws Exception;
	public User findUserByUsername(String username) throws Exception;
	public int set(User user) throws Exception;
	public int deleteUserInfo(String user_id) throws Exception;
	
	public int deleteDataRecommend(String user_id) throws Exception;
	public int deleteDataReview(String user_id) throws Exception;
	public int deletePlaceRecommend(String user_id) throws Exception;
	public int deletePlaceReview(String user_id) throws Exception;
}
