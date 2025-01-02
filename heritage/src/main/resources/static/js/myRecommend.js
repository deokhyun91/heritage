let categoryData = document.querySelector("#category_data");
let categoryFood = document.querySelector("#category_food");
let categoryCafe = document.querySelector("#category_cafe");
let categoryStore = document.querySelector("#category_store");
let categoryGas = document.querySelector("#category_gas");
let categoryParking = document.querySelector("#category_parking");
let categoryHotel = document.querySelector("#category_hotel");
let categorySelect;

let galleryList = document.querySelector(".galleryList");
let galleryListLi;

let searchOp = document.querySelector(".search-op");
let searchOpData = searchOp.options[searchOp.selectedIndex].value;

let optionSort = document.querySelector("#option_sort");
let optionSortData = optionSort.options[optionSort.selectedIndex].value;

let listCount = document.querySelector(".listCount");
let listCountLi;

let searchText = document.querySelector("#search-text");
let searBu = document.querySelector(".sear-bu");
let fwb = document.querySelector(".fwb");
let page  = document.querySelector(".page");



let loadPage = location.search;
let setParam;
let userName = user.user_id;
let recommendData = null;
let recommendData2 = null;
if(loadPage==""){
	searchText.value = "";
	categorySelect = "data";	
	categoryData.className = 'List-op-on'; 
	searchData(userName,searchOpData,optionSortData,searchText.value,0);	
	recommendData = searchData(userName,searchOpData,optionSortData,searchText.value,0);


}
else{
	console.log("검색시");
	setParam = getParams();	

	searchText.value = setParam.searchName;
	categorySelect = setParam.category;

	for(let i=0;i<searchOp.options.length;i++){	
		if(setParam.type == searchOp.options[i].value){			
			searchOp.options.selectedIndex = i;		
			searchOpData = searchOp.options[i].value;
			break;		
		}
	}
	
	for(let i=0;i<optionSort.options.length;i++){	
		if(setParam.sort == optionSort.options[i].value){			
			optionSort.options.selectedIndex = i;
			optionSortData = optionSort.options[optionSort.options.selectedIndex].value;
			break;		
		}
	}
	if(categorySelect=="data"){		
		categoryData.className = 'List-op-on';	
		searchData(userName,setParam.type,setParam.sort,setParam.searchName,setParam.index);
		recommendData = searchData(userName,setParam.type,setParam.sort,setParam.searchName,setParam.index);
		console.log(recommendData);
			
	}	
	else if(categorySelect=="food"){
		categoryFood.className = 'List-op-on';
		searchPlace(userName,setParam.type,setParam.sort,"food",setParam.searchName,setParam.index);
		recommendData2 = searchPlace(userName,setParam.type,setParam.sort,"food",setParam.searchName,setParam.index);	
	}
	else if(categorySelect=="cafe"){
		categoryCafe.className = 'List-op-on';
		searchPlace(userName,setParam.type,setParam.sort,"cafe",setParam.searchName,setParam.index);	
		recommendData2 = searchPlace(userName,setParam.type,setParam.sort,"cafe",setParam.searchName,setParam.index);
		console.log(recommendData2);
	}
	else if(categorySelect=="store"){
		categoryStore.className = 'List-op-on';
		searchPlace(userName,setParam.type,setParam.sort,"store",setParam.searchName,setParam.index);	
		recommendData2 = searchPlace(userName,setParam.type,setParam.sort,"store",setParam.searchName,setParam.index);	
	}
	else if(categorySelect=="gas"){
		categoryGas.className = 'List-op-on';
		searchPlace(userName,setParam.type,setParam.sort,"gas",setParam.searchName,setParam.index);
		recommendData2 = searchPlace(userName,setParam.type,setParam.sort,"gas",setParam.searchName,setParam.index);
	}
	else if(categorySelect=="parking"){
		categoryParking.className = 'List-op-on';
		searchPlace(userName,setParam.type,setParam.sort,"parking",setParam.searchName,setParam.index);
		recommendData2 =	searchPlace(userName,setParam.type,setParam.sort,"parking",setParam.searchName,setParam.index);
	}
	else if(categorySelect=="hotel"){
		categoryHotel.className = 'List-op-on';
		searchPlace(userName,setParam.type,setParam.sort,"hotel",setParam.searchName,setParam.index);	
		recommendData2 = searchPlace(userName,setParam.type,setParam.sort,"hotel",setParam.searchName,setParam.index);
	}

}
categoryData.onclick = () => {		
	location.href = `http://localhost:8000/heritage/myRecommend?category=data&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=0`;
}

categoryFood.onclick = () => {
	location.href = `http://localhost:8000/heritage/myRecommend?category=food&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=0`;
}

