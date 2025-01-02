let mainMap = document.querySelector('.map');
mainMap,mapOption = { 
    center: new kakao.maps.LatLng(37.5599277853801,126.975359779271),
    level: 7
};

let map = new kakao.maps.Map(mainMap, mapOption); 

let mainInfo = document.querySelector('.info');
let mapWrap = document.querySelector('.map_wrap');
let mapCategory = document.querySelector('#map-category');
let places = new kakao.maps.services.Places(map);

let tabBtn1 = document.querySelector(".tabBtn-1");
let tabBtn2 = document.querySelector(".tabBtn-2");
let tabBtn3 = document.querySelector(".tabBtn-3");
let tabBtn4 = document.querySelector(".tabBtn-4");

let info = document.querySelector(".info");
let board = document.querySelector(".board");
let reviewData = document.querySelector(".reviewData");
let reviewPlace = document.querySelector(".reviewPlace");
let mapMenu = document.querySelector(".mapMenu");

let conRe = document.querySelectorAll(".conRe");
let tabBtn = document.querySelectorAll(".tabBtn li");
let infoDiv = document.querySelectorAll(".info > div");
let infoHeart = document.querySelectorAll(".infoHeart");

let infoTableList = document.querySelector(".info-list");
let infoTableListLi;
let infoRecommend;
let infoReivew;

let infomarker;
let infomarkerCheck;
let infoWindow;

let listCount = document.querySelector(".listCount");
let listCountLi;
let clickPoint = -1;;
let dataCode;
let listBack;
let listFront;
let markerSrc = "/static/img/info.png";
let markerSize = new kakao.maps.Size(32, 32);
let markerImage = new kakao.maps.MarkerImage(markerSrc, markerSize); 
	
let markerCheckSrc = "/static/img/infoCheck.png";
let markerCheckSize = new kakao.maps.Size(32,32);
let markerCheckImage = new kakao.maps.MarkerImage(markerCheckSrc, markerCheckSize); 

let leftBoard = document.querySelector(".left-board");
let categoryList = document.querySelector(".category-list");
let categoryListLi;
let placeRecommend;
let placeReview;

let categoryMarker;
let categoryWindow;
let categoryPoint = -1;
let placeId;

let categoryFD6 = document.querySelector('#category-FD6');//음식점
let categoryCE7 = document.querySelector('#category-CE7');//카페
let categoryCS2 = document.querySelector('#category-CS2');//편의점
let categoryOL7 = document.querySelector('#category-OL7');//주유소
let categoryPK6 = document.querySelector('#category-PK6');//주차장
let categoryAD5 = document.querySelector('#category-AD5');//숙소

let searchText = document.querySelector('#search-text');
let searchOp = document.querySelector('.search-op');
let searchOpData = searchOp.options[searchOp.selectedIndex].value;

let boardSortOp = document.querySelector('#board-sort');
let boardSortOpData = boardSortOp.options[boardSortOp.selectedIndex].value;

let searBu = document.querySelector('.sear-bu');
let resetBnt = document.querySelector('.resetBnt');

let searchDetailAddress = document.querySelector('#search-detail-op1');
let searchDetailDivide = document.querySelector('#search-detail-op2');
let searchDetailPeriod = document.querySelector('#search-detail-op3');
let searchDetailGroup = document.querySelector('#search-detail-op4');

let addressData = searchDetailAddress.options[searchDetailAddress.selectedIndex].value;
let divideData = searchDetailDivide.options[searchDetailDivide.selectedIndex].value;
let periodData = searchDetailPeriod.options[searchDetailPeriod.selectedIndex].value;
let groupData = searchDetailGroup.options[searchDetailGroup.selectedIndex].value;
let optionIndex;
let optionSort;

let inputSort;

let inputIndex;
let serchSort;

let categorySelect;
let loadPage = location.search;
let setParam;

let dataCheck;
let userRecommendDataList;
let userRecommendDataCheck;
let userRecommendPlaceList;
let userRecommendPlaceCheck;
let saveIndex;

tabBtn2.style.display = 'none'; 	
tabBtn3.style.display = 'none'; 	
tabBtn4.style.display = 'none'; 	
mapMenu.style.display = 'none'; 	

for(let i = 0; i < 4; i++){
    tabBtn[i].onclick = () => {
        tabBtn1.classList.remove('tabBtnOn');
        tabBtn2.classList.remove('tabBtnOn');
        tabBtn3.classList.remove('tabBtnOn');
        tabBtn4.classList.remove('tabBtnOn');
        
        info.classList.remove('block');
        board.classList.remove('block');
        reviewData.classList.remove('block');   
        reviewPlace.classList.remove('block');   
            
		conRe[i].classList.add('block');		     
        tabBtn[i].classList.add('tabBtnOn');
        
        if(i==0 && clickPoint!=-1){
			infoTableListLi[clickPoint].click();	
			categoryMarkerClose();
			categoryWindowClose();	
			categoryList.innerHTML = null;
			categoryPoint = -1;		
			mapMenu.style.display = 'none'; 
			tabBtn4.style.display = 'none'; 				
		}
		else if(i==1 && clickPoint!=-1 && categoryPoint == -1){		
			mapMenu.style.display = 'inline-block';	
			categoryFD6.click();				
			leftBoard.scrollTop = 0;				
		}
		else if(i==1 && clickPoint!=-1 && categoryPoint != -1){
			mapMenu.style.display = 'inline-block';		
			categoryListLi[categoryPoint].click();				
		}
		else if(i==2 && clickPoint!=-1){
			searchReviewData(dataCode);
		}
		else if(i==3 && clickPoint!=-1 && categoryPoint!= -1){				
			searchReviewPlace(placeId);
		}
    }
}

