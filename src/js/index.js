import * as base from './base/Base';

let scores = [0, 0];
let raundScore = 0;
let activePlayer = 0;

base.btnRoll.addEventListener('click', ()=>{
    
    let dice = Math.floor(Math.random()*6)+1;
    base.diceDom.style.display = 'block';
    base.diceDom.src = `/img/dice-${dice}.png`

    if(dice !== 1){
        raundScore += dice;
        document.querySelector('#current-'+ activePlayer).textContent = raundScore;
    }else{
        nextPlayer();
        raundScore = 0;
    }
})

base.btnHold.addEventListener('click', ()=>{
    scores[activePlayer] += raundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    raundScore = 0;
    if(scores[activePlayer] >= 100){
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!'

    }else{
        document.querySelector('#current-'+ activePlayer).textContent = raundScore;
        nextPlayer();
    }
})

base.btnNew.addEventListener('click', ()=>{
    scores = [0, 0];
    raundScore = 0;
    activePlayer = 0;

document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
document.querySelector('#name-0').textContent = "Player 1";
document.querySelector('#name-1').textContent = "Player 2";  
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');     
})

const nextPlayer = ()=>{
    if(activePlayer === 0){
        activePlayer = 1;
    } else{
        activePlayer = 0;
    }
document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');
}