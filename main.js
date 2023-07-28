/******************************************media section ******************************************/

$(document).ready(function () {
  $(".for-media").each(function () {
    if($(this).css("opacity")<1){
  $(this).data('wow-delay',"0s");
  $(this).data('wow-duration', "0s");
  $(this).data('wow-offset', "0");
    console.log($(this).data('wow-delay'))
    }
    
    
  });
});
/***************************************end media section ******************************************/



/* ****************nav bar************************************* */
const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => nav.classList.toggle("activen"));

/**********************************************on scroll********************************************/

/*end  on scroll*/

/*  end nav bar */

/************************ * الجزء بتاع البيع **************************************/
let cuont = 0;
let db;
let chart={};
if (localStorage.product != null) {
  db = JSON.parse(localStorage.product);
} else {
  db = [];
}
$(".card  button ").each(function () {
  $(this).click(function (e) {
    e.preventDefault();
    $(this).children(".fa-cart-shopping").toggle(300);
    $(this).children(".fa-check").toggle(300);
    cuont++;
   chart = {
      name: $(this).parents(".card").find("h5").text(),
      img: $(this).parents(".card").find("img").attr("src"),
      price: $(this).parents(".card").find(".btnchart span").text(),
    };
  

    db.push(chart);
    localStorage.setItem("product", JSON.stringify(db));
  });
});

/******************* */

/*الجزء الخاص بعرض المنتجات */