for(let i = 0; i < infoDiv.length; i++){
    infoHeart[i].onclick = () => {
        infoHeart[i].classList.toggle('infoHeartOn');
    }
}

if(user!=null){
	userRecommendData(user.user_id);
	userRecommendDataCheck = [];
	
	userRecommendPlace(user.user_id);
	userRecommendPlaceCheck = [];
}

if(loadPage==""){	
	searchText.value = "서울";
	categorySelect = "data";	
	search("name","all","서울",0);	
}
else{
	setParam = getParams();		
	categorySelect = setParam.category;

	for(let i=0;i<boardSortOp.options.length;i++){	
		if(setParam.sort == boardSortOp.options[i].value){			
			boardSortOp.options.selectedIndex = i;		
			boardSortOpData = boardSortOp.options[i].value;
			break;		
		}
	}
	
	if(categorySelect=="data"){
		searchText.value = setParam.searchName;
		
		for(let i=0;i<searchOp.options.length;i++){	
			if(setParam.type == searchOp.options[i].value){			
				searchOp.options.selectedIndex = i;		
				searchOpData = searchOp.options[i].value;
				break;		
			}
		}		
		search(setParam.type,setParam.sort,setParam.searchName,setParam.index);
	}
	else if(categorySelect=="option"){
		for(let i=0;i<searchDetailAddress.options.length;i++){	
			if(setParam.address == searchDetailAddress.options[i].value){			
				searchDetailAddress.options.selectedIndex = i;		
				addressData = searchDetailAddress.options[i].value;
				break;		
			}
		}
		
		for(let i=0;i<searchDetailDivide.options.length;i++){	
			if(setParam.divide == searchDetailDivide.options[i].value){			
				searchDetailDivide.options.selectedIndex = i;		
				divideData = searchDetailDivide.options[i].value;
				break;		
			}
		}
		
		for(let i=0;i<searchDetailPeriod.options.length;i++){	
			if(setParam.period == searchDetailPeriod.options[i].value){			
				searchDetailPeriod.options.selectedIndex = i;		
				periodData = searchDetailPeriod.options[i].value;
				break;		
			}
		}
		
		for(let i=0;i<searchDetailGroup.options.length;i++){	
			if(setParam.group == searchDetailGroup.options[i].value){			
				searchDetailGroup.options.selectedIndex = i;		
				groupData = searchDetailGroup.options[i].value;
				break;		
			}
		}
		
		searchOption(setParam.sort,setParam.address,setParam.divide,setParam.period,setParam.group,setParam.index);
	}
	else if(categorySelect=="mainname"){
		searchText.value = setParam.searchName;
	
		for(let i=0;i<searchOp.options.length;i++){	
			if(setParam.type == searchOp.options[i].value){			
				searchOp.options.selectedIndex = i;		
				searchOpData = searchOp.options[i].value;
				break;		
			}
		}		
		search("mainname",setParam.sort,setParam.searchName,setParam.index);
	}	
	else if(categorySelect=="mainaddress"){
		searchText.value = setParam.searchName;
		
		for(let i=0;i<searchOp.options.length;i++){	
			if(setParam.type == searchOp.options[i].value){			
				searchOp.options.selectedIndex = i;		
				searchOpData = searchOp.options[i].value;
				break;		
			}
		}		
		search("mainaddress",setParam.sort,setParam.searchName,setParam.index);
	}	
}

searchText.onkeyup = (e) => {	
	if(e.key=="Enter"){		
		if(searchText.value==""){
			alert("검색어를 입력하세요.");
		}
		else{
			location.href = `http://localhost:8000/heritage/map?category=data&type=${searchOpData}&sort=${boardSortOpData}&searchName=${searchText.value}&index=0`;	
		}	
	}
}

searchText.onclick = () => {			
	searchText.value = "";
}

searBu.onclick = () => {	
	if(searchText.value==""){
		alert("검색어를 입력하세요.");
	}
	else{		
		location.href = `http://localhost:8000/heritage/map?category=data&type=${searchOpData}&sort=${boardSortOpData}&searchName=${searchText.value}&index=0`;
	}
}

resetBnt.onclick = () => {
	location.href = `http://localhost:8000/heritage/map`;	
}

searchOp.onclick = () => {			
	searchOpData = searchOp.options[searchOp.selectedIndex].value;	
}

boardSortOp.onclick = () => {	
	if(serchSort == 1){		
		if(boardSortOp.options[boardSortOp.selectedIndex].value != boardSortOpData){
			boardSortOpData = boardSortOp.options[boardSortOp.selectedIndex].value;	
			location.href = `http://localhost:8000/heritage/map?category=data&type=${searchOpData}&sort=${boardSortOpData}&searchName=${searchText.value}&index=0`;				
		}
	}	
	if(serchSort == 2){
		if(boardSortOp.options[boardSortOp.selectedIndex].value != boardSortOpData){
			boardSortOpData = boardSortOp.options[boardSortOp.selectedIndex].value;	
			location.href = `http://localhost:8000/heritage/map?category=option&sort=${boardSortOpData}&address=${addressData}&divide=${divideData}&period=${periodData}&group=${groupData}&index=0`;		
		}		
	}
}

searchDetailAddress.onclick = () => {
	if(searchDetailAddress.options[searchDetailAddress.selectedIndex].value != addressData){	
		addressData = searchDetailAddress.options[searchDetailAddress.selectedIndex].value;	
		location.href = `http://localhost:8000/heritage/map?category=option&sort=${boardSortOpData}&address=${addressData}&divide=${divideData}&period=${periodData}&group=${groupData}&index=0`;
	}	
}

