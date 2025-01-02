let categoryData = document.querySelector("#category_data");
let categoryFood = document.querySelector("#category_food");
let categoryCafe = document.querySelector("#category_cafe");
let categoryStore = document.querySelector("#category_store");
let categoryGas = document.querySelector("#category_gas");
let categoryParking = document.querySelector("#category_parking");
let categoryHotel = document.querySelector("#category_hotel");
let categorySelect;

let textList = document.querySelector(".textList");
let textListTr;
let reviewCountCode;
let searchOp = document.querySelector(".search-op");
let searchOpData = searchOp.options[searchOp.selectedIndex].value;

let optionSort = document.querySelector(".option_sort");
let optionSortData = optionSort.options[optionSort.selectedIndex].value;

let listCount = document.querySelector(".listCount");
let listCountLi;

let searchText = document.querySelector("#search-text");
let searBu = document.querySelector(".sear-bu");
let fwb = document.querySelector(".fwb");
let page  = document.querySelector(".page");

let loadPage = location.search;
let setParam;
let saveIndex;

if(user!=null){
	if(loadPage==""){
		searchText.value = "서울";
		categorySelect = "data";	
		categoryData.className = 'List-op-on'; 	
		searchData(user.user_id,"name","latest","서울",0);
	}
	else{
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
			searchData(user.user_id,setParam.type,setParam.sort,setParam.searchName,setParam.index);			
		}	
		else if(categorySelect=="food"){
			categoryFood.className = 'List-op-on';
			searchPlace(user.user_id,setParam.type,setParam.sort,"food",setParam.searchName,setParam.index);	
		}
		else if(categorySelect=="cafe"){
			categoryCafe.className = 'List-op-on';
			searchPlace(user.user_id,setParam.type,setParam.sort,"cafe",setParam.searchName,setParam.index);	
		}
		else if(categorySelect=="store"){
			categoryStore.className = 'List-op-on';
			searchPlace(user.user_id,setParam.type,setParam.sort,"store",setParam.searchName,setParam.index);	
		}
		else if(categorySelect=="gas"){
			categoryGas.className = 'List-op-on';
			searchPlace(user.user_id,setParam.type,setParam.sort,"gas",setParam.searchName,setParam.index);	
		}
		else if(categorySelect=="parking"){
			categoryParking.className = 'List-op-on';
			searchPlace(user.user_id,setParam.type,setParam.sort,"parking",setParam.searchName,setParam.index);	
		}
		else if(categorySelect=="hotel"){
			categoryHotel.className = 'List-op-on';
			searchPlace(user.user_id,setParam.type,setParam.sort,"hotel",setParam.searchName,setParam.index);	
		}
	}
	
	categoryData.onclick = () => {
		if(searchText.value==""){
			alert("검색어를 입력하세요.");
		}
		else{
			location.href = `http://localhost:8000/heritage/myReviewList?category=data&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=0`;
		}			
	}
	
	categoryFood.onclick = () => {
		if(searchText.value==""){
			alert("검색어를 입력하세요.");
		}
		else{
			location.href = `http://localhost:8000/heritage/myReviewList?category=food&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=0`;
		}	
	}
	
	categoryCafe.onclick = () => {
		if(searchText.value==""){
			alert("검색어를 입력하세요.");
		}
		else{
			location.href = `http://localhost:8000/heritage/myReviewList?category=cafe&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=0`;
		}	
	}
	
	categoryStore.onclick = () => {
		if(searchText.value==""){
			alert("검색어를 입력하세요.");
		}
		else{
			location.href = `http://localhost:8000/heritage/myReviewList?category=store&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=0`;
		}	
	}
	
	categoryGas.onclick = () => {
		if(searchText.value==""){
			alert("검색어를 입력하세요.");
		}
		else{
			location.href = `http://localhost:8000/heritage/myReviewList?category=gas&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=0`;
		}	
	}
	
	categoryParking.onclick = () => {
		if(searchText.value==""){
			alert("검색어를 입력하세요.");
		}
		else{
			location.href = `http://localhost:8000/heritage/myReviewList?category=parking&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=0`;
		}	
	}
	
	categoryHotel.onclick = () => {
		if(searchText.value==""){
			alert("검색어를 입력하세요.");
		}
		else{
			location.href = `http://localhost:8000/heritage/myReviewList?category=hotel&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=0`;
		}	
	}
	
	searchText.onkeyup = (e) => {	
		if(e.key=="Enter"){	
			if(searchText.value==""){
				alert("검색어를 입력하세요.");
			}
			else{
				location.href = `http://localhost:8000/heritage/myReviewList?category=${categorySelect}&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=0`;
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
			location.href = `http://localhost:8000/heritage/myReviewList?category=${categorySelect}&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=0`;
		}		
	}
	
	
	optionSort.onclick = () => {	
		if(searchText.value==""){
			alert("검색어를 입력하세요.");
		}
		else{
			if(optionSort.options[optionSort.selectedIndex].value != optionSortData){
				optionSortData = optionSort.options[optionSort.selectedIndex].value;
				location.href = `http://localhost:8000/heritage/myReviewList?category=${categorySelect}&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=0`;
			}
		}	
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

function searchData(userId,type,sort,searchName,index){	
    $.ajax({
        type: "GET",
        async:false,
        url: `/api/v1/myreview/data`,        
        data: {
			userId : userId,
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
				dataSearch(Response.data,Response.size,index);				
			}							
        },
        error:errorMessage
    })
}


function searchPlace(userId,type,sort,place,searchName,index){	
    $.ajax({
        type: "GET",
        async:false,
        url: `/api/v1/myreview/place`,        
        data: {
			userId : userId,
			type : type,
			sort : sort,
			place : place,
			searchName : searchName,
			index : index
        },		  	
        success: (Response) =>{		
			console.log(Response.data);
			console.log(Response.size);
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
				placeSearch(Response.data,Response.size,index);
			};	
					
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

function dataSearch(data,size,index){
	let indexSize = Math.floor(size/10);
	let indexRemainder = size % 10;
	let indexBackFront = Math.floor(index/30);
	
	if(indexRemainder > 0){
		indexSize = indexSize+1;
	}
	
	fwb.innerHTML = size;
	page.innerHTML = (Number(index)+1)+" Page";
	
	textList.innerHTML = null;
	textList.innerHTML += createThead();
	
	for(let i=0;i<data.length;i++){
		textList.innerHTML += createDataSearch(data[i].review_code,data[i].data_koname,data[i].review_name,data[i].user_id,data[i].review_count,data[i].create_date);		
	}	
	
	try{
		textListTr = document.querySelectorAll(".textList tr");
		reviewCountCode = document.querySelectorAll("#review_count_code");
	}
	catch{				
	}	

	for(let i=1;i<textListTr.length;i++){	
		textListTr[i].onclick = () => {						
			location.href = `http://localhost:8000/heritage/myReviewWrite?category=data&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${index}&code=${data[i-1].review_code}`;
		}
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
				location.href = `http://localhost:8000/heritage/myReviewList?category=data&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${i}`;
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
					location.href = `http://localhost:8000/heritage/myReviewList?category=data&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${i}`;									
				}
			}
			
			listFront = document.querySelector(".list_front");			
			listFront.onclick = () => {	
				location.href = `http://localhost:8000/heritage/myReviewList?category=data&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${30}`;		
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
						location.href = `http://localhost:8000/heritage/myReviewList?category=data&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${listCountLi[i].innerText-1}`;							
					}
				}
				
				listBack = document.querySelector(".list_back");							
				listBack.onclick = () => {	
					location.href = `http://localhost:8000/heritage/myReviewList?category=data&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${(indexBackFront-1)*30}`;			
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
						location.href = `http://localhost:8000/heritage/myReviewList?category=data&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${listCountLi[i].innerText-1}`;									
					}
				}
				
				listBack = document.querySelector(".list_back");
				listFront = document.querySelector(".list_front");
				
				listBack.onclick = () => {	
					location.href = `http://localhost:8000/heritage/myReviewList?category=data&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${(indexBackFront-1)*30}`;					
				}
				
				listFront.onclick = () => {	
					location.href = `http://localhost:8000/heritage/myReviewList?category=data&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${(indexBackFront+1)*30}`;	
				}
			}
		}
	}
}

