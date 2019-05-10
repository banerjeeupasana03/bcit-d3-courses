var pkgdata = window.localStorage.getItem("pkgData");
var pkg;
if (pkgdata != null && pkgdata != undefined) {
  pkg = JSON.parse(pkgdata);
} else {
  pkg = {
    fontSize: 5,
    imgDim: 50,
    imgUrl: "",
    msg: "",
    bgColor: "",
    fontColor: "",
    status: ""
  };
}


var handler = {
  get: function (obj, prop) {
    return obj[prop];
  },
  set: function (obj, prop, value) {
    obj[prop] = value;
    var jsonString = JSON.stringify(obj);
    window.localStorage.setItem("pkgData", jsonString);
    ChangePreviewUI(prop, value);
  }
}

var prox = new Proxy(pkg, handler);

function ChangePreview(el) {
  if (el.id == "fontSize") {
    prox["fontSize"] = el.value;
  }
  if (el.id == "imgDim") {
    prox["imgDim"] = el.value;
  }
  if (el.id == "imgUrl") {
    prox["imgUrl"] = el.value;
  }
  if (el.id == "msg") {
    prox["msg"] = el.value;
  }
  if (el.id == "bgColor") {
    prox["bgColor"] = el.value;
  }
  if (el.id == "fontColor") {
    prox["fontColor"] = el.value;
  }

  if (prox["fontSize"] > 50) {
    prox["status"] = "Your fonts are too big, use a smaller size";
  }
}



function ChangePreviewUI(property, val) {

  var imageElement = document.getElementById("previewImg");
  var messageSpan = document.getElementById("previewMsg");
  var previewDiv = document.getElementById("preview");
  var statusDiv = document.getElementById("status");
  
  if (property == "bgColor") {
    previewDiv.style.backgroundColor = val;
  }
  if (property == "msg") {
    messageSpan.innerHTML = val;
  }
  if (property == "fontSize") {
    messageSpan.style.fontSize = val + "pt";
  }
  if (property == "imgUrl") {
    console.log(property, val);
    imageElement.src = val;
  }
  if (property == "imgDim") {
    imageElement.style.width = val + "px";
    imageElement.style.height = val + "px";
  }
  if (property == "fontColor") {
    console.log(property, val);
    messageSpan.style.color = val;
  }
  if (property == "status") {
    statusDiv.innerHTML = val;
  }
}


function MakeClone() {
  var boardDiv = document.getElementById("board");
  var previewDiv = document.getElementById("preview");


  var newDivInsideBoardDiv = document.createElement("div");
  newDivInsideBoardDiv.innerHTML = previewDiv.innerHTML;
  newDivInsideBoardDiv.style.backgroundColor = previewDiv.style.backgroundColor;
  boardDiv.appendChild(newDivInsideBoardDiv);
}

function DrawInitialUiState() {
  ChangePreviewUI("bgColor", prox["bgColor"]);
  ChangePreviewUI("fontSize", prox["fontSize"]);
  ChangePreviewUI("imgDim", prox["imgDim"]);
  ChangePreviewUI("imgUrl", prox["imgUrl"]);
  ChangePreviewUI("msg", prox["msg"]);
  ChangePreviewUI("fontColor", prox["fontColor"]);
  ChangePreviewUI("status", prox["status"]);
}
DrawInitialUiState();
