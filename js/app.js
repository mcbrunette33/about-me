'use strict';

let username = prompt('what is your name?');

if(username){
  alert('hello ' + username);
} else{
  alert('Hello Friend');
}
let answer1 = prompt('Is today a good day?').toLowerCase();

if (answer1 === 'yes'){
  alert('AWESOME');
} else if(answer1 === 'no'){
  alert('sorry to hear');
}else{
  alert('I did not catch what you said');
}
let answer2 = prompt('Do you like food?').toLowerCase();

if (answer2 === 'yes'){
  alert('ME TOO');
} else if(answer2 === 'no'){
  alert('you need to eat');
}else{
  alert('I did not catch what you said');
} 
let answer3 = prompt('Do you like the outdoors?').toLowerCase();

if (answer3 === 'yes'){
  alert('ME TOO');
} else if(answer3 === 'no'){
  alert('you need some SUN');
}else{
  alert('I did not catch what you said');
}
let answer4 = prompt('Do you like the traveling?').toLowerCase();

if (answer4 === 'yes'){
  alert('ME TOO');
} else if(answer4 === 'no'){
  alert('I reccomend traveling to brazil. maybe you will change your mind');
}else{
  alert('I did not catch what you said');
}
let answer5 = prompt('Do you like football?').toLowerCase();

if (answer5 === 'yes'){
  alert('ME TOO' + username);
} else if(answer5 === 'no'){
  alert('Lets go Packers!!!'+ username);
}else{
  alert('I did not catch what you said' + username);
}


