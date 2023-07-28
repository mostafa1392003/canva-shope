$(document).ready(function () {
    let i = 1;
  $(".search-logo").click(function () {
    i++;
    if (i % 2 == 0) {
      $(".search-blog").animate({
        right: "+=350px",
      });
    } else {
        $(".search-blog").animate({
            right: "-=350px",
          });
    }
  });

});
