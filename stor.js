
$(".plus").on("click", function () {
  let quty = Number($(this).parents("td").find(".quty-number").text())+1 ;
  console.log(quty)
  $(this).parents("td").find(".quty-number").text(quty);
});
$(".miuns").on("click", function () {
  if(Number($(".quty-number").text())>0){
    let quty = Number($(this).parents("td").find(".quty-number").text())-1 ;
    console.log(quty)
    $(this).parents("td").find(".quty-number").text(quty);
  }
});
/**********  تخزين المنتج **************** */

if (localStorage.product != null) {
  db = JSON.parse(localStorage.product);
} else {
  db = [];
}
/*show data */
function showdata() {
  for (let i = 0; i <= db.length; i++) {
    $(
      `
      <tr>
      <td><img src="${db[i].img}"></td>
      <td><span>${db[i].name}</span></td>
      <td><span>${db[i].price}</td>
      <td><span class="quty-number">1</span><span class="Quantity"><button class="plus">+</button><button class="miuns">-</button></span></td>
      <td><button class="btn btn-dark "     onclick=delet(${i})>delet</button></td>
  </tr>
      `
    ).appendTo("table");
  }
}
/********* */
/******* delet function  */
function delet(i) {
  db.splice(i, 1);
  localStorage.setItem("product", JSON.stringify(db));
  db = JSON.parse(localStorage.product);
  $("tr td ").remove();
  showdata();
}
function buy(i) {
  $(".popap").fadeIn(300);
  $("body").on("click", ".popap", function () {
    $(".popap").fadeOut();
  });

  $(".popap").on("click", ".closeBtn", function () {
    $(".popap").fadeOut();
  });
  delet(i);
}
showdata();

/***************************** */
