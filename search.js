$(document).ready(function () {
  let i = 0;
  $(".search-logo").click(function () {
    i++;
    if (i % 2 == 1) {
      $(".search-blog").animate({ right: "+=350px" });
    } else {
      $(".search-blog").animate({ right: "-=350px" });
    }
  });

  $(".search-blog input[type='text']").on("keyup", function (e) {
    if (e.keyCode === 13) {
      $(this).blur();
      $(".search-blog button ").click();
      $(this).val(" ");
      $(".search-logo").click();
    }
  });
});
