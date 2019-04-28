function ScaleImage() {
  var myImage = document.querySelector("#myimage");
  myImage.addEventListener("mouseenter", function () {
    myImage.style.transform = "scale(1.5,1.5)";
  });
  myImage.addEventListener("mouseout", function () {
    myImage.style.transform = "scale(1,1)";
  });
}
