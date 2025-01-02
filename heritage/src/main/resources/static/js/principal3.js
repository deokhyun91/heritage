const userInfo3 = document.querySelectorAll('input');
const userSex3 = document.querySelector('select');
const updateBox = document.querySelector('.updateBox');
let checkUsernameFlag = true;
let user_code = user.user_code;


updateLoadUserInfo(user);
function updateLoadUserInfo(user){
	
	
	const gender = user.user_gender;
	if(gender === "남"){
		updateBox.innerHTML = `
		<p class="fs22">Update</p>
				
					
		<input type="text" name="name" placeholder="이름: ${user.user_name}" id="name" value="${user.user_name}">
		<select name="sex" id="" >
			<option value="">성별</option>
			<option value="남" selected>남자</option>
			<option value="여">여자</option>
		</select>
	
		<input type="text" name="email" placeholder="이메일: ${user.user_email}" value="${user.user_email}">
	
		<input type="text" name="phone" id="phone" placeholder="연락처: ${user.user_phon}" value="${user.user_phon}">
		
		<input type="text" name="username" id="username" placeholder="아이디: ${user.user_id}" value="${user.user_id}">
		
		<input type="text" name="password" placeholder="비밀번호(영문+숫자+특수문자 조합 8~16자)" >
	
		<button type="button" class="setBtn">수정하기</button><a href="javascript:window.history.back();" style="cursor: pointer;
    width: 90%;
    padding: 10px;
    border: 0;
    background-color: gray;
    transition: all 0.3s;
    color: #fff;
    border-radius: 20px;
    display: block;
    margin: 0 auto 20px;">취소하기</a>

	`
	}else if(gender === "여"){
		
		console.log("확인")
	
		updateBox.innerHTML = `
		<p class="fs22">Update</p>
				
					
		<input type="text" name="name" placeholder="이름: ${user.user_name}" id="name" value="${user.user_name}">
		<select name="sex" id="" >
			<option value="">성별</option>
			<option value="여" selected>여자</option>
			<option value="남" >남자</option>
			
		</select>
	
		<input type="text" name="email" placeholder="이메일: ${user.user_email}" value="${user.user_email}">
	
		<input type="text" name="phone" id="phone" placeholder="연락처: ${user.user_phon}" value="${user.user_phon}">
		
		<input type="text" name="username" id="username" placeholder="아이디: ${user.user_id}" value="${user.user_id}">
		
		<input type="text" name="password" placeholder="비밀번호(영문+숫자+특수문자 조합 8~16자)" >
	
		<button type="button" class="setBtn">수정하기</button><a href="javascript:window.history.back();" style="cursor: pointer;
    width: 90%;
    padding: 10px;
    border: 0;
    background-color: gray;
    transition: all 0.3s;
    color: #fff;
    border-radius: 20px;
    display: block;
    margin: 0 auto 20px;">취소하기</a>

	`
	
	
	}else{
		updateBox.innerHTML = `
		<p class="fs22">Update</p>
				
					
		<input type="text" name="name" placeholder="이름: ${user.user_name}" id="name" value="${user.user_name}">
		<select name="sex" id="" >
			<option value="">성별</option>
			<option value="남" >남자</option>
			<option value="여" >여자</option>
		</select>
	
		<input type="text" name="email" placeholder="이메일: ${user.user_email}" >
	
		<input type="text" name="phone" id="phone" placeholder="연락처: ${user.user_phon}" >
		
		<input type="text" name="username" id="username" placeholder="아이디: ${user.user_id}" >
		
		<input type="text" name="password" placeholder="비밀번호(영문+숫자+특수문자 조합 8~16자)" >
	
		<button type="button" class="setBtn">수정하기</button>

	`
	}
	
}
const userInfo4 = document.querySelectorAll('input');
const userSex4 = document.querySelector('select');
console.log(userInfo4[0].placeholder);
/*아이디체크
userInfo4[3].onblur = () => {
	
$.ajax({
         type: "get",
         url: "/heritage/join/validation/username",
         data: {username : userInfo4[3].value},
         async : false, // false 동기
         dataType: "json",
         success: (response) => {
             checkUsernameFlag = response.data;
            
             if(checkUsernameFlag){
 				alert("사용할 수 있는 아이디입니다.");
 			}else{
 				alert("이미 사용중인 아이디입니다.");
 			}
         
         },
         error : (error) => {
             if(error.status == 400){
 				alert(JSON.stringify(error.responseJSON.data));
 			}else{
 				console.log("요청실패");
 				console.log(error);
 			}
         }
     })
    
 }
*/

const setBtn = document.querySelector('.setBtn');

if(user.user_name == userInfo4[0].value && user.user_email == userInfo4[1].value && user.user_phon == userInfo4[2].value && user.user_gender === userSex4.value &&  user.user_id == userInfo4[3].value){
	setBtn.classList.add('setBtnNone');

	
}else{
	setBtn.classList.remove('setBtnNone');
}

for(let i = 0; i < userInfo4.length; i++){
	userInfo4[i].addEventListener("change", function(e) {
		console.log("onchange", e.target.value) 
			//값이 바뀔때마다 찍히지 않음. 
			//input바깥을 클릭하면 찍힘
			if(user.user_name == userInfo4[0].value && user.user_email == userInfo4[1].value && user.user_phon == userInfo4[2].value && user.user_gender === userSex4.value &&  user.user_id == userInfo4[3].value){
				setBtn.classList.add('setBtnNone');
			
				
			}else{
				setBtn.classList.remove('setBtnNone');
			}
		
	})
}

userSex4.addEventListener("change", function(e) {
    console.log("onchange select", e.target.value)
		//값이 바뀔때마다 찍힘
		setBtn.classList.remove('setBtnNone');
});

setBtn.onclick = () => {
	


	let setData = {
		usercode : user_code,
		name : userInfo4[0].value,
		sex :  userSex4.value,   
		email : userInfo4[1].value,
		phone : userInfo4[2].value,
		username : userInfo4[3].value,
		password : userInfo4[4].value,
		"checkUsernameFlag" : checkUsernameFlag
	}
	console.log(setData);
	
	

	
	

	$.ajax({
		type: "put",
		url: `/heritage/principal/setUser`,
		contentType: "application/Json",
		data: JSON.stringify(setData),
		async : false, // false 동기
		dataType: "json",
		success: (response) => { //CMRespDto인지?
			alert('수정되었습니다.');
	
			location.replace("/logout");
		
		
			
		},
		error : (error) => { //error 변수는 어디서 담기는지
		   if(error.status == 400){
			   alert(JSON.stringify(error.responseJSON.data));
			   console.log("요청실패");
		   }else{
			   console.log("요청실패");
			   console.log(error);
		   }
	   }
	})
}






