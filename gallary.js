$(document).ready(function () {
  let MinimizedPicture = $(".aside-img").children().length;
  $(".aside-img div ").css("width", 96 / MinimizedPicture + "%");
  /*click img */
  $(".aside-img div").each(function () {
    $(this).click(function () {
      $(".mainImg").attr("src", $(this).find("img").attr("src"));
      $(this).addClass("activee");
      $(this).siblings().removeClass("activee");
    });
  });
  /***************************** */
  $(".main-img i:first-of-type").on("click", function () {
    if ($(".activee").is(":last-child")) {
      $(".aside-img  div ").eq(0).click();
    } else {
      $(".activee").next().click();
    }
  });

  /************************** */
  $(".main-img i:last-of-type").on("click", function () {
    if ($(".activee").is(":first-child")) {
      $(".aside-img img:last").click();
    } else {
      $(".activee").prev().click();
    }
  });
});
/*************************************************************************** */
$("#positive").click(function () {
  let n = Number($("#number").text());
  n++;
  $("#number").text(n);
  tprice(n)
});
/******************************* */
$("#negative").click(function () {
  let n = Number($("#number").text());
  if (n > 0) {
    n--;
  }

  $("#number").text(n);
  tprice(n)
});
/*************toggel btn  */
$(".seelBtn").on("click", function () {
  if ($(this).find("i").hasClass("clicked")) {
    $(this)
      .find("span")
      .hide(300)
      .delay(400)
      .text("Add to cart")
      .show(300,function(){
        $(".seelBtn").css("background-color","#6c757d")
      });
    $(this).find("i").animate(
      {
        right: "0px",
      },
      1100
    );
  } else {
    $(this).find("span").hide(300).delay(400).text("done").show(300,function(){
      $(".seelBtn").css("background-color","#198754")
    });
    $(this).find("i").animate(
      {
        right: "-150px",
      },
      1100
    );
  }
  $(this).find("i").toggleClass("clicked");
});
0;
/************************** */
function tprice(n){
  let totalPrice =Number($(".pro-price").text()) * n; 
$(".tprice").text(totalPrice);
}
