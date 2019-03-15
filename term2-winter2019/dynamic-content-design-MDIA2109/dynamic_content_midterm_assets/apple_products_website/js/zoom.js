function Zoom(){
  var image = document.querySelector("#image_holder .image_item");
  image.addEventListener("mouseenter", function(){
    if(showMoreState){
      image.classList.add("zoom");
    }
  });
  
  image.addEventListener("mouseout", function(){
    if(showMoreState){
      image.classList.remove("zoom");
    }
  });
};