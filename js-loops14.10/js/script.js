console.log('Hello js');

//ACG: Javascript Manual , Extra exercises.

//Exercise-1 Write a loop that counts from 0 to 100 in 7s.
// for (var i=0; i<=100; i+=7) {
// document.getElementById('result').innerHTML += '<br>' + i;
// }

//Exercise-2 Write a loop that outputs multiples of 2 up to 20,000,000.
// for (var i=0; i<=200; i+=2) {
// document.getElementById('result').innerHTML += '<br>' + i;
// }


//Exercise-3 Using switch statements, write a set of nested loops that outputs every playing card: Ranks: Ace, 2—10, Jack, Queen, King. Suits: Clubs, Diamonds, Hearts, Spades.

var cardType = prompt('Please enter card type');

switch(cardType){
  case 'diamonds':
  document.getElementById('result').innerHTML += 'diamond - ACE, diamond - 2 to 10, diamond - Jack, Queen, King';
  break;

  case 'clubs':
  document.getElementById('result').innerHTML += 'clubs - ACE, clubs - 2 to 10, clubs - Jack, Queen, King';
  break;

  case 'spades':
  document.getElementById('result').innerHTML += 'spades - ACE, spades - 2 to 10, spades - Jack, Queen, King';
  break;

  case 'hearts':
  document.getElementById('result').innerHTML += 'heart - ACE, heart - 2 to 10, heart - Jack, Queen, King';
  break;

  default:
  document.getElementById('result').innerHTML += 'Sorry wrong Input';
}
