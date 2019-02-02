var keyInp = document.querySelector("#keyword"), //for getting what they typed later
    sendBut = document.querySelector("#send"), //for detecting click
    statusDiv = document.querySelector("#status"); //displaying what they typed

var keyword = "";

sendBut.addEventListener("click", function() {
  keyword = keyInp.value;
  if(keyword == "shat"){
    statusDiv.innerText = "STOP!";
    } else if(keyword == "dog") {
      statusDiv.innerHTML = "<img src='https://img.huffingtonpost.com/asset/5b7fdeab1900001d035028dc.jpeg?cache=sixpwrbb1s&ops=1910_1000' />"; //html shows the html element but text just ignores it.
    }else {
      statusDiv.innerText = "You've typed "+keyInp.value;
  }
//  statusDiv.innerText = "You've typed " + keyInp.value;
});
