const userDeleteBtn = document.querySelector(".userDeleteBtn");


let user_id = user.user_id;

userDeleteBtn.onclick = () => {
	deletePrincipal(user_id);
	
}


function deletePrincipal(user_id) {
	if (!confirm("회원탈퇴 하시겠습니까?")) {
		alert("취소(아니오)를 누르셨습니다.");
	} else {
		alert("회원탈퇴 되었습니다.");
		console.log(user_id)
		$.ajax({
			type : "delete",
			url: `/heritage/principal/${user_id}`,
			async: false,
			datetype: "json",
			success: (response) => {
				if(response.data){
					
					location.replace("/logout")
				}
			},
			error: (error) => {
				console.log(error);
			}
		})
	}
}

function loadUserInfo(user){

	const userInfoWrap = document.querySelector(".userInfoWrap");
	const gender = user.user_gender;
	console.log(gender);

	console.log("로드확인");


	if(gender === "여"){
	//mypage 유저 정보
	userInfoWrap.innerHTML = `
	<li><img src="/static/img/profileW.png" alt=""></li>
	<li><strong>아이디 :</strong> ${user.user_id}</li>
	<li><strong>이름 :</strong> ${user.user_name}</li>
	<li><strong>연락처 :</strong> ${user.user_phon}</li>
	<li><strong>이메일 :</strong> ${user.user_email}</li>
	<li><strong>성별 :</strong> ${user.user_gender}</li>

	`
	}else{
	//mypage 유저 정보
	userInfoWrap.innerHTML = `
	<li><img src="/static/img/profileM.png" alt=""></li>
	<li><strong>아이디 :</strong> ${user.user_id}</li>
	<li><strong>이름 :</strong> ${user.user_name}</li>
	<li><strong>연락처 :</strong> ${user.user_phon}</li>
	<li><strong>이메일 :</strong> ${user.user_email}</li>
	<li><strong>성별 :</strong> ${user.user_gender}</li>

	`
	}
}



loadUserInfo(user);
// updateUserInfo(user);


