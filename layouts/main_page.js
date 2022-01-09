$(document).ready(function () {
  $(window).scroll(function (e) {
    var scr = $(window).scrollTop();
    var h = $(document).height();
    $(".nav").css("background-size", "auto " + h + "px");
    $(".nav").css("background-position", "0px -" + scr + "px");
  });
});

function openForm() {
  document.getElementById("loginForm").style.display = "block";
}

function closeForm() {
  document.getElementById("loginForm").style.display = "none";
}

function toggleForm() {
  if (document.getElementById("loginForm").style.display == "none") {
    document.getElementById("loginForm").style.display = "block";
  } else {
    document.getElementById("loginForm").style.display = "none";
  }
}
