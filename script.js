'use strict';
const number = Math.trunc(Math.random() * 20 + 1);

let score = 20;


document.querySelector('.check').addEventListener('click', () => {
  checkcloser(document.querySelector('.guess').value);
});

function updatehighscore(num) {
  console.log(document.querySelector('.label-highscore').textContent);
  console.log(document.querySelector('.highscore').textContent);
  if (document.querySelector('.highscore').textContent >= num.toString())
    return;
  else {
    document.querySelector('.highscore').textContent = num.toString();
  }
}

function checkcloser(Number) {
if(!Number){

    document.queryselector('.message').textContent = 'no number';



}
  else if (Number == number) {
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347'; 
    

    document.querySelector('.message').textContent = 'Congratulations ';
    document.querySelector('.score').textContent = score;
    updatehighscore(score);
  } 
  else if(Number>number){
    if(score>1){
        score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'too high';


    }
    else{
        document.querySelector('.message').textContent = 'you lost';
        document.querySelector('.score').textContent = 0;

    }
    
  }
  else{
    if(score>1){
     score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'too low';


    }
    else{
        document.querySelector('.message').textContent = 'you lost';
        document.querySelector('.score').textContent = 0;

    }

  }

}
