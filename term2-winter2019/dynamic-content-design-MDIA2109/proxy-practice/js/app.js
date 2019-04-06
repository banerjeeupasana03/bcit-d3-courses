var pkg = {
  hair_dim: 60,
  eyes_dim: 40,
  nose_dim: 20,
  mouth_dim: 20,
  bgcolor: "#FFFFFF",
  hair_num: 0,
  eyes_num: 0,
  nose_num: 0,
  mouth_num: 0,
  random_num: 0
};

var pauseUIChanges = false;

var hairImgSrc = ["img/hair1.png", "img/hair2.png", "img/hair3.png"];
var eyesImgSrc = ["img/eyes1.png", "img/eyes2.png", "img/eyes3.png"];
var noseImgSrc = ["img/nose1.png", "img/nose2.png", "img/nose3.png"];
var mouthImgSrc = ["img/mouth1.png", "img/mouth2.png", "img/mouth3.png"];
var plusBtn = document.querySelector("#add");
plusBtn.addEventListener("click", CreateAva);




////////////////PROXY SETTINGS////////////////
var prox_handler = {
  get: function (obj, prop) {
    return obj[prop];
  },

  set: function (obj, prop, val) {
    obj[prop] = val;

    if (!pauseUIChanges) {
      if (prop == "bgcolor") {
        ChangeBGUI(obj["bgcolor"]);
      } else if (prop == "hair_dim") {
        ChangeHairUI(obj["hair_dim"]);
      } else if (prop == "eyes_dim") {
        ChangeEyesUI(obj["eyes_dim"]);
      } else if (prop == "nose_dim") {
        ChangeNoseUI(obj["nose_dim"]);
      } else if (prop == "mouth_dim") {
        ChangeMouthUI(obj["mouth_dim"]);
      } else if (prop == "hair_num") {
        SwitchHairUI(obj["hair_num"]);
      } else if (prop == "eyes_num") {
        SwitchEyesUI(obj["eyes_num"]);
      } else if (prop == "nose_num") {
        SwitchNoseUI(obj["nose_num"]);
      } else if (prop == "mouth_num") {
        SwitchMouthUI(obj["mouth_num"]);
      } else {
        throw "Dont have any UI interaction for this property"
      }
    } else {
      if (prop == "random_num") {
        ChangeBGUI(obj["bgcolor"]);
        ChangeHairUI(obj["hair_dim"]);
        ChangeEyesUI(obj["eyes_dim"]);
        ChangeNoseUI(obj["nose_dim"]);
        ChangeMouthUI(obj["mouth_dim"]);
        SwitchHairUI(obj["hair_num"]);
        SwitchEyesUI(obj["eyes_num"]);
        SwitchNoseUI(obj["nose_num"]);
        SwitchMouthUI(obj["mouth_num"]);
      }
    }
  }
};

var prox = new Proxy(pkg, prox_handler);


///////////FUNCTIONS THAT CHANGES STATE OF PROXY///////////////////

function ChangeBG(el) {
  prox["bgcolor"] = el.value;
};


function ChangeHair(el) {
  prox["hair_dim"] = el.value;
};

function ChangeEyes(el) {
  prox["eyes_dim"] = el.value;
};

function ChangeNose(el) {
  prox["nose_dim"] = el.value;
};

function ChangeMouth(el) {
  prox["mouth_dim"] = el.value;
};

function SwitchHair(el) {
  prox["hair_num"] = prox["hair_num"] + 1;
}

function SwitchEyes(el) {
  prox["eyes_num"] = prox["eyes_num"] + 1;
}

function SwitchNose(el) {
  prox["nose_num"] = prox["nose_num"] + 1;
}

function SwitchMouth(el) {
  prox["mouth_num"] = prox["mouth_num"] + 1;
}

function CreateAva() {
  var displayDiv = document.querySelector("#display");
  var newDiv = document.createElement("div");
  var previewDiv = document.querySelector("#preview");
  newDiv.innerHTML = previewDiv.innerHTML;
  newDiv.classList.add("avatar");
  displayDiv.appendChild(newDiv);
  var newImages = newDiv.querySelectorAll("img");
  var arr = Array.from(newImages);
  var i;
  for (i = 0; i < arr.length; i++) {
    arr[i].removeAttribute("onclick");
  }
};

function RandomAva() {
  // Pausing UI changes
  pauseUIChanges = true;

  prox["hair_dim"] = GetRandomNumber(70);
  prox["nose_dim"] = GetRandomNumber(30);
  prox["mouth_dim"] = GetRandomNumber(35);
  prox["eyes_dim"] = GetRandomNumber(40);
  // Couldnt figure out how to get a random background color
  // prox["bgcolor"] = 60;
  prox["hair_num"] = GetRandomNumber(hairImgSrc.length - 1);
  prox["eyes_num"] = GetRandomNumber(eyesImgSrc.length - 1);
  prox["nose_num"] = GetRandomNumber(noseImgSrc.length - 1);
  prox["mouth_num"] = GetRandomNumber(mouthImgSrc.length - 1);
  prox["random_num"] = GetRandomNumber(1000000);

  // Unpause UI changes
  pauseUIChanges = false;
};

///////////FUNCTIONS THAT CHANGES UI///////////////////

function ChangeBGUI(val) {
  var previewDiv = document.querySelector("#preview");
  previewDiv.style.backgroundColor = val;
};

function ChangeHairUI(val) {
  var hairImage = document.querySelector("#hair");
  hairImage.style.width = val + "px";
};

function ChangeEyesUI(val) {
  var eyesImage = document.querySelector("#eyes");
  eyesImage.style.width = val + "px";
};

function ChangeNoseUI(val) {
  var noseImage = document.querySelector("#nose");
  noseImage.style.width = val + "px";
};

function ChangeMouthUI(val) {
  var mouthImage = document.querySelector("#mouth");
  mouthImage.style.width = val + "px";
};

function SwitchHairUI(val) {
  var hairImage = document.querySelector("#hair");
  var position = val % hairImgSrc.length;
  hairImage.src = hairImgSrc[position];
};

function SwitchEyesUI(val) {
  var eyesImage = document.querySelector("#eyes");
  var position = val % eyesImgSrc.length;
  eyesImage.src = eyesImgSrc[position];
};

function SwitchNoseUI(val) {
  var noseImage = document.querySelector("#nose");
  var position = val % noseImgSrc.length;
  noseImage.src = noseImgSrc[position];
};

function SwitchMouthUI(val) {
  var mouthImage = document.querySelector("#mouth");
  var position = val % mouthImgSrc.length;
  mouthImage.src = mouthImgSrc[position];
};

///////////HELPER FUNCTIONS///////////////////

function GetRandomNumber(maxNum) {
  return Math.floor(Math.random() * Math.floor(maxNum));
}