function placeSearch(data,size,index){
	let indexSize = Math.floor(size/10);
	let indexRemainder = size % 10;
	let indexBackFront = Math.floor(index/30);
	
	if(indexRemainder > 0){
		indexSize = indexSize+1;
	}
	
	fwb.innerHTML = size;
	page.innerHTML = (Number(index)+1)+" Page";
	
	textList.innerHTML = null;
	textList.innerHTML += createThead();
	
	for(let i=0;i<data.length;i++){
		textList.innerHTML += createPlaceSearch(data[i].review_code,data[i].data_koname,data[i].place_name,data[i].review_name,data[i].user_id,data[i].review_count,data[i].create_date);		
	}	
	
	try{
		textListTr = document.querySelectorAll(".textList tr");
		reviewCountCode = document.querySelectorAll("#review_count_code");
	}
	catch{				
	}	
	
	for(let i=1;i<textListTr.length;i++){		
		textListTr[i].onclick = () => {					
			location.href = `http://localhost:8000/heritage/myReviewWrite?category=${categorySelect}&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${index}&code=${data[i-1].review_code}`;			
		}
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
				location.href = `http://localhost:8000/heritage/myReviewList?category=${categorySelect}&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${i}`;
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
					location.href = `http://localhost:8000/heritage/myReviewList?category=${categorySelect}&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${i}`;									
				}
			}
			
			listFront = document.querySelector(".list_front");			
			listFront.onclick = () => {	
				location.href = `http://localhost:8000/heritage/myReviewList?category=${categorySelect}&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${30}`;		
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
						location.href = `http://localhost:8000/heritage/myReviewList?category=${categorySelect}&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${listCountLi[i].innerText-1}`;							
					}
				}
				
				listBack = document.querySelector(".list_back");							
				listBack.onclick = () => {	
					location.href = `http://localhost:8000/heritage/myReviewList?category=${categorySelect}&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${(indexBackFront-1)*30}`;			
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
						location.href = `http://localhost:8000/heritage/myReviewList?category=${categorySelect}&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${listCountLi[i].innerText-1}`;									
					}
				}
				
				listBack = document.querySelector(".list_back");
				listFront = document.querySelector(".list_front");
				
				listBack.onclick = () => {	
					location.href = `http://localhost:8000/heritage/myReviewList?category=${categorySelect}&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${(indexBackFront-1)*30}`;					
				}
				
				listFront.onclick = () => {	
					location.href = `http://localhost:8000/heritage/myReviewList?category=${categorySelect}&type=${searchOpData}&sort=${optionSortData}&searchName=${searchText.value}&index=${(indexBackFront+1)*30}`;	
				}
			}
		}
	}
}

