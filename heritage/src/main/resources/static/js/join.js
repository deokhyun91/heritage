const userInfo = document.querySelectorAll('input');
const userSex = document.querySelector('select');
const joinBtn = document.querySelector('.joinBtn2');
let checkUsernameFlag = false;

//아이디체크
userInfo[3].onblur = () => {
	
    $.ajax({
        type: "get",
        url: "/heritage/join/validation/username",
        data: {username : userInfo[3].value},
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

//로그인
joinBtn.onclick = () => {
	
   let signupData = {
            name : userInfo[0].value,
			sex :  userSex.value,   
            email : userInfo[1].value,
            phone : userInfo[2].value,
            username : userInfo[3].value,
            password : userInfo[4].value,
            "checkUsernameFlag" : checkUsernameFlag
   }
   console.log(signupData);
   $.ajax({
        type: "post",
        url: "/heritage/auth/join",
        contentType: "application/Json",
        data: JSON.stringify(signupData),
        async : false, // false 동기
        dataType: "json",
        success: (response) => {
           if(response.data){
			   	
			   	alert('회원가입되었습니다.');
				location.replace("/heritage/auth/login");
			
		   }
           
        },
         error : (error) => {
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