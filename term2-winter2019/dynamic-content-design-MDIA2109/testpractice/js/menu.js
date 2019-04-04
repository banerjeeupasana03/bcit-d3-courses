function menu() {
  var closeBtn = Array.from(document.getElementsByName("close"))[0];
  var openBtn = Array.from(document.getElementsByName("open"))[0];

  var openBtnClickFn = function(ev) {
    var menudiv = document.getElementById("menu");
    menudiv.style.left = "0px";
  };

  var closeBtnClickFn = function(ev) {
    var menudiv = document.getElementById("menu");
    menudiv.style.left = "-110px";
  };

  openBtn.addEventListener("click", openBtnClickFn);

  closeBtn.addEventListener("click", closeBtnClickFn);
};
menu();
