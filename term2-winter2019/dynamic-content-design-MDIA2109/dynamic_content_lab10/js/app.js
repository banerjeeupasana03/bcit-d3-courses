//var pw = document.querySelector("#pw"),
//    mstatus = document.querySelector("#status");
//
//function KeyUp(){
//  CheckLength();
//  CheckNumber();
//  CheckCapitals();
//  CheckSpecials();
//}
//
//function CheckLength(){
//  //checks the number of characters in the input value
//  console.log("checking length");
//  var val = pw.value;
//  console.log(val.length);
//  if(val.length >= 10) {
//    mstatus.innerText = "Long Enough";
//  } else {
//    mstatus.innerText = "Too Short";
//  }
//}
//
//function CheckNumber(){
//  //checks the amount of numbers that the input can take
//  CheckChars("1234567890", "You need numbers");
// var val = pw.value,
//      cnum = 0,
//      ind = 0;
//  
//  var charsToCheck = "1234567890";
//  while (ind < 10){
//  var isIn = val.includes(charsToCheck[ind]);
//  if(isIn == true){
//    cnum++;
//
//  } 
//  ind++;
//  };
//  
//  if(cnum > 0){
//    mstatus.innerText = "Your password is secure";
//  } else {
//    mstatus.innerText = "You need numbers";
//  }
//} 
//
//
//function CheckCapitals(){
//  //checks the amount of cap chars there are
//  CheckChars("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "You need caps");
//  var val = pw.value,
//      cnum = 0,
//      ind = 0;
//  
//  var charsToCheck = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
////console.log(charsToCheck[0], charsToCheck[1], charsToCheck[2]);
// 
//  //0 -> A
//  while (ind < 26){
//  var isIn = val.includes(charsToCheck[ind]);
//  if(isIn == true){
//    cnum++;
////mstatus.innerText = "Your password is secure";
//  } 
//  ind++;
//  };
//  
//  if(cnum > 0){
//    mstatus.innerText = "Your password is secure";
//  } else {
//    mstatus.innerText = "You need caps";
//  }
//}
//
//function CheckSpecials(){
//  //checks the amount of special chars there are
//  CheckChars("!@#$%", "You need specials");
//  
//  var val = pw.value,
//      cnum = 0,
//      ind = 0;
//  
//  var charsToCheck = "!@#$%";
//  while (ind < 5){
//  var isIn = val.includes(charsToCheck[ind]);
//  if(isIn == true){
//    cnum++;
//
//  } 
//  ind++;
//  };
//  
//  if(cnum > 0){
//    mstatus.innerText = "Your password is secure";
//  } else {
//    mstatus.innerText = "You need specials";
//  }
//}
//
//function CheckChars(charsToCheck, statusString){
//  var val = pw.value,
//      cnum = 0,
//      ind = 0;
//  
//  while (ind < 26){
//  var isIn = val.includes(charsToCheck[ind]);
//  if(isIn == true){
//    cnum++;
//
//  } 
//  ind++;
//  };
//  
//  if(cnum > 0){
//    mstatus.innerText = "Your password is secure";
//  } else {
//    mstatus.innerText = "You need numbers";
//  }
//} 
/*========STATES===========*/
var pkg = {
  stext:""
};
var pw = document.querySelector("#pw");

/*=======PROXY - Watchers/Observers=========*/
var handler = {
  set:function(obj, props, value){
    //something in the pkg has changed! SET()
    if(props == "stext"){
      //change the <UI> status
      ChangeStatusText(value);
    }
    
  }
}

var wpkg = new Proxy(pkg, handler);

/*=======FUNCTIONS THAT CHANGES THE STATES========*/
function KeyUp(){
  var val = pw.value;
//  if(val.length > 8){
//    wpkg.stext = "Your password is secured";
//  } else {
//    wpkg.stext = "Not long enough";
//  }
//  /*wpkg.stext = "You've typed nothing";*/
  var errortxt = "";
  errortxt = CheckLength(val);
  if(errortxt == true){
  errortxt = CheckChars(val, "1234567890", "Not enough Numbers");
    if(errortxt == true){
      errortxt = CheckChars(val, "!@#*%", "Not enough specials");
      if(errortxt == true){
        errortxt = CheckChars(val, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "Not enough capitals");
      }
    }
  }
  
  if(typeof errortxt == "string"){
    wpkg.stext = errortxt;
  } else {
    wpkg.stext = "Your password is secured"
  }
}
//CheckChars("abcd123, "1234567890")

function CheckLength(str){
  if(str.length <= 8){
    return "Not long Enough";
  } else {
    return true;
  }
}
//CheckChars("abcd123, "1234567890")
function CheckChars(str, charsToCheck, statusString){
//  var val = pw.value,
    var cnum = 0,
      ind = 0;
  //var charsToCheck = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //console.log(charsToCheck[0], charsToCheck[1], charsToCheck[2]);
  //0 -> A
  
  while (ind < 26){
  var isIn = str.includes(charsToCheck[ind]);
  if(isIn == true){
    cnum++;

  } 
  ind++;
  };
  
  if(cnum > 0){
   //yay:numbers in password
    return true;
    
  } else {
   return statusString
  }
} 

/*==========FUNCTIONS THAT CHANGES THE UI=========*/
 function ChangeStatusText(text){
   document.querySelector("#status").innerHTML = text;
 } 
// Should remember and understand the algorithms. What is more important is th eseparation and organization of the various elements and functions. The architecture is what that matters the most//
