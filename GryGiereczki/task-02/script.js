'use strict';

//stałe skracające prace

//Selecting elements
const score1_el = document.querySelector('#score--0'); //id za pomocą QuerySelector
const score2_el = document.getElementById('score--1'); //Id za pomocą getElementById
const dice_el = document.querySelector('.dice'); // class  za pomocą querySleector

//skrócy hook'ów dla przycisków
const btn_roll = document.querySelector('.btn--roll');
const btn_new = document.querySelector('.btn--new');
const btn_hold = document.querySelector('.btn--hold');

const current_score_1 = document.getElementById('current--0');
const current_score_2 = document.getElementById('current--1');

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
    .classList.remove('player--active');

  //zmiana
  if (active === 1) {
    active_player = 0;
  } else {
    active_player = 1;
  }
  //dodanie podświetlenia
  document
    .querySelector(`.player--${active_player}`)
    .classList.add('player--active');
}

function score_update(active) {
  total_scores[active] += current_score;

  document.getElementById(`score--${active}`).textContent =
    total_scores[active];
}

dice_el.classList.add('hidden');

//obsługa roll
btn_roll.addEventListener('click', function () {
  if (playing) {
    //
    //Funkcjonalności:
    //1. wygenerować nową liczbę
    //2. podmienić obrazek
    //3. Sprawdzić czy nie jest równa jeden

    let dice_roll = Math.trunc(Math.random() * 6) + 1;

    dice_el.classList.remove('hidden');
    dice_el.src = `dice-${dice_roll}.png`;

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

btn_hold.addEventListener('click', function () {
  if (playing) {
    //score--X
    score_update(active_player);
    //Dodać aktualny score do score--X
    if (total_scores[active_player] >= 25) {
      //score update

      //dodanie koloru zwyciężcy
      document
        .querySelector(`.player--${active_player}`)
        .classList.remove('player--active');

      document
        .querySelector(`.player--${active_player}`)
        .classList.add('player--winner');

      playing = false;
    } else {
      //zmień gracza
      change_player(active_player);
    }
  }
});

btn_new.addEventListener('click', function () {
  //reset kolorów
  document
    .querySelector(`.player--${active_player}`)
    .classList.remove('player--active');

  document
    .querySelector(`.player--${active_player}`)
    .classList.remove('player--winner');

  active_player = 0;

  document
    .querySelector(`.player--${active_player}`)
    .classList.add('player--active');

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
