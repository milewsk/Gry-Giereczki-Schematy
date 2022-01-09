$(document).ready(function () {
  $(window).scroll(function (e) {
    var scr = $(window).scrollTop();
    var h = $(document).height();
    $(".nav").css("background-size", "auto " + h + "px");
    $(".nav").css("background-position", "0px -" + scr + "px");
  });
});

let idList = [
  "userData",
  "editProfile",
  "gameHistory",
  "ranking",
  "userFriends",
  "userAchievements",
];
let idListEdit = ["editPassword", "editDetails", "editDescription"];

function hide() {
  idList.forEach((element) => {
    document.getElementById(element + "Div").style.visibility = "hidden";
    document.getElementById(element + "Div").style.display = "none";
  });
}
var editNav = document.getElementById("editNav");

function show(id) {
  if (id == "editPassword" || id == "editDetails" || id == "editDescription") {
    hideEdit();
    document.getElementById(id + "Div").style.visibility = "visible";
    document.getElementById(id + "Div").style.display = "grid";
  } else {
    hide();
    if (id == "userData") {
      editNav.hidden = true;
      document.getElementById(id + "Div").style.visibility = "visible";
      document.getElementById(id + "Div").style.display = "flex";
    } else if (id == "editProfile") {
      editNav.hidden = false;

      document.getElementById(id + "Div").style.visibility = "visible";
      document.getElementById(id + "Div").style.display = "grid";

      /*peirwsza pocja pokaż*/
      document.getElementById("editPasswordDiv").style.visibility = "visible";
      document.getElementById("editPasswordDiv").style.display = "grid";
      /*reszta ukryj*/
      document.getElementById("editDetailsDiv").style.visibility = "hidden";
      document.getElementById("editDescriptionDiv").style.visibility = "hidden";
    } else {
      editNav.hidden = true;
      document.getElementById(id + "Div").style.visibility = "visible";
      document.getElementById(id + "Div").style.display = "grid";
    }
  }
}

function hideEdit() {
  idListEdit.forEach((element) => {
    document.getElementById(element + "Div").style.visibility = "hidden";
    document.getElementById(element + "Div").style.display = "none";
  });
}

/*
if(document.getElementById("idbuttonAdd").style.visibility = "visible")
{
    document.getElementById("idbuttonAdd").style.visibility = "none";
}

function hidden1(idFuncion)
{
    var elem = document.getElementById(idFuncion);
    elem.hidden = true;
   // document.getElementById("gameHistory").style.visibility = "hidden";
   // document.getElementById("gameHistory").style.display = "none";
   // document.getElementById(idFuncion).style.display = "none";
}
*/

//var elem = document.getElementById("aa");
//   elem.hidden = true;

//var elem = document.getElementById("test");
//elem.style.visibility = 'hidden';
//elem.hidden = true;

// Get the modal
var modal = document.getElementById("buttonInteractionUser");

// Get the button that opens the modal
var addButton = document.getElementById("idButtonAdd");
var blockButton = document.getElementById("idButtonBlock");
var reportButton = document.getElementById("idButtonReport");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var checkBoxReport = document.getElementById("checkBoxReport");
// When the user clicks on the button, open the modal
addButton.onclick = function () {
  checkBoxReport.hidden = true;
  document.getElementById("textBody").innerHTML =
    "Czy na pewno chcesz dodac gracza do znajomych?";
  modal.style.display = "block";
};
blockButton.onclick = function () {
  checkBoxReport.hidden = true;
  document.getElementById("textBody").innerHTML =
    "Czy na pewno chcesz zablokować gracza?!";
  modal.style.display = "block";
};
reportButton.onclick = function () {
  checkBoxReport.hidden = false;
  document.getElementById("textBody").innerHTML = "Wybierz kategorie";
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/* edycja profilu */
function myFunction(myInput, myInput2, myInput3) {
  var x = document.getElementById(myInput);
  var y = document.getElementById(myInput2);
  var z = document.getElementById(myInput3);

  if (x.type === "password" || y.type === "password" || z.type === "password") {
    x.type = "text";
    y.type = "text";
    z.type = "text";
  } else {
    x.type = "password";
    y.type = "password";
    z.type = "password";
  }
}
/* koniec edycja profilu */

function change_option(id) {
  if (id == "userData") {
    document.getElementById("mainSection").innerHTML =
      '<object type="text/html" style="width:100%; height:100%" data="user_panel-userData.html" ></object>';
  }
  if (id == "editProfile") {
    document.getElementById("mainSection").innerHTML =
      '<object type="text/html" style="width:100%; height:100%" data="user_panel-editProfile.html" ></object>';
  }
  if (id == "ranking") {
    document.getElementById("mainSection").innerHTML =
      '<object type="text/html" style="width:100%; height:100%" data="user_panel-ranking.html" ></object>';
  }
  if (id == "gameHistory") {
    document.getElementById("mainSection").innerHTML =
      '<object type="text/html" style="width:100%; height:100%" data="user_panel-gamesHistory.html" ></object>';
  }
  if (id == "userFriends") {
    document.getElementById("mainSection").innerHTML =
      '<object type="text/html" style="width:100%; height:100%" data="user_panel-friends.html" ></object>';
  }
  if (id == "userAchievements") {
    document.getElementById("mainSection").innerHTML =
      '<object type="text/html" style="width:100%; height:100%" data="user_panel-achievments.html" ></object>';
  }
}
