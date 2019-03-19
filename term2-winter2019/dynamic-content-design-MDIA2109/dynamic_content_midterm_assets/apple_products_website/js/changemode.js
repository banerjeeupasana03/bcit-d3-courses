function Changemode(){
  document.querySelector("#day_mode_btn").addEventListener("click", function(){
    var nightClass = $(".night");
    var x = 0;
    for(x = 0; x < nightClass.length; x++){
      $(nightClass[x]).addClass("day");
      $(nightClass[x]).removeClass("night");
    }
    $(".arrow_right_image").addClass("arrow_right_bg_image_day");
    $(".arrow_right_image").removeClass("arrow_right_bg_image_night");
    $(".arrow_left_image").addClass("arrow_left_bg_image_day");
    $(".arrow_left_image").removeClass("arrow_left_bg_image_night");
  });
  
  $("#night_mode_btn").click(function(){
    var dayClass = $(".day");
    var x = 0;
    for(x = 0; x < dayClass.length; x++){
      $(dayClass[x]).addClass("night");
      $(dayClass[x]).removeClass("day");
    }
    $(".arrow_right_image").addClass("arrow_right_bg_image_night");
    $(".arrow_right_image").removeClass("arrow_right_bg_image_day");
    $(".arrow_left_image").addClass("arrow_left_bg_image_night");
    $(".arrow_left_image").removeClass("arrow_left_bg_image_day");
  });
};