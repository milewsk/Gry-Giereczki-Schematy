import { useEffect } from "react/cjs/react.development";
import "./KPN.css";
import p from "./p.png"
import r from "./r.png"
import s from "./s.png"

const KPN = (props) => {
    useEffect(() => {
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
            playerImg.setAttribute('src', chooseImg(userChoice));
            compImg.setAttribute('src', chooseImg(compChoice));
            scoreText.textContent = sText;

        }
        function chooseImg(choice){
            if(choice == 'r'){
                return r
            }
            else if(choice == 'p'){
                return p
            }
            else return s
        }
    },[]);
    return (
        <section className="game">
            <div className="score">
                <div className="player-score">
                    <h2>Użytkownik</h2>
                    <p>0</p>
                </div>
                <div className="computer-score">
                    <h2>Komputer</h2>
                    <p>0</p>
                </div>
            </div>

            <div className="match FadeOut">
                <h2>Wybierz opcję, aby rozpocząć</h2>
                <div className="choices">
                    <img className="player-choice"src={r}/>
                    <img className="computer-choice"src={p}/>
                </div>
                <div className="options">
                    <button className="rock" value="r">Kamień</button>
                    <button className="paper" value="p">Papier</button>
                    <button className="scissors" value="s">Nożyce</button>
                </div>
            </div>
    </section>
        );
    };
export default KPN;
