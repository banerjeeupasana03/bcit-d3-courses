function Changemode(){
  document.querySelector("#day_mode_btn").addEventListener("click", function(){
    var nightClass = Array.from(document.getElementsByClassName("night"));
    var x = 0;
    for(x = 0; x < nightClass.length; x++){
      nightClass[x].classList.add("day");
      nightClass[x].classList.remove("night");
    }
    document.querySelector(".arrow_right_image").classList.add("arrow_right_bg_image_day");
    document.querySelector(".arrow_right_image").classList.remove("arrow_right_bg_image_night");
    document.querySelector(".arrow_left_image").classList.add("arrow_left_bg_image_day");
    document.querySelector(".arrow_left_image").classList.remove("arrow_left_bg_image_night");
  });
  
  document.querySelector("#night_mode_btn").addEventListener("click", function(){
    var dayClass = Array.from(document.getElementsByClassName("day"));
    var x = 0;
    for(x = 0; x < dayClass.length; x++){
      dayClass[x].classList.add("night");
      dayClass[x].classList.remove("day");
    }
    document.querySelector(".arrow_right_image").classList.add("arrow_right_bg_image_night");
    document.querySelector(".arrow_right_image").classList.remove("arrow_right_bg_image_day");
    document.querySelector(".arrow_left_image").classList.add("arrow_left_bg_image_night");
    document.querySelector(".arrow_left_image").classList.remove("arrow_left_bg_image_day");
  });
};