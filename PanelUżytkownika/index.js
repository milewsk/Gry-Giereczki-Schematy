let idList = ["userData", "gameHistory", "ranking", "userFriends", "userAchievements"];
//let idList = ["userData", "gameHistory", "userFriends"];

function hide(){
    idList.forEach(element => {
        document.getElementById(element + "Div").style.visibility = "hidden";
        document.getElementById(element + "Div").style.display = "none";
    });
}
function show(id){
    hide();
    document.getElementById(id + "Div").style.visibility = "visible";
    document.getElementById(id + "Div").style.display = "grid";


}