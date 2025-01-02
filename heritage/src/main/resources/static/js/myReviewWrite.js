let ListViewTitBox = document.querySelector(".ListView-tit-box");
let dataImg = document.querySelector(".data-img");
let profile = document.querySelector(".profile");
let getId = document.querySelector("#get-id");
let reviewCount = document.querySelector("#review-count");
let reviewDateCreate = document.querySelector("#review-date-create");
let reviewDateUpdate = document.querySelector("#review-date-update");
let reviewListView = document.querySelector(".ListView-op-right");
let textName = document.querySelector("#text-name");
let textContent = document.querySelector("#text-content");

let reviewChange = document.querySelector("#myreview-change");
let reviewDelete = document.querySelector("#myreview-delete");

let genderM = "/static/img/profileM.png";
let genderW = "/static/img/profileW.png";

let loadPage = location.search;
let setParam;

let dataCode;
let reviewCode;
let placeId;

setParam = getParams();	
if(user!=null){
	if(setParam.category=="data"){		
		getData(setParam.code);			
		reviewChange.onclick = () => {			
			updateData(user.user_id,dataCode,reviewCode,textName.value,textContent.value);
			location.href = `http://localhost:8000/heritage/myReviewList?category=${setParam.category}&type=${setParam.type}&sort=${setParam.sort}&searchName=${setParam.searchName}&index=${setParam.index}`			
		}
		
		reviewDelete.onclick = () => {			
			deleteData(user.user_id,dataCode,reviewCode);
			location.href = `http://localhost:8000/heritage/myReviewList?category=${setParam.category}&type=${setParam.type}&sort=${setParam.sort}&searchName=${setParam.searchName}&index=${setParam.index}`			
		}
	}
	else {
		getPlace(setParam.code,setParam.category);	
		reviewChange.onclick = () => {			
			updatePlace(user.user_id,reviewCode,dataCode,placeId,textName.value,textContent.value);
			location.href = `http://localhost:8000/heritage/myReviewList?category=${setParam.category}&type=${setParam.type}&sort=${setParam.sort}&searchName=${setParam.searchName}&index=${setParam.index}`			
		}

		reviewDelete.onclick = () => {			
			deletePlace(user.user_id,reviewCode,dataCode,placeId);
			location.href = `http://localhost:8000/heritage/myReviewList?category=${setParam.category}&type=${setParam.type}&sort=${setParam.sort}&searchName=${setParam.searchName}&index=${setParam.index}`			
		}
	}
	
	reviewListView.onclick = () => {	
		location.href = `http://localhost:8000/heritage/myReviewList?category=${setParam.category}&type=${setParam.type}&sort=${setParam.sort}&searchName=${setParam.searchName}&index=${setParam.index}`				
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

function getData(code){	
    $.ajax({
        type: "GET",
        async:false,
        url: `/api/v1/myreview/data/view`,        
        data: {
			code: code
        },		  	
        success: (Response) =>{		
			reviewCode = Response.data.review_code;
			dataCode = 	Response.data.data_code;		
			createData(Response.data.review_name
						,Response.data.data_img
						,Response.data.data_koname
						,Response.data.user_gender
						,Response.data.user_id
						,Response.data.review_count
						,Response.data.create_date
						,Response.data.update_date
						,Response.data.review_content);		
        },
        error:errorMessage
    })
}

function updateData(userId,dataCode,reviewCode,reviewName,reviewContent){	
    $.ajax({
        type: "POST",
        async:false,
        url: `/api/v1/myreview/data/update`,        
        data: {
			userId : userId,
			dataCode : dataCode,
			reviewCode : reviewCode,
			reviewName : reviewName,
			reviewContent : reviewContent
        },		  	
        success: (Response) =>{								
			console.log(Response.data);
        },
        error:errorMessage
    })
}

function deleteData(userId,dataCode,reviewCode){	
    $.ajax({
        type: "POST",
        async:false,
        url: `/api/v1/myreview/data/delete`,        
        data: {
			userId : userId,
			dataCode : dataCode,
			reviewCode : reviewCode			
        },		  	
        success: (Response) =>{				
			console.log(Response.data);
        },
        error:errorMessage
    })
}

function getPlace(code,place){	
    $.ajax({
        type: "GET",
        async:false,
        url: `/api/v1/myreview/place/view`,        
        data: {
			code: code,
			place : place
        },		  	
        success: (Response) =>{	
			reviewCode = Response.data.review_code;
			dataCode = 	Response.data.data_code;	
			placeId = Response.data.place_id;	
			createPlace(Response.data.review_name						
						,Response.data.place_img
						,Response.data.data_koname
						,Response.data.place_name
						,Response.data.user_gender
						,Response.data.user_id
						,Response.data.review_count
						,Response.data.create_date
						,Response.data.update_date
						,Response.data.review_content);		
        },
        error:errorMessage
    })
}

function updatePlace(userId,reviewCode,dataCode,placeId,reviewName,reviewContent){	
    $.ajax({
        type: "POST",
        async:false,
        url: `/api/v1/myreview/place/update`,        
        data: {
			userId : userId,
			reviewCode : reviewCode,
			dataCode : dataCode,
			placeId : placeId,
			reviewName : reviewName,
			reviewContent : reviewContent
        },		  	
        success: (Response) =>{								
			console.log(Response.data);
        },
        error:errorMessage
    })
}

function deletePlace(userId,reviewCode,dataCode,placeId){	
    $.ajax({
        type: "POST",
        async:false,
        url: `/api/v1/myreview/place/delete`,        
        data: {
			userId : userId,
			reviewCode : reviewCode,
			dataCode : dataCode,
			placeId : placeId			
        },		  	
        success: (Response) =>{				
			console.log(Response.data);
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

function createData(title,dataimg,dataname,gender,id,count,createdate,update,content){	
	dataImg.src = dataimg;
	ListViewTitBox.innerHTML = `								
                    			<p class="reviewTitleTag fs18 mb10"><i class="fa fa-location-arrow" style="color:#fff;"> ${dataname}</i></p>
                    			<p class="reviewTitle fs20 fwb ">${title}</p>     
								`;
	if(gender=="남"){
		profile.src = genderM;
	}
	else{
		profile.src = genderW;
	}
	getId.innerHTML = id; 
	reviewCount.innerHTML = " "+count; 
	reviewDateCreate.innerHTML = "CREATE - "+createdate; 
	reviewDateUpdate.innerHTML = "UPDATE - "+update; 
	textName.value = title;
	textContent.value = content; 
}

function createPlace(title,placeimg,dataname,placename,gender,id,count,createdate,update,content){	
	dataImg.src = placeimg;
	ListViewTitBox.innerHTML = `								
                    			<p class="reviewTitleTag fs18 mb10"><i class="fa fa-location-arrow" style="color:#fff;"> ${dataname}</i></p>
                    			<p class="reviewTitleTag2 fs18 mb10"><i class="fa fa-location-arrow" style="color:#fff;"> ${placename}</i></p>
                    			<p class="reviewTitle fs20 fwb ">${title}</p>     
								`;
	if(gender=="남"){
		profile.src = genderM;
	}
	else{
		profile.src = genderW;
	}
	getId.innerHTML = id; 
	reviewCount.innerHTML = " "+count; 
	reviewDateCreate.innerHTML = "CREATE - "+createdate; 
	reviewDateUpdate.innerHTML = "UPDATE - "+update; 
	textName.value = title;
	textContent.value = content; 
}