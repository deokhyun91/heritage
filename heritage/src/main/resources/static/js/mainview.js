let mainSearchMenu = document.querySelector(".main-search-menu");
let mainSearch = document.querySelector(".mainSearch");

let viewReviewList = document.querySelector('#galleryList-review');
let viewRecommendList = document.querySelector('#galleryList-recommend');

let searchResultAddress = document.querySelector('.msm-box1-result');
let searchResultAddressLi;

let searchResultName = document.querySelector('.msm-box2-result');
let searchResultNameLi;
/*
mainSearch.addEventListener("focus", () => {
	
	mainSearchMenu.classList.add('view')
});
  
mainSearch.addEventListener("blur", () => {
	mainSearchMenu.classList.remove('view')
});*/
mainSearch.onkeyup = (e) => {		
	searchAddress(mainSearch.value);
	searchName(mainSearch.value);
	
	if(mainSearch.value==""){
		mainSearchMenu.classList.remove('view')
	}
	else{
		mainSearchMenu.classList.add('view')
	}
}


viewRecommend();
viewReview();

function viewRecommend(){	
	
    $.ajax({
        type: "GET",
        async:false,
        url: `/api/v1/main/view/recommend`,      		  	
        success: (Response) =>{  	
			recommend(Response.data);
        },
        error:errorMessage
    })
}


function viewReview(){	
    $.ajax({
        type: "GET",
        async:false,
        url: `/api/v1/main/view/review`,        		  	
        success: (Response) =>{  	
			review(Response.data);
        },
        error:errorMessage
    })
}

function searchAddress(searchName){	
    $.ajax({
        type: "GET",
        async:false,
        url: `/api/v1/main/search/address`,    
        data: {
			searchName : searchName
        },		    		  	
        success: (Response) =>{  
			searchDataAddress(Response.data);			
        },
        error:errorMessage
    })
}

function searchName(searchName){	
    $.ajax({
        type: "GET",
        async:false,
        url: `/api/v1/main/search/name`, 
        data: {
			searchName : searchName
        },		       		  	
        success: (Response) =>{  	
			searchDataName(Response.data);			
        },
        error:errorMessage
    })
}

function errorMessage(request, status, error){
	alert("요청실패");
	console.log(request.status);
	console.log(request.respnseText);
	console.log(error);
}

function recommend(data){	
	
	for(let i=0;i<data.length;i++){
		viewRecommendList.innerHTML += createRecommend(data[i].data_img,data[i].data_code,data[i].data_koname,data[i].data_dynasty,data[i].data_address,data[i].cnt);
	}
}

function review(data){	
	for(let i=0;i<data.length;i++){
		viewReviewList.innerHTML += createReview(data[i].data_img,data[i].data_code,data[i].data_koname,data[i].data_dynasty,data[i].data_address,data[i].cnt);
	}
}

function createRecommend(img,code,name,dynasty,address,cnt){
	let li = `
			<li class="galleryList-con">
                <div class="galleryList1">
                    <img src=${img} alt="">                  
                </div>
                <div class="galleryList2">
                    <h2 class=" mt10"><a href="https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=${code}" class="fs18" target="_blank">${name}</a></h2>
                    <p>${dynasty}(1398)</p>
                    <p>${address}</p>
                    <div class="infoList-box" style="right: 0;">
                        <p><i class="fa fa-heart" style="color: orangered !important;"></i><span class="heartNum">${cnt}</span></p>                       
                    </div>
                </div>
            </li>
	`
	return li;
}

function createReview(img,code,name,dynasty,address,cnt){
	let li = `
			<li class="galleryList-con">
                <div class="galleryList1">
                    <img src="${img}" alt="">                    
                </div>
                <div class="galleryList2">
                    <h2 class=" mt10"><a href="https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=${code}" class="fs18" target="_blank">${name}</a></h2>
                    <p>${dynasty}(1398)</p>
                    <p>${address}</p>
                    <div class="infoList-box" style="right: 0;">                        
                        <p class="viewMore"><button><i class="fa fa-commenting"></i><span class="reviewNum">${cnt}</span></button></p>                                                       
                    </div>
                </div>
            </li>
	`
	return li;
}

function searchDataAddress(data){	
	searchResultAddress.innerHTML = null;	
	for(let i=0;i<data.length;i++){
		searchResultAddress.innerHTML += createSearch(data[i].data_address);
	}
	
	try{
		searchResultAddressLi = document.querySelectorAll(".msm-box1-result li");
	}
	catch{		
	}
	
	for(let i=0;i<searchResultAddressLi.length;i++){	
		searchResultAddressLi[i].onclick = () => {						
			location.href = `http://localhost:8000/heritage/map?category=mainaddress&type=address&sort=all&searchName=${searchResultAddressLi[i].innerText}&index=0`;	
		};
	}		
}

function searchDataName(data){	
	searchResultName.innerHTML = null;
	for(let i=0;i<data.length;i++){
		searchResultName.innerHTML += createSearch(data[i].data_koname);
	}
	
	try{
		searchResultNameLi = document.querySelectorAll(".msm-box2-result li");
	}
	catch{		
	}
	
	for(let i=0;i<searchResultNameLi.length;i++){	
		searchResultNameLi[i].onclick = () => {						
			location.href = `http://localhost:8000/heritage/map?category=mainname&type=name&sort=all&searchName=${searchResultNameLi[i].innerText}&index=0`;	
		};
	}	
}

function createSearch(text){
	let li = `
				<li>${text}</li>	 
			`
	return li;
}                   
//<span class="keyWord">[${name}]</span>