searchDetailDivide.onclick = () => {
	if(searchDetailDivide.options[searchDetailDivide.selectedIndex].value != divideData){	
		divideData = searchDetailDivide.options[searchDetailDivide.selectedIndex].value;	
		location.href = `http://localhost:8000/heritage/map?category=option&sort=${boardSortOpData}&address=${addressData}&divide=${divideData}&period=${periodData}&group=${groupData}&index=0`;	
	}	
}

searchDetailPeriod.onclick = () => {
	if(searchDetailPeriod.options[searchDetailPeriod.selectedIndex].value != periodData){	
		periodData = searchDetailPeriod.options[searchDetailPeriod.selectedIndex].value;	
		location.href = `http://localhost:8000/heritage/map?category=option&sort=${boardSortOpData}&address=${addressData}&divide=${divideData}&period=${periodData}&group=${groupData}&index=0`;		
	}	
}

searchDetailGroup.onclick = () => {			
	if(searchDetailGroup.options[searchDetailGroup.selectedIndex].value != groupData){		
		groupData = searchDetailGroup.options[searchDetailGroup.selectedIndex].value;
		location.href = `http://localhost:8000/heritage/map?category=option&sort=${boardSortOpData}&address=${addressData}&divide=${divideData}&period=${periodData}&group=${groupData}&index=0`;	
	}	
}

categoryFD6.onclick = () => {	
	categoryClose();
	categoryColorReset();
	categoryFD6.style.backgroundColor = "#fad8d8";		
	searchCategory("food",dataCode);	
}

categoryCE7.onclick = () => {	
	categoryClose();
	categoryColorReset();
	categoryCE7.style.backgroundColor = "#fad8d8";		
	searchCategory("cafe",dataCode);	
}

categoryCS2.onclick = () => {	
	categoryClose();
	categoryColorReset();
	categoryCS2.style.backgroundColor = "#fad8d8";		
	searchCategory("store",dataCode);	
}

categoryOL7.onclick = () => {	
	categoryClose();
	categoryColorReset();
	categoryOL7.style.backgroundColor = "#fad8d8";		
	searchCategory("gas",dataCode);	
}

categoryPK6.onclick = () => {	
	categoryClose();
	categoryColorReset();
	categoryPK6.style.backgroundColor = "#fad8d8";		
	searchCategory("parking",dataCode);	
}

categoryAD5.onclick = () => {	
	categoryClose();
	categoryColorReset();
	categoryAD5.style.backgroundColor = "#fad8d8";		
	searchCategory("hotel",dataCode);	
}

function getParams() {   
    let param = new Array(); 
    let url = decodeURIComponent(location.href);   
    url = decodeURIComponent(url); 

    let params;
    params = url.substring( url.indexOf('?')+1, url.length );   
    params = params.split("&");
 
    let size = params.length;
    let key, value;
    for(let i=0;i<size;i++) {
        key = params[i].split("=")[0]; 
        value = params[i].split("=")[1];
 
        param[key] = value;
    } 
    return param;
}

function search(type,sort,searchName,index){	
    $.ajax({
        type: "GET",
        async:false,
        url: `/api/v1/map/search`,           
        data: {
			type : type,
			sort : sort,
            searchName : searchName,
			index : index
        },			  	
        success: (Response) =>{
			serchSort = 1;	
			saveIndex = index;
			getInfoTableList(Response.data,Response.size,index);          
        },
        error:errorMessage
    })
}

function searchOption(sort,address,divide,period,group,index){
    $.ajax({
        type: "GET",
        async:false,
        url: `/api/v1/map/search/option`,       
        data:{			
			sort : sort,
            address :address,
            divide: divide,
            period : period,
            group : group,
            index : index
        },
        success: (Response) =>{
			serchSort = 2;	
			saveIndex = index;				
			getInfoTableList(Response.data,Response.size,index);          
        },
        error:errorMessage
    })
}

function searchCategory(category,dataCode){
    $.ajax({
        type: "GET",
        async:false,
        url: `/api/v1/map/place/${category}`,      
        data:{
            dataCode : dataCode
        },
        success: (Response) =>{    		 
             categoryInfo(category,Response.data);
        },
        error:errorMessage
    })
}


function searchReviewData(dataCode){	
    $.ajax({
        type: "GET",
        async:false,
        url: `/api/v1/map/review/data`,             
        data: {
            dataCode : dataCode			
        },			  	
        success: (Response) =>{  	
			reviewInfoData(Response.data);		          
        },
        error:errorMessage
    })
}

function searchReviewPlace(placeId){	
    $.ajax({
        type: "GET",
        async:false,
        url: `/api/v1/map/review/place`,          
        data: {
            placeId : placeId			
        },			  	
        success: (Response) =>{  	
			reviewInfoPlace(Response.data);		          
        },
        error:errorMessage
    })
}

function userRecommendData(id){	
    $.ajax({
        type: "GET",
        async:false,
        url: `/api/v1/map/user/recommed/data`,          
        data: {
            id : id			
        },			  	
        success: (Response) =>{  	
			userRecommendDataList = Response.data;
        },
        error:errorMessage
    })
}

function userRecommendDataSave(id,dataCode){	
    $.ajax({
        type: "POST",
        async:false,
        url: `/api/v1/map/user/recommed/data/save`,          
        data: {
            id : id,
            dataCode : dataCode
        },			  	
        success: (Response) =>{  	
			//console.log(Response.data);
        },
        error:errorMessage
    })
}

function userRecommendDataDelete(id,dataCode,recommendCode){	
    $.ajax({
        type: "POST",
        async:false,
        url: `/api/v1/map/user/recommed/data/delete`,          
        data: {
            id : id,
            dataCode : dataCode,
            recommendCode : recommendCode
        },			  	
        success: (Response) =>{  	
			//console.log(Response.data);
        },
        error:errorMessage
    })
}

