import { useEffect } from "react/cjs/react.development";
import "./Kostka.css";
import dice1 from "./dice-1.png";
import dice2 from "./dice-2.png";
import dice3 from "./dice-3.png";
import dice4 from "./dice-4.png";
import dice5 from "./dice-5.png";
import dice6 from "./dice-6.png";


const Kostka = (props) => {
  useEffect(() => {
    //Selecting elements
    const score1_el = document.querySelector("#score--0"); //id za pomocą QuerySelector
    const score2_el = document.getElementById("score--1"); //Id za pomocą getElementById
    const dice_el = document.querySelector(".dice"); // class  za pomocą querySleector

    //skrócy hook'ów dla przycisków
    const btn_roll = document.querySelector(".btn--roll");
    const btn_new = document.querySelector(".btn--new");
    const btn_hold = document.querySelector(".btn--hold");

    const current_score_1 = document.getElementById("current--0");
    const current_score_2 = document.getElementById("current--1");

    score1_el.textContent = 0;
    score2_el.textContent = 0;

    //wynik ostateczny -
    //total_score[active_player]
    const total_scores = [0, 0];

    // przechowywanie aktualnego wyniku
    let current_score = 0;
    //aktywny gracz
    let active_player = 0;

    let playing = true;

    // funkcja zmiany graczy
    function change_player(active) {
      //
      //wyzeruj wynik graczowi
      //current_score_1.textContent = 0;
      document.getElementById(`current--${active}`).textContent = 0;

      // zresetuj current_score
      current_score = 0;

      //usunięcie podświetlenia
      document
        .querySelector(`.player--${active}`)
        .classList.remove("player--active");

      //zmiana
      if (active === 1) {
        active_player = 0;
      } else {
        active_player = 1;
      }
      //dodanie podświetlenia
      document
        .querySelector(`.player--${active_player}`)
        .classList.add("player--active");
    }

    function score_update(active) {
      total_scores[active] += current_score;

      document.getElementById(`score--${active}`).textContent =
        total_scores[active];
    }

    dice_el.classList.add("hidden");

    //obsługa roll
    btn_roll.addEventListener("click", function () {
      if (playing) {
        //
        //Funkcjonalności:
        //1. wygenerować nową liczbę
        //2. podmienić obrazek
        //3. Sprawdzić czy nie jest równa jeden

        let dice_roll = Math.trunc(Math.random() * 6 + 1);
        console.log(dice_roll)
        let dice_png = [dice1, dice2, dice3, dice4, dice5, dice6]
        dice_el.classList.remove("hidden");
        dice_el.src = dice_png[dice_roll - 1]

        if (dice_roll !== 1) {
          // właściwy -> dodaj do aktualnego score
          current_score += dice_roll;

          document.getElementById(`current--${active_player}`).textContent =
            current_score;

          //musimy przydzielać to do aktualnego gracza
        } else {
          //Zmień gracza
          change_player(active_player);
        }
      }
    });

    btn_hold.addEventListener("click", function () {
      if (playing) {
        //score--X
        score_update(active_player);
        //Dodać aktualny score do score--X
        if (total_scores[active_player] >= 25) {
          //score update

          //dodanie koloru zwyciężcy
          document
            .querySelector(`.player--${active_player}`)
            .classList.remove("player--active");

          document
            .querySelector(`.player--${active_player}`)
            .classList.add("player--winner");

          playing = false;
        } else {
          //zmień gracza
          change_player(active_player);
        }
      }
    });

    btn_new.addEventListener("click", function () {
      //reset kolorów
      document
        .querySelector(`.player--${active_player}`)
        .classList.remove("player--active");

      document
        .querySelector(`.player--${active_player}`)
        .classList.remove("player--winner");

      active_player = 0;

      document
        .querySelector(`.player--${active_player}`)
        .classList.add("player--active");

      // reset wyników
      total_scores[0] = 0;
      total_scores[1] = 0;

      current_score = 0;

      current_score_1.textContent = 0;
      current_score_2.textContent = 0;

      score1_el.textContent = 0;
      score2_el.textContent = 0;

      playing = true;
    });
  }, []);

  return (
    <div className="container-md" >
      <div className="row row-cols-2 row-cols-md-3 justify-content-md-around">
      <section className="player player--0 player--active col order-0 order-md-0">
        <h2 className="name" id="name--0">
          Player 1
        </h2>
        <p className="score" id="score--0">
          43
        </p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--0">
            0
          </p>
        </div>
      </section>
      <section className="middle_section d-flex flex-md-column flex-wrap justify-content-center col align-items-center order-2 order-md-1 m-auto mt-5">
        <button className="btn btn--new">🔄 New game</button>
        <button className="btn btn--roll">🎲 Roll dice</button>
        <button className="btn btn--hold">📥 Hold</button>
        <img src={dice5} alt="Playing dice" className="dice" />
      </section>
      <section className="player player--1 col order-1 order-md-2">
        <h2 className="name" id="name--1">
          Player 2
        </h2>
        <p className="score" id="score--1">
          24
        </p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--1">
            0
          </p>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Kostka;
