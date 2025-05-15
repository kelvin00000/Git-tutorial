const rockbutton = document.getElementById('rock-btn');
const paperbutton = document.getElementById('paper-btn');
const scissorsbutton = document.getElementById('scissors-btn');

let playermove= '';
let computermove= '';
let gameresult= '';



// background theme toggle.
document.querySelector('.theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    document.querySelector('.js-container').classList.toggle('dark');

    document.querySelector('.js-computermove-result-box').classList.toggle('result-box-dark-theme');
    document.querySelector('.js-playermove-result-box').classList.toggle('result-box-dark-theme');
    document.querySelector('.js-score-result-box').classList.toggle('result-box-dark-theme');
});

//ScoreBoard
const ScoreBoard = {
    wins:0,
    losses:0,
    ties:0
}
if(gameresult == 'you win'){
    ScoreBoard.wins+=1
}
else if(gameresult == 'you lose'){
    ScoreBoard.losses+=1
}else if(gameresult == 'a tie'){
    ScoreBoard.ties+=1
}
console.log(ScoreBoard);



rockbutton.addEventListener('click', ()=>{
    playermove = 'rock';
    playGame();

    rockbutton.classList.toggle('btn-clicked')
})
document.body.addEventListener('keydown', (event)=>{
    event.key === 'r';
    playermove = 'rock';
    playGame();

    rockbutton.classList.toggle('btn-clicked')
})


paperbutton.addEventListener('click', ()=>{
    playermove = 'paper';
   playGame();

   paperbutton.classList.toggle('btn-clicked')
})
document.body.addEventListener('keydown', (event)=>{
    event.key === 'p';
    playermove = 'paper';
    playGame();

    paperbutton.classList.toggle('btn-clicked')
});


scissorsbutton.addEventListener('click', ()=>{
    playermove = 'scissors';
   playGame();

   scissorsbutton.classList.toggle('btn-clicked')
})
document.body.addEventListener('keydown', (event)=>{
    event.key === 's';
    playermove = 'scissors';
    playGame();

    scissorsbutton.classList.toggle('btn-clicked');
})




function playGame(){

//GENERATES RANDOM NUMBER(COMPUTERMOVE)
function computerMove(){

    const randomNumber = Math.random();

    if(randomNumber <= .3){computermove = 'rock'}
    else if(randomNumber <= .7){computermove = 'paper'}
    else{computermove = 'scissors'}
}
computerMove();

//GENERATES RESULT BASED ON PLAYER AND COMPUTERMOVES
function result(){
    if(playermove === 'rock'){
        if (computermove === 'rock'){gameresult = 'a tie'}
    else if (computermove === 'paper'){gameresult = 'you lose'
    }else if (computermove === 'scissors'){gameresult = 'you win'}
    }else  
    
    if(playermove === 'paper'){
        if (computermove === 'rock'){gameresult = 'you win'}
    else if (computermove === 'paper'){gameresult = 'a tie'
    }else if (computermove === 'scissors'){gameresult = 'you lose'}
    }else  
    
    if(playermove === 'scissors'){
        if (computermove === 'rock'){gameresult = 'you lose'}
    else if (computermove === 'paper'){gameresult = 'you win'
    }else if (computermove === 'scissors'){gameresult = 'a tie'}
    }
}
result();


document.querySelector('.js-playermove-result').innerHTML = playermove;

document.querySelector('.js-computermove-result').innerHTML = computermove;

document.querySelector('.js-result').innerHTML = gameresult;

}
//noo
//changed again
