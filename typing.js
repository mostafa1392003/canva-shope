/*  بدايه تاثير الكتابه  */
function typingIntrval(selector, dataAtrr, time) {
    let text = $(selector).data(dataAtrr);
    let counter = $(selector).data(dataAtrr).length;
    let n = 0;
  
    let typing = setInterval(function () {
      $(selector).each(function (e) {
        $(this).html($(this).html() + text[n]);
      });
      n++;
      if (n >= counter) {
        clearInterval(typing);
      }
    }, time);
  }
  typingIntrval(".interval2", "interval", 90);
  var s = setTimeout(function () {
    typingIntrval(".interval3", "interval", 90);
  }, 1540);
  
  /*  نهايه  تاثير الكتابه  */