function userRecommendPlaceSave(id,placeId){	
    $.ajax({
        type: "POST",
        async:false,
        url: `/api/v1/map/user/recommed/place/save`,          
        data: {
            id : id,
            placeId : placeId
        },			  	
        success: (Response) =>{  	
			//console.log(Response.data);
        },
        error:errorMessage
    })
}

function userRecommendPlaceDelete(id,placeId,recommendCode){	
    $.ajax({
        type: "POST",
        async:false,
        url: `/api/v1/map/user/recommed/place/delete`,          
        data: {
            id : id,
            placeId : placeId,
            recommendCode : recommendCode
        },			  	
        success: (Response) =>{  	
			//console.log(Response.data);
        },
        error:errorMessage
    })
}

function userRecommendPlace(id){	
    $.ajax({
        type: "GET",
        async:false,
        url: `/api/v1/map/user/recommed/place`,          
        data: {
            id : id			
        },			  	
        success: (Response) =>{  
			userRecommendPlaceList	= Response.data;		
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
		
function getInfoTableList(data,size,index){	
	if(data.length>0){	
		let indexSize = Math.floor(size/20);
		let indexRemainder = size % 20;
		let indexBackFront;
				
		infoTableList.innerHTML = null;
		infomarker = [];
		infomarkerCheck = [];
		infoWindow = [];
				
		if(indexRemainder > 0){
			indexSize = indexSize+1;
		}
				
		for(let i=0;i<data.length;i++){				
			infoTableList.innerHTML += createInfo(
				data[i].data_img,
				data[i].data_koname,
				data[i].data_divide,
				data[i].data_dynasty,
				data[i].data_address,
				data[i].data_code,
				data[i].recommend_cnt,
				data[i].review_cnt);		
		}
		
		try{
			infoTableListLi = document.querySelectorAll(".info-list li");
		}
		catch{		
		}
		
		try{
			infoRecommend = document.querySelectorAll("#data-recommend-heart");					
		}
		catch{		
		}
		
		try{
			infoReivew = document.querySelectorAll("#data-review");					
		}
		catch{
		}
	
		for(let i=0;i<infoTableListLi.length;i++){
			
			infomarker.push(
				new kakao.maps.Marker({
		        	map: map,
		        	image : markerImage,
		        	position: new kakao.maps.LatLng(data[i].data_pointy, data[i].data_pointx)
				})				
			);
			
			infomarkerCheck.push(
				new kakao.maps.Marker({
		        	map: map,
		        	image : markerCheckImage,
		        	position: new kakao.maps.LatLng(data[i].data_pointy, data[i].data_pointx)
				})
			);
			
			infoWindow.push(
				new kakao.maps.InfoWindow({
			    	map: map, 
					position: new kakao.maps.LatLng(data[i].data_pointy, data[i].data_pointx),				
			    	content : `<div class="mapName">
									<h2>${data[i].data_koname}</h2>	
								</div>`
				})
			);		
		}
		
		infoWindowClose();
		infomarkerCheckClose();
				
		for(let i=0;i<data.length;i++){		
			
			infoTableListLi[i].onclick = () => {
				clickPoint = i;		
				
				leftBoard.scrollTop = i*210.7;
							
				tabBtn2.style.display = 'inline-block'; 	
				tabBtn3.style.display = 'inline-block'; 
								
				dataCode = data[i].data_code;					
				infoClose();			
				categoryClose();				
				
				map.setCenter(new kakao.maps.LatLng(data[i].data_pointy, data[i].data_pointx));	 	
				map.setLevel(4);
				makerCheckReset(i);	
							
				infoTableListLi[i].style.backgroundColor = "#eff7ff";	
				infoWindow[i].open(map ,infomarker[i]);					
			};
			
			infoTableListLi[i].onmouseover = () => {	
				infoClose();		
				infoTableListLi[i].style.backgroundColor = "#eff7ff";				
			};
			
			infoTableListLi[i].onmouseout = () => {
				infoClose();
			};
			
			kakao.maps.event.addListener(infomarker[i], 'click', function() {	
				infoTableListLi[i].click();					
				tabBtn[0].click();	
			});
			
			kakao.maps.event.addListener(map, 'click', function() {	  
				clickPoint = -1;	
				categoryPoint = -1;
						
				leftBoard.scrollTop = 0;
				tabBtn1.click();				
				tabBtn2.style.display = 'none'; 	
				tabBtn3.style.display = 'none'; 	
				tabBtn4.style.display = 'none'; 	
				mapMenu.style.display = 'none'; 
				
				infoClose();		
				categoryClose();
				categoryMarkerClose();
				categoryWindowClose();	
				categoryList.innerHTML = null;
				
				map.setLevel(7);	
				makerCheckReset(-1);	  		
			});		
			
			kakao.maps.event.addListener(infomarker[i], 'mouseover', function() {	
				infoClose();	
				infoTableListLi[i].style.backgroundColor = "#eff7ff";		
				infoWindow[i].open(map ,infomarker[i]);				
			});
			
			kakao.maps.event.addListener(infomarker[i], 'mouseout', function() {	
				infoClose();
			});	
		}
		
		if(user!=null){
			for(let i=0;i<data.length;i++){		
				if(userRecommendDataList!=null){
					dataCheck = 1;
					for(let j=0;j<userRecommendDataList.length;j++){
						if(data[i].data_code==userRecommendDataList[j].data_code){							
							dataCheck = 2;
							break;						
						}
					}
					
					if(dataCheck==2){
						userRecommendDataCheck.push("true");						
						infoRecommend[i].style.color = "orangered";
					}
					else{
						userRecommendDataCheck.push("flase");
						infoRecommend[i].style.color = "lightgrey";		
					}	
				}
				else{
					userRecommendDataCheck.push("flase");
					infoRecommend[i].style.color = "lightgrey";		
				}
			}
						
			for(let i=0;i<data.length;i++){
				infoRecommend[i].onclick = () => {					
					if(userRecommendDataCheck[i]=="true"){
						infoRecommend[i].style.color = "lightgrey";
						userRecommendDataCheck[i] = "flase";	
						for(let j=0;j<userRecommendDataList.length;j++){
							if(data[i].data_code==userRecommendDataList[j].data_code){
								userRecommendDataDelete(user.user_id,data[i].data_code,userRecommendDataList[j].recommend_code);				
								break;		
							}
						}						
					}
					else{
						infoRecommend[i].style.color = "orangered";		
						userRecommendDataCheck[i] = "true";		
						userRecommendDataSave(user.user_id,data[i].data_code);
					}				
				}
			}
					
			for(let i=0;i<data.length;i++){		
				infoReivew[i].onclick = () => {		
					if(serchSort==1){
						location.href = `http://localhost:8000/heritage/reviewWrite?review=data&datacode=${data[i].data_code}&category=data&type=${searchOpData}&sort=${boardSortOpData}&searchName=${searchText.value}&index=${saveIndex}`;	
					}
					else if(serchSort==2){
						location.href = `http://localhost:8000/heritage/reviewWrite?review=data&datacode=${data[i].data_code}&category=option&sort=${boardSortOpData}&address=${addressData}&divide=${divideData}&period=${periodData}&group=${groupData}&index=${saveIndex}`;														
					}					
				}
			}
		}
		else{
			for(let i=0;i<data.length;i++){
				infoRecommend[i].onclick = () => {
					location.href = `http://localhost:8000/heritage/auth/login`;							
				}
				
				infoReivew[i].onclick = () => {
					location.href = `http://localhost:8000/heritage/auth/login`;							
				}
			}			
		}	
		
		infoTableListLi[0].click();	
					
		listCount.innerHTML = null;
		if(indexSize<=15){			
			for(let i=0;i<indexSize;i++){
				if(index==i){					
					listCount.innerHTML += createListSelect(i);
				}
				else{
					listCount.innerHTML += createListEtc(i);
				}			
			}
						
			try{
				listCountLi = document.querySelectorAll(".listCount li");
			}
			catch{				
			}	
			
			if(serchSort==1){
				for(let i=0;i<listCountLi.length;i++){		
					listCountLi[i].onclick = () => {		
						location.href = `http://localhost:8000/heritage/map?category=data&type=${searchOpData}&sort=${boardSortOpData}&searchName=${searchText.value}&index=${listCountLi[i].innerText-1}`;					
					}
				}
			}
			else if(serchSort==2){						
				for(let i=0;i<listCountLi.length;i++){
					listCountLi[i].onclick = () => {		
						location.href = `http://localhost:8000/heritage/map?category=option&sort=${boardSortOpData}&address=${addressData}&divide=${divideData}&period=${periodData}&group=${groupData}&index=${listCountLi[i].innerText-1}`;								
					}
				}
			}			
		}
		else if(indexSize>15){				
			indexBackFront = Math.floor(index/13);
			if(indexBackFront == 0){
				listCount.innerHTML += '<li class="list_back">&lt;</li>';		
				for(let i=0;i<13;i++){
					if(index==i){					
						listCount.innerHTML += createListSelect(i);
					}
					else{
						listCount.innerHTML += createListEtc(i);
					}			
				}
				listCount.innerHTML += '<li class="list_front">&gt;</li>';
				
				try{
					listCountLi = document.querySelectorAll(".listCount li");
				}
				catch{				
				}	
				
				if(serchSort==1){
					for(let i=1;i<listCountLi.length-1;i++){		
						listCountLi[i].onclick = () => {		
							location.href = `http://localhost:8000/heritage/map?category=data&type=${searchOpData}&sort=${boardSortOpData}&searchName=${searchText.value}&index=${listCountLi[i].innerText-1}`;						
						}
					}
				}
				else if(serchSort==2){						
					for(let i=1;i<listCountLi.length-1;i++){		
						listCountLi[i].onclick = () => {	
							location.href = `http://localhost:8000/heritage/map?category=option&sort=${boardSortOpData}&address=${addressData}&divide=${divideData}&period=${periodData}&group=${groupData}&index=${listCountLi[i].innerText-1}`;							
						}
					}
				}		
				
				listBack = document.querySelector(".list_back");
				listFront = document.querySelector(".list_front");
			
				if(serchSort==1){
					listFront.onclick = () => {		
						location.href = `http://localhost:8000/heritage/map?category=data&type=${searchOpData}&sort=${boardSortOpData}&searchName=${searchText.value}&index=13`;								
					}
				}
				else if(serchSort==2){
					listFront.onclick = () => {	
						location.href = `http://localhost:8000/heritage/map?category=option&sort=${boardSortOpData}&address=${addressData}&divide=${divideData}&period=${periodData}&group=${groupData}&index=13`;					
					}
				}
			}
			else{				
				if(((indexBackFront+1)*13) >= indexSize){
					listCount.innerHTML += '<li class="list_back">&lt;</li>';		
					for(let i=(indexBackFront*13);i<indexSize;i++){
						if(index==i){					
							listCount.innerHTML += createListSelect(i);
						}
						else{
							listCount.innerHTML += createListEtc(i);
						}			
					}
					listCount.innerHTML += '<li class="list_front">&gt;</li>';
					
					try{
						listCountLi = document.querySelectorAll(".listCount li");
					}
					catch{				
					}	
					
					if(serchSort==1){
						for(let i=1;i<listCountLi.length-1;i++){		
							listCountLi[i].onclick = () => {	
								location.href = `http://localhost:8000/heritage/map?category=data&type=${searchOpData}&sort=${boardSortOpData}&searchName=${searchText.value}&index=${listCountLi[i].innerText-1}`;										
							}
						}
					}
					else if(serchSort==2){						
						for(let i=1;i<listCountLi.length-1;i++){		
							listCountLi[i].onclick = () => {	
								location.href = `http://localhost:8000/heritage/map?category=option&sort=${boardSortOpData}&address=${addressData}&divide=${divideData}&period=${periodData}&group=${groupData}&index=${listCountLi[i].innerText-1}`;							
							}
						}
					}		
					
					listBack = document.querySelector(".list_back");
					listFront = document.querySelector(".list_front");
				
					if(serchSort==1){
						listBack.onclick = () => {		
							location.href = `http://localhost:8000/heritage/map?category=data&type=${searchOpData}&sort=${boardSortOpData}&searchName=${searchText.value}&index=${(indexBackFront-1)*13}`;								
						}
					}
					else if(serchSort==2){
						listBack.onclick = () => {		
							location.href = `http://localhost:8000/heritage/map?category=option&sort=${boardSortOpData}&address=${addressData}&divide=${divideData}&period=${periodData}&group=${groupData}&index=${(indexBackFront-1)*13}`;					
						}
					}	
				}
				else{
					listCount.innerHTML += '<li class="list_back">&lt;</li>';		
					for(let i=(indexBackFront*13);i<((indexBackFront+1)*13);i++){
						if(index==i){					
							listCount.innerHTML += createListSelect(i);
						}
						else{
							listCount.innerHTML += createListEtc(i);
						}			
					}
					listCount.innerHTML += '<li class="list_front">&gt;</li>';
					
					try{
						listCountLi = document.querySelectorAll(".listCount li");
					}
					catch{				
					}
						
					if(serchSort==1){
						for(let i=1;i<listCountLi.length-1;i++){		
							listCountLi[i].onclick = () => {	
								location.href = `http://localhost:8000/heritage/map?category=data&type=${searchOpData}&sort=${boardSortOpData}&searchName=${searchText.value}&index=${listCountLi[i].innerText-1}`;								
							}
						}
					}
					else if(serchSort==2){						
						for(let i=1;i<listCountLi.length-1;i++){		
							listCountLi[i].onclick = () => {	
								location.href = `http://localhost:8000/heritage/map?category=option&sort=${boardSortOpData}&address=${addressData}&divide=${divideData}&period=${periodData}&group=${groupData}&index=${listCountLi[i].innerText-1}`;							
							}
						}
					}	
					
					listBack = document.querySelector(".list_back");
					listFront = document.querySelector(".list_front");
					
					if(serchSort==1){
						listBack.onclick = () => {		
							location.href = `http://localhost:8000/heritage/map?category=data&type=${searchOpData}&sort=${boardSortOpData}&searchName=${searchText.value}&index=${(indexBackFront-1)*13}`;								
						}
					}
					else if(serchSort==2){
						listBack.onclick = () => {	
							location.href = `http://localhost:8000/heritage/map?category=option&sort=${boardSortOpData}&address=${addressData}&divide=${divideData}&period=${periodData}&group=${groupData}&index=${(indexBackFront-1)*13}`;							
						}
					}	
					
					if(serchSort==1){
						listFront.onclick = () => {			
							location.href = `http://localhost:8000/heritage/map?category=data&type=${searchOpData}&sort=${boardSortOpData}&searchName=${searchText.value}&index=${(indexBackFront+1)*13}`;						
						}
					}
					else if(serchSort==2){
						listFront.onclick = () => {	
							location.href = `http://localhost:8000/heritage/map?category=option&sort=${boardSortOpData}&address=${addressData}&divide=${divideData}&period=${periodData}&group=${groupData}&index=${(indexBackFront+1)*13}`;											
							
						}
					}	
				}			
			}			
		}	
	}
	else{		
		alert("검색내용이 없습니다.");
	}	
}
	
function createInfo(img,name,divide,dynasty,address,code,recommend,review){
	let li = `	
			<li>			
				<div class="info-table-list">
	                <div class="infoList1">
	                    <img src="${img}">
	                    <i class="fa fa-heart infoHeart" id="data-recommend-heart"></i>
	                </div>
	                <div class="infoList2">
	                    <h2>${name}</h2>
	                    <p>${divide}</p>
	                    <p>${dynasty}</p>
	                    <P>${address}</P>
	                    <div class="infoList-box">
	                        <p><i class="fa fa-heart"></i><span class="heartNum">${recommend}</span></p>
	                        <p class="viewMore" id="data-review"><button><i class="fa fa-commenting"></i><span class="reviewNum">${review}</span></button></p>
							<p class="viewMore"><a href="https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=${code}" target="_blank">View More</a></p>	                       
	                    </div>
	            	</div>                                        
	    		</div>   	    		
			</li>
			`
	return li;
}

function createListSelect(index){
	let li = `	
	 		<li class="listCountOn">${index+1}</li>                
			`
	return li;
}

function createListEtc(index){
	let li = `	
	 		<li>${index+1}</li>                
			`
	return li;
}

function makerCheckReset(index){
	for(let i=0;i<infomarker.length;i++){		
			infomarker[i].setVisible(true); 
	}
	
	for(let i=0;i<infomarkerCheck.length;i++){		
		infomarkerCheck[i].setVisible(false); 
	}
	
	if(index!=-1){		
		infomarker[index].setVisible(false); 
		infomarkerCheck[index].setVisible(true);	
	}	
}

function infomarkerCheckClose(){	
	for(let i=0;i<infomarkerCheck.length;i++){		
		infomarkerCheck[i].setVisible(false); 
	}
}

function infoWindowClose(){	
	try{
		for(let i=0;i<infoWindow.length;i++){	
			if(clickPoint!=i){
				infoWindow[i].close();				
			}		
		}
	}	
	catch{		
	}	
}

function liBackgroundReset(){	
	for(let i=0;i<infoTableListLi.length;i++){		
		if(clickPoint!=i){	
			infoTableListLi[i].style.backgroundColor = "white";
		}			
	}
}

function infoClose(){	
	infoWindowClose();
	liBackgroundReset();		
}

function categoryColorReset(){
	categoryFD6.style.backgroundColor = "#eff7ff";	
	categoryCE7.style.backgroundColor = "#eff7ff";	
	categoryCS2.style.backgroundColor = "#eff7ff";	
	categoryOL7.style.backgroundColor = "#eff7ff";	
	categoryPK6.style.backgroundColor = "#eff7ff";	
	categoryAD5.style.backgroundColor = "#eff7ff";	
}

function categoryInfo(type,place){	
		
	let imageSrc = "/static/img/markerFood.png"; 
	if(type == "food"){
		imageSrc = "/static/img/markerFood.png"; 
	}
	else if(type == "cafe"){
		imageSrc = "/static/img/markerCafe.png"; 
	}
	else if(type == "store"){
		imageSrc = "/static/img/markerStore.png"; 
	}
	else if(type == "gas"){
		imageSrc = "/static/img/markerGas.png"; 
	}
	else if(type == "parking"){
		imageSrc = "/static/img/markerParking.png"; 
	}
	else if(type == "hotel"){
		imageSrc = "/static/img/markerHotel.png"; 
	}
	let imageSize = new kakao.maps.Size(32, 32);
	let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
	
	categoryList.innerHTML = null;
	categoryMarker = [];
	categoryWindow = [];
	
	for(let i=0;i<place.length;i++){				
		categoryList.innerHTML += createCategory(place[i].place_img,
		place[i].place_name,
		place[i].category_name,
		place[i].place_road_address,
		place[i].place_address,
		place[i].place_phone,
		place[i].place_url,
		place[i].review_cnt,
		place[i].recommend_cnt);	
	}
	
	try{
		categoryListLi = document.querySelectorAll(".category-list li");
	}
	catch{			
	}
	
	try{
		placeRecommend = document.querySelectorAll("#place-recommend");
	}
	catch{			
	}
	
	try{
		placeReview = document.querySelectorAll("#place-review");
	}
	catch{			
	}

	for(let i=0;i<categoryListLi.length;i++){		
		categoryMarker.push(
			new kakao.maps.Marker({
	        	map: map,
	        	image : markerImage,
	    		position: new kakao.maps.LatLng(place[i].place_pointy, place[i].place_pointx)
			})
		);
		
		categoryWindow.push(
			new kakao.maps.InfoWindow({
		    	map: map, 
				position: new kakao.maps.LatLng(place[i].place_pointy, place[i].place_pointx),				
		    	content : `<div class="mapName mapName2">
								<h2>${place[i].place_name}</h2>									
							</div>`
			})
		);		
	}	
	
	categoryWindowClose();	
	
	for(let i=0;i<place.length;i++){	
	
		categoryListLi[i].onclick = () => {	
			categoryPoint = i;				
							
			leftBoard.scrollTop = i*210.7;
			placeId = place[i].place_id;													
			categoryWindowClose();	
			tabBtn4.style.display = 'inline-block'; 
			
			map.setCenter(new kakao.maps.LatLng(place[i].place_pointy, place[i].place_pointx));	 								
			categoryWindow[i].open(map ,categoryMarker[i]);							
		};
		
		categoryListLi[i].onmouseover = () => {	
			categoryBackgroundClose();	
			categoryListLi[i].style.backgroundColor = "#eff7ff";				
		};
		
		categoryListLi[i].onmouseout = () => {
			categoryBackgroundClose();	
		};
		
		kakao.maps.event.addListener(categoryMarker[i], 'click', function() {	
			categoryListLi[i].click();					
		});
		
		kakao.maps.event.addListener(categoryMarker[i], 'mouseover', function() {	
			categoryBackgroundClose();	
			categoryListLi[i].style.backgroundColor = "#eff7ff";		
			categoryWindow[i].open(map ,categoryMarker[i]);				
		});
		
		kakao.maps.event.addListener(categoryMarker[i], 'mouseout', function() {	
			categoryBackgroundClose();	
		});				
	}	
	if(user!=null){
		for(let i=0;i<place.length;i++){		
			if(userRecommendPlaceList!=null){
				dataCheck = 1;				
				for(let j=0;j<userRecommendPlaceList.length;j++){					
					if(place[i].place_id==userRecommendPlaceList[j].place_id){							
						dataCheck = 2;
						break;						
					}
				}
				
				if(dataCheck==2){
					userRecommendPlaceCheck.push("true");						
					placeRecommend[i].style.color = "orangered";
				}
				else{
					userRecommendPlaceCheck.push("flase");
					placeRecommend[i].style.color = "lightgrey";		
				}	
			}
			else{
				userRecommendPlaceCheck.push("flase");
				placeRecommend[i].style.color = "lightgrey";		
			}
		}
		
		for(let i=0;i<place.length;i++){
				placeRecommend[i].onclick = () => {					
					if(userRecommendPlaceCheck[i]=="true"){
						placeRecommend[i].style.color = "lightgrey";
						userRecommendPlaceCheck[i] = "flase";	
						for(let j=0;j<userRecommendPlaceList.length;j++){
							if(place[i].place_id==userRecommendPlaceList[j].place_id){
								userRecommendPlaceDelete(user.user_id,place[i].place_id,userRecommendPlaceList[j].recommend_code);				
								break;		
							}
						}						
					}
					else{
						placeRecommend[i].style.color = "orangered";		
						userRecommendPlaceCheck[i] = "true";		
						userRecommendPlaceSave(user.user_id,place[i].place_id);
					}				
				}
			}
		
		for(let i=0;i<place.length;i++){	
			placeReview[i].onclick = () => {	
				if(serchSort==1){
					location.href = `http://localhost:8000/heritage/reviewWrite?review=place&datacode=${dataCode}&place=${type}&placeid=${place[i].place_id}&category=data&type=${searchOpData}&sort=${boardSortOpData}&searchName=${searchText.value}&index=${saveIndex}`;	
				}
				else if(serchSort==2){
					location.href = `http://localhost:8000/heritage/reviewWrite?review=place&datacode=${dataCode}&place=${type}=&placeid=${place[i].place_id}&category=option&sort=${boardSortOpData}&address=${addressData}&divide=${divideData}&period=${periodData}&group=${groupData}&index=${saveIndex}`;														
				}	
			}	
		}		
	}
	else{
		for(let i=0;i<place.length;i++){	
			placeReview[i].onclick = () => {	
				location.href = `http://localhost:8000/heritage/auth/login`
			}	
			
			placeRecommend[i].onclick = () => {			
				location.href = `http://localhost:8000/heritage/auth/login`
			}	
		}		
	}	

}

function createCategory(img,name,category,roadaddress,address,phone,url,review,recommend){
	let li = `	
			<li>
				<div class="info-table-list">
	                <div class="infoList1">
	                    <img src=${img}>
	                    <i class="fa fa-heart infoHeart"  id="place-recommend"></i>
	                </div>
	                <div class="infoList2">
	                    <h2>${name}</h2>
	                    <p>${category}</p>
	                    <p>${roadaddress}</p>
	                    <P>${address}</P>
	                    <P>${phone}</P>
	                    <div class="infoList-box">
	                        <p><i class="fa fa-heart"></i><span class="heartNum">${recommend}</span></p>
	                        <p class="viewMore" id="place-review"><button><i class="fa fa-commenting"></i><span class="reviewNum">${review}</span></button></p>
							<p class="viewMore"><a href=${url} target="_blank">View More</a></p>		                       
	                    </div>
	            	</div>                                        
	    		</div>   
			</li>
			`
	return li;
}

function categoryClose(){
	categoryMarkerClose();
	categoryWindowClose();
}

function categoryMarkerClose(){	
	try{
		if(categoryMarker.length > 0){			
			for (let i=0;i<categoryMarker.length;i++) {
		        categoryMarker[i].setMap(null);
		    }            
		}
	}
	catch{		
	}
}

function categoryWindowClose(){	
	try{
		for(let i=0;i<categoryWindow.length;i++){			
			categoryWindow[i].close();			
		}
	}	
	catch{		
	}	
}

function categoryWindowReset(){	
	try{
		for(let i=0;i<categoryWindow.length;i++){	
			if(categoryPoint!=i){
				categoryWindow[i].close();				
			}		
		}
	}	
	catch{		
	}	
}

function categoryliReset(){	
	for(let i=0;i<categoryListLi.length;i++){		
		if(categoryPoint!=i){	
			categoryListLi[i].style.backgroundColor = "white";
		}			
	}
}

function categoryBackgroundClose(){	
	categoryWindowReset();
	categoryliReset();		
}

function reviewInfoData(data){	
	reviewData.innerHTML = null;	
	leftBoard.scrollTop = 0;
	for(let i=0;i<data.length;i++){		
		reviewData.innerHTML += createReviewData(data[i].user_id,data[i].user_gender,data[i].create_date,data[i].review_content);
	}
}

function createReviewData(id,gender,time,content){	
	let setGender;
	if(gender == "여"){
		setGender = "/static/img/profileW.png";
	}
	else if(gender == "남"){
		setGender = "/static/img/profileM.png";
	}
	let div = `	
			<div class="reviewDataList">
				<img src=${setGender} alt="">
				<div class="reviewDataList-2">
					<span class="reviewDataId">아이디 : ${id}</span>
					<span class="reviewDataDate"><i class="fa fa-clock-o"> ${time}</i></span>
					<p class="reviewDataContent">${content}</p>
				</div>                  
            </div> 
			`
	return div;
}

function reviewInfoPlace(data){	
	reviewPlace.innerHTML = null;	
	leftBoard.scrollTop = 0;
	for(let i=0;i<data.length;i++){		
		reviewPlace.innerHTML += createReviewPlace(data[i].user_id,data[i].user_gender,data[i].create_date,data[i].review_content);
	}
}

function createReviewPlace(id,gender,time,content){
	let setGender;
	if(gender == "여"){
		setGender = "/static/img/profileW.png";
	}
	else if(gender == "남"){
		setGender = "/static/img/profileM.png";
	}	
	let div = `	
			<div class="reviewPlaceList">
				<img src=${setGender} alt="">
				<div class="reviewPlaceList-2">
					<span class="reviewPlaceId">아이디 : ${id}</span>
					<span class="reviewPlaceDate"><i class="fa fa-clock-o"> ${time}</i></span>
					<p class="reviewPlaceContent">${content}</p>
				</div>                  
            </div> 
			`
	return div;
}


   