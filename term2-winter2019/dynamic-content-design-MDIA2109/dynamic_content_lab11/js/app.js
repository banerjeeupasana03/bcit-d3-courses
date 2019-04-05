//====STATE VAR
var pkg = {
  name: "Name 1",
  bgcolor: "#DDD",
  txtcolor:"#333",
  dim:150
}



//====PROXY SETUP

var handle = {
  set:function(obj, props, value){
    if(props == "name"){
      //change span name UI innerText
      ChangeNameUI(value, "n");
    }
    
    if(props == "bgcolor"){
      //change nametag Div UI style's background color
      ChangeNameUI(value, "b");
    }
    
    if(props == "txtcolor"){
      //change nametag text span to UI style's color
      ChangeNameUI(value, "c");
    }
    
    if(props == "dim"){
      //change nametag div UI style's width and height
      ChangeNameUI(value, "d");
    }
  }
}

var proxPkg = new Proxy(pkg, handle);


//====CHANGE STATE FUNC
function ChangeNamePkg(el){
//  console.log(el);
//  var nameInpVal = document.querySelector("#nameInp").value;
  proxPkg.name = el.value;
  
}
function ChangeBGPkg(el){
  proxPkg.bgcolor = el.value;
}

function ChangeColorPkg(el){
  proxPkg.txtcolor = el.value;
}

function ChangeDimPkg(el){
  proxPkg.dim = el.value;
}

function SendTag(){
  console.log(proxPkg);
}




//====CHANGE UI FUNC
function ChangeNameUI(val, mpart){
  var namespan = document.querySelector("#previewtext");
  var nameDiv = document.querySelector("#previewBox")
//  namespan.innerText = val;
  
  if(mpart == "n"){
    namespan.innerText = val;
  }
  
  if(mpart == "c"){
    namespan.style.color = val;
  }
  
  if(mpart == "b"){
    nameDiv.style.backgroundColor = val;
  }
  
  if(mpart == "d"){
    nameDiv.style.width = val + "px";
    nameDiv.style.height = val + "px";
  }
}

//test function
//ChangeNameTextUI("My name");
//ChangeNameUI("New Name!", "n");
//ChangeNameUI("purple", "c");
//ChangeNameUI("", "b");
//ChangeNameUI("100px", "d");