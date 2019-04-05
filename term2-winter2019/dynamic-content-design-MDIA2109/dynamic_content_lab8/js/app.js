var pw = document.querySelector("#pw"),
    mstatus = document.querySelector("#status");

function KeyUp(){
  CheckLength();
  CheckNumber();
  CheckCapitals();
  CheckSpecials();
}

function CheckLength(){
  //checks the number of characters in the input value
  console.log("checking length");
  var val = pw.value;
  console.log(val.length);
  if(val.length >= 10) {
    mstatus.innerText = "Long Enough";
  } else {
    mstatus.innerText = "Too Short";
  }
}

function CheckNumber(){
  //checks the amount of numbers that the input can take
  CheckChars("1234567890", "You need numbers");
 var val = pw.value,
      cnum = 0,
      ind = 0;
  
  var charsToCheck = "1234567890";
  while (ind < 10){
  var isIn = val.includes(charsToCheck[ind]);
  if(isIn == true){
    cnum++;

  } 
  ind++;
  };
  
  if(cnum > 0){
    mstatus.innerText = "Your password is secure";
  } else {
    mstatus.innerText = "You need numbers";
  }
} 


function CheckCapitals(){
  //checks the amount of cap chars there are
  CheckChars("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "You need caps");
  var val = pw.value,
      cnum = 0,
      ind = 0;
  
  var charsToCheck = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//console.log(charsToCheck[0], charsToCheck[1], charsToCheck[2]);
 
  //0 -> A
  while (ind < 26){
  var isIn = val.includes(charsToCheck[ind]);
  if(isIn == true){
    cnum++;
//mstatus.innerText = "Your password is secure";
  } 
  ind++;
  };
  
  if(cnum > 0){
    mstatus.innerText = "Your password is secure";
  } else {
    mstatus.innerText = "You need caps";
  }
}

function CheckSpecials(){
  //checks the amount of special chars there are
  CheckChars("!@#$%", "You need specials");
  
  var val = pw.value,
      cnum = 0,
      ind = 0;
  
  var charsToCheck = "!@#$%";
  while (ind < 5){
  var isIn = val.includes(charsToCheck[ind]);
  if(isIn == true){
    cnum++;

  } 
  ind++;
  };
  
  if(cnum > 0){
    mstatus.innerText = "Your password is secure";
  } else {
    mstatus.innerText = "You need specials";
  }
}

function CheckChars(charsToCheck, statusString){
  var val = pw.value,
      cnum = 0,
      ind = 0;
  
  while (ind < 26){
  var isIn = val.includes(charsToCheck[ind]);
  if(isIn == true){
    cnum++;

  } 
  ind++;
  };
  
  if(cnum > 0){
    mstatus.innerText = "Your password is secure";
  } else {
    mstatus.innerText = "You need numbers";
  }
} 

  
