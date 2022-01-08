$(document).ready(function () {
  $(window).scroll(function (e) {
    var scr = $(window).scrollTop();
    var h = $(document).height();
    $(".nav").css("background-size", "auto " + h + "px");
    $(".nav").css("background-position", "0px -" + scr + "px");
  });
});
