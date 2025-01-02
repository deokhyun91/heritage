
let userId = null;


function getPrincipal() {
	let user = null;
	$.ajax({
		async: false,
		type : "get",
		url: "/heritage/principal",
		datetype: "json",
		success: (response) => {			
			user = response.data;		
			userId = user.user_id;
			console.log(user);
		},
		error: (error) => {
			console.log(error);
		}
	})
	return user;
}

function loadHeader(user){
	const authItems = document.querySelector(".login");
	const myPageBtn = document.querySelector(".myPageBtn");
	console.log(user);
	if(user == null){
		authItems.innerHTML = `
			<div id="google_translate_element"></div>
						
            <a href="/heritage/auth/login"><i class="fa fa-user-circle-o"></i> Login</a>
		`
		//user.user_id은 User class안에 ?
	}
	else{
		
			authItems.innerHTML = `
			<div id="google_translate_element"></div>
			<a href="/heritage/myPage" class="username"><i class="fa fa-user-circle-o"></i> ${user.user_id}</a>
            <a class="logout"><i class="fa fa-sign-out"></i> Logout</a>
		`
		myPageBtn.classList.add("btnShow");
		const logout = document.querySelector(".logout");
		
		// /logout이 어디부터 붙는지
		logout.onclick = () => {
			
			alert("로그아웃");
			location.replace("/logout");
		}
		
	}
}

let user  = getPrincipal();
loadHeader(user);

//이거 질문
function getUser(){
	return user;
}