function createThead(){
	let thead = `
				<thead>
                    <tr>
                        <th><input type="checkbox"></th>
                        <th class="col_5">번호</th>
                        <th class="col_70">제목</th>
                        <th class="col_10">글쓴이</th>
                        <th class="col_5">조회</th>
                        <th class="col_10">날짜</th>
                    </tr>
                </thead>
				`
	return thead;
}

function createDataSearch(code,dataname,contentname,id,count,data){
	let tr = `	
				<tr>
	                <td><input type="checkbox"></td>
	                <td class="col_5" id="review_count_code">${code}</td>
	                <td class="col_70"><span class="titleTag" title="${dataname}"><i class="fa fa-location-arrow" style="color:#fff;"></i> ${dataname}</span>${contentname}</td>
	                <td class="col_10">${id}</td>
	                <td class="col_5">${count}</td>
	                <td class="col_10">${data}</td>
            	</tr>
			`
	return tr;
}

function createPlaceSearch(code,dataname,placename,contentname,id,count,data){
	let tr = `	
				<tr>
	                <td><input type="checkbox"></td>
	                <td class="col_5" id="review_count_code">${code}</td>
	                <td class="col_70"><span class="titleTag" title="${dataname}"><i class="fa fa-location-arrow" style="color:#fff;"></i> ${dataname}</span><span class="titleTag2" title="${placename}"><i class="fa fa-location-arrow" style="color:#fff;"></i> ${placename}</span>${contentname}</a></td>
	                <td class="col_10">${id}</td>
	                <td class="col_5">${count}</td>
	                <td class="col_10">${data}</td>
            	</tr>
			`
	return tr;
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