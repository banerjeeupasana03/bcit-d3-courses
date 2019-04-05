//state variables

var package = {
  mleft: 0,
  mop:1
}
//program dictionaries: mleft is the word, 0 is the value
//var mleft = 0,
//    mop = 1;

function CloseMenu(){
  obsVars.mleft = -100;
  obsVars.mop = 0;
}

function OpenMenu(){
  obsVars.mleft = 0;
  obsVars.mop = 1;
}

function ChangeOpacity(){
  var val = document.querySelector("#opInp").value;
  val = parseInt(val);
  if(val>1){
    val = val/100;
    obsVars.mop = val;
  } else {
    obsVars.mop = document.querySelector("#opInp").value;
  }
//  obsVars.mop = document.querySelector("#opInp").value;
}

//BELOW IS FOR ALL THE STATE TO UI CONNECTIONS
var mmenu = document.querySelector("#menu");
var PackChange = {
  set:function(obj, prop, value){
//something has changed in the package}
    console.log(obj, prop, value);
    if(prop == "mleft"){
      //do something to the UI's left
//      console.log(obj, prop, value);
      mmenu.style.left= value + "px";
}
    if(prop == "mop"){
      //do something to the UI's opacity
//      console.log("yes!");
      mmenu.style.opacity= value
    }
}
}

//PROXY
//Proxy(whatToObserve, whatToDo)
var obsVars = new Proxy(package, PackChange);