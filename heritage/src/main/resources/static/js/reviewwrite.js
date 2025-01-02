let ListViewTitBox = document.querySelector(".ListView-tit-box");
let dataImg = document.querySelector(".data-img");
let reviewFormBtn = document.querySelector(".reviewFormBtn");
let textName = document.querySelector("#text-name");
let textContent = document.querySelector("#text-content");

let loadPage = location.search;
let setParam;

setParam = getParams();	
if(setParam.review=="data"){	
	getData(setParam.datacode);
}
else if(setParam.review=="place"){
	getPlace(setParam.datacode,setParam.place,setParam.placeid);
}

reviewFormBtn.onclick = () => {		
	if(textName.value==""){
		alert("제목을 입력해주세요.");
	}	
	else if(textContent.value==""){
		alert("내용을 입력해주세요.");
	}		
	else{
		if(user!=null){
			if(setParam.review=="data"){	
				saveData(setParam.datacode,user.user_id,textName.value,textContent.value);	
				if(setParam.category=="data"){
					location.href = `http://localhost:8000/heritage/map?category=data&type=${setParam.type}&sort=${setParam.sort}&searchName=${setParam.searchName}&index=${setParam.index}`;		
				}
				else{
					location.href = `http://localhost:8000/heritage/map?category=option&sort=${setParam.sort}&address=${setParam.address}&divide=${setParam.divide}&period=${setParam.period}&group=${setParam.group}&index=${setParam.index}`;								
				}				
			}
			else if(setParam.review=="place"){	
				savePlace(setParam.datacode,setParam.placeid,user.user_id,textName.value,textContent.value);	
				if(setParam.category=="data"){
					location.href = `http://localhost:8000/heritage/map?category=data&type=${setParam.type}&sort=${setParam.sort}&searchName=${setParam.searchName}&index=${setParam.index}`;		
				}
				else{
					location.href = `http://localhost:8000/heritage/map?category=option&sort=${setParam.sort}&address=${setParam.address}&divide=${setParam.divide}&period=${setParam.period}&group=${setParam.group}&index=${setParam.index}`;								
				}					
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

function getData(dataCode){	
    $.ajax({
        type: "GET",
        async:false,
        url: `/api/v1/review/load/data`,        
        data: {
			dataCode: dataCode
        },		  	
        success: (Response) =>{			
			createData(Response.data.data_img,Response.data.data_koname);
        },
        error:errorMessage
    })
}

function saveData(dataCode,userId,reviewName,reviewContent){	
    $.ajax({
        type: "POST",
        async:false,
        url: `/api/v1/review/save/data`,        
        data: {
			dataCode: dataCode,
			userId : userId,
			reviewName : reviewName,
			reviewContent : reviewContent
        },		  	
        success: (Response) =>{					
			console.log(Response.data);			
        },
        error:errorMessage
    })
}

function getPlace(dataCode,place,placeId){	
    $.ajax({
        type: "GET",
        async:false,
        url: `/api/v1/review/load/place`,        
        data: {
			dataCode: dataCode,
			place : place,
			placeId : placeId
        },		  	
        success: (Response) =>{				
			createPlace(Response.data.place_img,Response.data.place_name,Response.data.data_koname);		
        },
        error:errorMessage
    })
}

function savePlace(dataCode,placeId,userId,reviewName,reviewContent){	
    $.ajax({
        type: "POST",
        async:false,
        url: `/api/v1/review/save/place`,        
        data: {
			dataCode: dataCode,			
			placeId : placeId,
			userId : userId,
			reviewName : reviewName,
			reviewContent : reviewContent
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

function createData(dataimg,dataname){	
	dataImg.src = dataimg;
	ListViewTitBox.innerHTML = `<p class="reviewTitleTag fs18 mb10"><i class="fa fa-location-arrow" style="color:#fff;"> ${dataname}</i></p>
								<p class="reviewTitle fs20 fwb ">${dataname}에 관한 후기글을 작성해 주세요.</p>  `;
}

function createPlace(placeImg,placename,dataname){	
	dataImg.src = placeImg;
	ListViewTitBox.innerHTML = `<p class="reviewTitleTag fs18 mb10"><i class="fa fa-location-arrow" style="color:#fff;"> ${dataname}</i></p>
								<p class="reviewTitleTag2 fs18 mb10"><i class="fa fa-location-arrow" style="color:#fff;"> ${placename}</i></p>
								<p class="reviewTitle fs20 fwb ">[${dataname}] ${placename}에 관한 후기글을 작성해 주세요.</p>  `;
}