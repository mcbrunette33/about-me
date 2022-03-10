'use strict';


let score = 0;
let username = prompt('what is your name?');
function sayHello(){
  if (username) {
    alert('Hello ' + username);
  } else {
    alert('Hello Friend');
  }
  console.log('Hello');
}
sayHello();



let answer1 = prompt('Do I like the beach?').toLowerCase();
function questionOne(){
  if (answer1 === 'yes' || answer1 === 'y') {
    alert('correct, I grew up surfing');
    score++;
  } else if (answer1 === 'no') {
    alert('sorry your are wrong');
  } else {
    alert('I did not catch what you said');
  }
  console.log();
}
questionOne();


let answer2 = prompt('Do I speak english?').toLowerCase();
function questionTwo(){
  if (answer2 === 'yes' || answer1 === 'y') {
    alert('I had to give you a freebee');
    score++;
  } else if (answer2 === 'no') {
    alert('come on, that was an easy one');
  } else {
    alert('I did not catch what you said');
  }
  console.log();
}

questionTwo();


let answer3 = prompt('Do I travel?').toLowerCase();

if (answer3 === 'yes' || answer1 === 'y') {
  alert('yes 24 countries and counting');
  score++;
} else if (answer3 === 'no') {
  alert('you are incorrect');
} else {
  alert('I did not catch what you said');
}
let answer4 = prompt('Do I play poker?').toLowerCase();

if (answer4 === 'yes' || answer1 === 'y') {
  alert('Almost every day, Working to win the WSOP one day');
  score++;
} else if (answer4 === 'no') {
  alert('incoreect. Poker is one of my favorite things to do. I live in Las Vegas');
} else {
  alert('I did not catch what you said');
}
let answer5 = prompt('Is my favorite place to travel brazil?').toLowerCase();

if (answer5 === 'yes' || answer1 === 'y') {
  alert('you are right' + username);
  score++;
} else if (answer5 === 'no') {
  alert('Sorry that is wrong ' + username);
} else {
  alert('I did not catch what you said' + username);
}


let i = 0;
let correctanswer = 11;
while (i < 4) {
  let answer6 = prompt('Guess a number between 1-33');
  if (parseInt(answer6) === correctanswer) {
    alert('wow that was easy ' + username);
    i = 5;
    score++;
  } else if (parseInt(answer6) < correctanswer) {
    alert('too low');
    i++;
  } else if (parseInt(answer6) > correctanswer) {
    alert('too high');
    i++;
  }
  if (i === 4) {
    alert('sorry the correct answer was 11');
  }
}
let j = 0;
let places = ["syria", "france", "germany"];
while (j < 6) {
  let answer7 = prompt('what my was least favorite country I have visited').toLowerCase();
  for (let i = 0; i < places.length; i++) {
    if (answer7 === places[i]) {
      alert('you are correct');
      j = 6;
      score++;
    }


  }
  j++;
  if (j=== 6) {
    alert('sorry your possible answers were brazil, germany and syria');
  }

}
alert( 'your score is' + score + username);