categoryCafe.onclick = () => {
	location.href = `http://localhost:8000/heritage/myRecommend?category=cafe&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=0`;
}

categoryStore.onclick = () => {
	location.href = `http://localhost:8000/heritage/myRecommend?category=store&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=0`;
}

categoryGas.onclick = () => {
	location.href = `http://localhost:8000/heritage/myRecommend?category=gas&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=0`;
}

categoryParking.onclick = () => {
	location.href = `http://localhost:8000/heritage/myRecommend?category=parking&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=0`;
}

categoryHotel.onclick = () => {
	location.href = `http://localhost:8000/heritage/myRecommend?category=hotel&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=0`;
}

searchText.onkeyup = (e) => {	
	if(e.key=="Enter"){					
		location.href = `http://localhost:8000/heritage/myRecommend?category=${categorySelect}&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=0`;
	}
}

searchText.onclick = () => {			
	searchText.value = "";
}

searBu.onclick = () => {			
	location.href = `http://localhost:8000/heritage/myRecommend?category=${categorySelect}&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=0`;
}

searchOp.onclick = () => {			
	if(searchOp.options[searchOp.selectedIndex].value != searchOpData){
		searchOpData = searchOp.options[searchOp.selectedIndex].value;	
	}
}

optionSort.onclick = () => {			
	if(optionSort.options[optionSort.selectedIndex].value != optionSortData){
		optionSortData = optionSort.options[optionSort.selectedIndex].value;
		location.href = `http://localhost:8000/heritage/myRecommend?category=${categorySelect}&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=0`;
	}
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

function searchData(userName,type,sort,searchName,index){
	let data = null;	
    $.ajax({
        type: "GET",
        async:false,
        url: `/api/v1/myrecommend/data`,        
        data: { //get일때도 date가 가는지? JSON.stringify 안하는지?
			userName: userName,
			type : type,
			sort : sort,
			searchName : searchName,
			index : index
        },		  	
        success: (Response) =>{		
			
			if(Response.size<=0){
				alert("검색한 자료가 없습니다.");
				fwb.innerHTML = 0;
				page.innerHTML = "0 Page";
				try{
					galleryList.innerHTML = null;
				}
				catch{				
				}	
				try{
					listCount.innerHTML = null;
				}
				catch{				
				}
			}	
			else{
				
				data = Response.data;
				dataSearch(Response.data,Response.size,index);
				
			};	
					
        },
        error:errorMessage //request, status, error 변수 어디서
    }) 
	return data;
}


function searchPlace(userName,type,sort,place,searchName,index){	
	let data = null;
    $.ajax({
        type: "GET",
        async:false,
        url: `/api/v1/myrecommend/place`,        
        data: { 
			userName : userName,
			type : type,
			sort : sort,
			place : place,
			searchName : searchName,			
			index : index
        },		  	
        success: (Response) =>{		
			
			if(Response.size<=0){
				alert("검색한 자료가 없습니다.");
				fwb.innerHTML = 0;
				page.innerHTML = "0 Page";
				try{
					galleryList.innerHTML = null;
				}
				catch{				
				}	
				try{
					listCount.innerHTML = null;
				}
				catch{				
				}
			}	
			else{
				console.log(Response.size);
				console.log(Response.data);

				galleryList.innerHTML = null;
				data = Response.data;
				placeSearch(Response.data,Response.size,index);
				
				
			};	
					
        },
        error:errorMessage //request, status, error 변수 어디서
    })
	return data;
}
function errorMessage(request, status, error){
	alert("요청실패");
	console.log(request.status);
	console.log(request.respnseText);
	console.log(error);
}

function dataSearch(data,size,index){
	let indexSize = Math.floor(size/8);
	let indexRemainder = size % 8;
	let indexBackFront = Math.floor(index/30);

	fwb.innerHTML = size;
	page.innerHTML = (Number(index)+1)+" Page";
	
	if(indexRemainder > 0){
		indexSize = indexSize+1;
	}
	
	galleryList.innerHTML = null;
	for(let i=0;i<data.length;i++){				
		galleryList.innerHTML += createDataSearch(data[i].data_img,data[i].data_code,data[i].data_koname,data[i].data_dynasty,data[i].data_address);		
	}	
	
	if(indexSize<=30){				
		listCount.innerHTML = null;
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
		
		for(let i=0;i<listCountLi.length;i++){		
			listCountLi[i].onclick = () => {
				location.href = `http://localhost:8000/heritage/myRecommend?category=data&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${i}`;
			}
		}
	}
	else{	
		listCount.innerHTML = null;
		if(indexBackFront == 0){			
			for(let i=0;i<30;i++){
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
			
			for(let i=0;i<listCountLi.length-1;i++){		
				listCountLi[i].onclick = () => {	
					location.href = `http://localhost:8000/heritage/myRecommend?category=data&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${i}`;									
				}
			}
			
			listFront = document.querySelector(".list_front");						
			listFront.onclick = () => {	
				location.href = `http://localhost:8000/heritage/myRecommend?category=data&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${30}`;		
			}			
		}
		else{
			if(((indexBackFront+1)*30) >= indexSize){
				listCount.innerHTML += '<li class="list_back">&lt;</li>';		
				for(let i=(indexBackFront*30);i<indexSize;i++){
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
				
				for(let i=1;i<listCountLi.length;i++){		
				listCountLi[i].onclick = () => {	
						location.href = `http://localhost:8000/heritage/myRecommend?category=data&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${listCountLi[i].innerText-1}`;							
					}
				}
				
				listBack = document.querySelector(".list_back");				
				listBack.onclick = () => {	
					location.href = `http://localhost:8000/heritage/myRecommend?category=data&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${(indexBackFront-1)*30}`;			
				}						
			}
			else{
				listCount.innerHTML += '<li class="list_back">&lt;</li>';		
				for(let i=(indexBackFront*30);i<((indexBackFront+1)*30);i++){
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
				
				for(let i=1;i<listCountLi.length-1;i++){		
				listCountLi[i].onclick = () => {		
						location.href = `http://localhost:8000/heritage/myRecommend?category=data&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${listCountLi[i].innerText-1}`;									
					}
				}
				
				listBack = document.querySelector(".list_back");
				listFront = document.querySelector(".list_front");
				
				listBack.onclick = () => {	
					location.href = `http://localhost:8000/heritage/myRecommend?category=data&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${(indexBackFront-1)*30}`;					
				}
				
				listFront.onclick = () => {	
					location.href = `http://localhost:8000/heritage/myRecommend?category=data&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${(indexBackFront+1)*30}`;	
				}
			}
		}	
	}	
}
function placeSearch(data,size,index){
	let indexSize = Math.floor(size/8);
	let indexRemainder = size % 8;
	let indexBackFront = Math.floor(index/30);;
	
	fwb.innerHTML = size;
	page.innerHTML = (index+1)+" Page";
	
	if(indexRemainder > 0){
		indexSize = indexSize+1;
	}
	
	galleryList.innerHTML = null;
	for(let i=0;i<data.length;i++){				
		galleryList.innerHTML += createPlaceSearch(data[i].place_img,data[i].data_code,data[i].data_koname,data[i].place_id,data[i].place_name,data[i].category_name,data[i].place_address);		
	}	
	
	listCount.innerHTML = null;
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
	
	if(indexSize<=30){				
		listCount.innerHTML = null;
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
		
		for(let i=0;i<listCountLi.length;i++){		
			listCountLi[i].onclick = () => {
				location.href = `http://localhost:8000/heritage/myRecommend?category=${categorySelect}&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${i}`;				
			}
		}
	}
	else{	
		listCount.innerHTML = null;
		if(indexBackFront == 0){			
			for(let i=0;i<30;i++){
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
			
			for(let i=0;i<listCountLi.length-1;i++){		
				listCountLi[i].onclick = () => {	
					location.href = `http://localhost:8000/heritage/myRecommend?category=${categorySelect}&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${i}`;									
				}
			}
			
			listFront = document.querySelector(".list_front");			
			listFront.onclick = () => {	
				searchPlace(searchOpData,optionSortData,categorySelect,searchText.value,30);				
			}			
		}
		else{
			if(((indexBackFront+1)*30) >= indexSize){
				listCount.innerHTML += '<li class="list_back">&lt;</li>';		
				for(let i=(indexBackFront*30);i<indexSize;i++){
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
				
				for(let i=1;i<listCountLi.length;i++){		
					listCountLi[i].onclick = () => {	
						location.href = `http://localhost:8000/heritage/myRecommend?category=${categorySelect}&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${listCountLi[i].innerText-1}`;										
					}
				}
				
				listBack = document.querySelector(".list_back");			
				listBack.onclick = () => {	
					location.href = `http://localhost:8000/heritage/myRecommend?category=${categorySelect}&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${(indexBackFront-1)*30}`;			
				}						
			}
			else{
				listCount.innerHTML += '<li class="list_back">&lt;</li>';		
				for(let i=(indexBackFront*30);i<((indexBackFront+1)*30);i++){
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
				
				for(let i=1;i<listCountLi.length-1;i++){		
					listCountLi[i].onclick = () => {		
						location.href = `http://localhost:8000/heritage/myRecommend?category=${categorySelect}&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${listCountLi[i].innerText-1}`;							
					}
				}
				
				listBack = document.querySelector(".list_back");
				listFront = document.querySelector(".list_front");
				
				listBack.onclick = () => {	
					location.href = `http://localhost:8000/heritage/myRecommend?category=${categorySelect}&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${(indexBackFront-1)*30}`;										
				}
				
				listFront.onclick = () => {	
					location.href = `http://localhost:8000/heritage/myRecommend?category=${categorySelect}&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${(indexBackFront+1)*30}`;			
				}
			}
		}	
	}	
}
function createDataSearch(img,code,name,dynasty,address){
	let li = `
			<li class="galleryList-con galleryList-con1">						 				      
                <div class="galleryList1">
                    <img src=${img} alt=""> 
                    <span class="titleTag" style="position: absolute;left: 10px;width: 100px;top: 10px;" title="${name}"><i class="fa fa-location-arrow" style="color:#fff;"></i> ${name}<span>                           
                </div>
                <div class="galleryList2">
                    <h2 class=" mt10"><a href="https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=${code}" target="_blank" class="fs18">${name}</a></h2>
                    <p>${dynasty}</p>
                    <p>${address}</p>
					<div class="infoList-box" style="right: 0;">
						<button class="myRecommend-deleteBtn" style=" border: 0;
						padding: 5px 10px;
						border-radius: 10px;
						cursor: pointer;">삭제</button>	                       									                       
					</div>
                   
                </div>
            </li>
			`
	return li;
}

function createPlaceSearch(img,datacode,dataname,id,placename,category,address,reviewCnt,recommendCnt){
	let li = `
			<li class="galleryList-con galleryList-con2">						 				      
                <div class="galleryList1">                	
                    <img src=${img} alt="">   
                    <span class="titleTag" style="position: absolute;left: 10px;width: 100px;top: 10px;" title="${dataname}"><i class="fa fa-location-arrow" style="color:#fff;"></i> ${dataname}<span>                                                    
                </div>
                <div class="galleryList2">    
                	
                    <h2 class=" mt10"><a href="https://place.map.kakao.com/${id}" target="_blank" class="fs18">${placename}</a></h2>
                    <p>${category}</p>
                    <p>${address}</p>
					<div class="infoList-box" style="right: 0;">
						<button class="myRecommend-deleteBtn2" style=" border: 0;
						padding: 5px 10px;
						border-radius: 10px;
						cursor: pointer;">삭제</button>	                       									                       
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

let galleryListCon = document.querySelectorAll(".galleryList-con1");
let galleryListCon2 = document.querySelectorAll(".galleryList-con2");
for(let i=0;i<galleryListCon.length;i++){
	let deleteBtn = galleryListCon[i].querySelector(".myRecommend-deleteBtn");
	
	let recommendCode = recommendData[i].recommend_code;

	deleteBtn.onclick = () => {
	
		deleteMylistRecommendData(recommendCode, userName);
		
	}

}
for(let i=0;i<galleryListCon2.length;i++){

	let deleteBtn2 = galleryListCon2[i].querySelector(".myRecommend-deleteBtn2");
	let recommendCode2 = recommendData2[i].recommend_code;

	deleteBtn2.onclick = () => {
	
		deleteMylistRecommendPlace(recommendCode2, userName);
	   
   }
}




function deleteMylistRecommendData(recommendCode, userName) {
	if (!confirm("삭제 하시겠습니까?")) {
		alert("취소(아니오)를 누르셨습니다.");
	} else {
		alert("삭제 되었습니다.");
		
		$.ajax({
			type : "delete",
			url: `/api/v1/myrecommend/data/delete`,
			data: { 
				recommendCode : recommendCode,
				userName : userName

			},
			async: false,
			success: (response) => {
				if(response.data){
					
					location.replace("/heritage/myRecommend")
				}
			},
			error: (error) => {
				console.log(error);
			}
		})
	}

	
}

function deleteMylistRecommendPlace(recommendCode2, userName) {
	if (!confirm("삭제 하시겠습니까?")) {
		alert("취소(아니오)를 누르셨습니다.");
	} else {
		alert("삭제 되었습니다.");
		
		$.ajax({
			type : "delete",
			url: `/api/v1/myrecommend/place/delete`,
			data: { 
				recommendCode2 : recommendCode2,
				userName : userName

			},
			async: false,
			success: (response) => {
				if(response.data){
					
					location.replace("/heritage/myRecommend")
				}
			},
			error: (error) => {
				console.log(error);
			}
		})
	}

	
}

   