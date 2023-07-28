$(document).ready(function () {
  $(".navBar").css("background-color", "transparent");
  $(".navBar").css("box-shadow", "none");
   $(".navToggel ul a ").css("color", "#eaeaea");
  let m = 0;
  $(window).on("scroll", function () {
    var s = window.scrollY;
    if (s > m) {
      $(".navBar").slideUp(400);
    } else {
      $(".navBar").slideDown(400);
    }
    m = s;

    if (window.scrollY < 200) {
      $(".navBar").css("background-color", "transparent");
      $(".navBar").css("box-shadow", "none");
      $(".navToggel ul a ").css("color", "#eaeaea");
    } else {
      $(".navBar").css("background-color", "#fff");
      $(".navBar").css("box-shadow", "0px 3px 20px -5px #d2d2d2");
   $(".navToggel ul a ").css("color", "#444");

    }
  });
});
