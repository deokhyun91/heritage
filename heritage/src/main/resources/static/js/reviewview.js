let ListViewTitBox = document.querySelector(".ListView-tit-box");
let dataImg = document.querySelector(".data-img");
let profile = document.querySelector(".profile");
let getId = document.querySelector("#get-id");
let reviewCount = document.querySelector("#review-count");
let reviewDateCreate = document.querySelector("#review-date-create");
let reviewDateUpdate = document.querySelector("#review-date-update");
let reviewContent = document.querySelector(".reviewContent");
let reviewListView = document.querySelector(".ListView-op-right");

let genderM = "/static/img/profileM.png";
let genderW = "/static/img/profileW.png";

let loadPage = location.search;
let setParam;

setParam = getParams();	
if(setParam.category=="data"){	
	getData(setParam.code);	
}
else{	
	getPlace(setParam.category,setParam.code);
}

reviewListView.onclick = () => {			
	location.href = `http://localhost:8000/heritage/reviewList?category=${setParam.category}&type=${setParam.type}&sort=${setParam.sort}&searchName=${setParam.searchName}&index=${setParam.index}`
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
        url: `/api/v1/review/dataview`,        
        data: {
			code: code
        },		  	
        success: (Response) =>{					
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

function getPlace(place,code){	
    $.ajax({
        type: "GET",
        async:false,
        url: `/api/v1/review/placeview`,        
        data: {
			place : place,
			code: code
        },		  	
        success: (Response) =>{	
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
	reviewContent.innerHTML = content; 
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
	reviewContent.innerHTML = content; 
}