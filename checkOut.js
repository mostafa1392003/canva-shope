$(document).ready(function () {
  $(".Quantity input").focus();
  let s = 0;
  $(".Quantity input").change(function () {
    if ($(this).val() <= 0) {
      $(this).val(0);
    }
  });
  let sum = 0;
  let total = 0;
  $(".price span ").each(function () {
    sum += Number($(this).text());
  });
  $(".subTotal").text(sum);
  total = sum - Number($(".discount").text()) + Number($(".shipping").text());
  console.log(total);
  $(".total").text(total);

  /* btn code */
  let e = 0 ;
  $(".check-out-ptn").click(function () {
    if (e%2===0){
$(this)
      .text(" ")
      .fadeIn(200, function () {
        $(this)
          .text("done")
          .css("background-color", "green");
      });

    }
    else
    {
        $(this)
        .text(" ")
        .fadeIn(200, function () {
          $(this)
            .text("checkout")
            .css("background-color", "#0d6efd");
        });
   

    }
    e++;
});
});