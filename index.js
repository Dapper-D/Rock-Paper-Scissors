/* this is for computerplay*/


Array.prototype.random = function (){
    return this[Math.floor((Math.random() * this.length))];
}
const computerPlays = (['rock', 'paper', 'scissors'])  
const computerPlay = computerPlays.random(); 
/**console.log (computerPlay.random()); */



/**this is for player select */

let playerSelect = prompt('Choose your weapon').toLowerCase();

/**this is for the result */

if(computerPlay === playerSelect ){
    console.log ('you chose ' + playerSelect + ' and the computer chose ' + computerPlay + ' so, its a tie.');
    alert('Its a tie')

}else if(computerPlay === 'rock' && playerSelect === 'scissors'){
    console.log ('you chose ' + playerSelect + ' and the computer chose ' + computerPlay + ' so you lose.');
    alert('you lose')

}else if(computerPlay === 'rock' && playerSelect === 'paper'){
    console.log ('you chose ' + playerSelect + ' and the computer chose ' + computerPlay + ' so you win.');
    alert('you win')

}else if(computerPlay === 'scissors' && playerSelect === 'paper'){
    console.log ('you chose ' + playerSelect + ' and the computer chose ' + computerPlay + ' so you lose.');
    alert('you lose')

}else if(computerPlay === 'scissors' && playerSelect === 'rock'){
    console.log ('you chose ' + playerSelect + ' and the computer chose ' + computerPlay + ' so you win.');
    alert('you win')

}else if(computerPlay === 'paper' && playerSelect === 'scissors'){
    console.log ('you chose ' + playerSelect + ' and the computer chose ' + computerPlay + ' so you win.');
    alert('you win')

}else if(computerPlay === 'paper' && playerSelect === 'rock'){
    console.log ('you chose ' + playerSelect + ' and the computer chose ' + computerPlay + ' so you lose.');
    alert('you lose')

}