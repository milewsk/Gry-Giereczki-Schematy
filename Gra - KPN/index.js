let pScore = 0;
let cScore = 0;
let userChoice;
let compChoice;
let sText;
const playerScore = document.querySelector('.player-score p');
const compScore = document.querySelector('.computer-score p');
const playerImg = document.querySelectorAll('img')[0];
const compImg = document.querySelectorAll('img')[1];
const scoreText = document.querySelector('.match h2');
const options = ['r', 'p', 's']
const optionsButtons = document.getElementsByTagName('button');
for(let optionButton of optionsButtons){
    optionButton.onclick = (event) =>{
        if(event.target.value == "r"){
            userChoice = event.target.value
        }
        else if(event.target.value == "p"){
            userChoice = event.target.value
        }
        else if(event.target.value == "s"){
            userChoice = event.target.value
        }
        compChoice = options[Math.floor(Math.random() * 3)];
        compareChoices();
        game();
    }
}
function compareChoices(){
    //user win
    if((userChoice == 'r' && compChoice == 's') || 
        (userChoice == 's' && compChoice == 'p') || 
        (userChoice == 'p' && compChoice == 'r')){
        pScore += 1;
        userWinsToString();
    }
    //comp win
    else if((userChoice == 's' && compChoice == 'r') || 
        (userChoice == 'p' && compChoice == 's') || 
        (userChoice == 'r' && compChoice == 'p')){
        cScore += 1;
        compWinsToString();
    }
    //draw
    else {
        sText = "Remis"
    }
}
function userWinsToString(){
    if(userChoice == 'r' || userChoice == 'p'){
        sText = choiceToString(userChoice) + " bije " + choiceToString(compChoice).toLowerCase();
    }
    else 
        sText = choiceToString(userChoice) + " biją " + choiceToString(compChoice).toLowerCase();
}
function compWinsToString(){
    if(compChoice == 'r' || compChoice == 'p'){
        sText = choiceToString(compChoice) + " bije " + choiceToString(userChoice).toLowerCase();
    }
    else 
        sText = choiceToString(compChoice) + " biją " + choiceToString(userChoice).toLowerCase();
}
function choiceToString(choice)
{
    if(choice == 'r'){
        return "Kamień"
    }
    else if(choice == 'p'){
        return "Papier"
    }
    else return "Nożyce"
}
function game(){
    playerScore.textContent = pScore;
    compScore.textContent = cScore;
    playerImg.setAttribute('src', "Icons/" + userChoice + '.png');
    compImg.setAttribute('src', "Icons/" + compChoice + '.png');
    scoreText.textContent = sText;

}