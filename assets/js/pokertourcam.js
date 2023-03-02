const CARD_RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
const CARD_SUITS = ['C', 'D', 'H', 'S'];
const CARDS = [
  '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', 'TC', 'JC', 'QC', 'KC', 'AC',
  '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', 'TD', 'JD', 'QD', 'KD', 'AD',
  '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', 'TH', 'JH', 'QH', 'KH', 'AH',
  '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', 'TS', 'JS', 'QS', 'KS', 'AS'
];

function getBestScore(sevenCardHandText) {
  let sevenCards = sevenCardHandText.split(' ');
  let bestScore = 999999999999;
  for (let i = 0; i < 6; i++) {
    for (let j = i + 1; j < 7; j++) {
      let fiveCardHandText = sevenCardHandText.replace(sevenCards[i], '').replace(sevenCards[j], '').replace('  ', ' ').replace('  ', ' ');
      //console.log(fiveCardHandText);
      let hand = new PokerHand(fiveCardHandText);
      let currentScore = hand.score;
      if (currentScore < bestScore) {
        bestScore = currentScore;
      }
    }
  }

  return bestScore;
}

$(document).ready(function() {
  console.log('Poker Tour Cam!');

  // const myPokerHand = Hand.solve('Ks', 'Kh', 'Qc', 'Ah', 'Ad');
  // const hisPokerHand = Hand.solve('Kd', 'Kc', 'As', 'Ah', 'Td');

  // console.log(myPokerHand);
  // console.log(hisPokerHand);

  const hero = ['AS', 'JS'];
  const villain = ['KD', 'KC'];

  const board = ['QS', 'TS', '7D', '2C'];

  const remainingCards = [
    '3C', '4C', '5C', '6C', '7C', '8C', '9C', 'TC', 'JC', 'QC', 'AC',
    '2D', '3D', '4D', '5D', '6D', '8D', '9D', 'TD', 'JD', 'QD', 'AD',
    '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', 'TH', 'JH', 'QH', 'KH', 'AH',
    '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', 'KS'
    ];

  let heroWins = 0;
  let villainWins = 0;
  let ties = 0;

  for (let i = 0; i < 52 - 8; i++) {
    var heroHand = Hand.solve([...hero, ...board, remainingCards[i]]);
    var villainHand = Hand.solve([...villain, ...board, remainingCards[i]]);
    var result = heroHand.compare(villainHand);

    //console.log(result);

    if (result === -1) {
      console.log(remainingCards[i]);
      heroWins++;
    }
    else if (result === 1) {
      villainWins++;
    }
    else {
      ties++;
    }
  }

  console.log('Hero Wins: ' + heroWins);
  console.log('Villain Wins: ' + villainWins);
  console.log('Ties: ' + ties);


  /*
  const myPokerHand = new PokerHand('Ks Kh Qc Ah Ad');
  const hisPokerHand = new PokerHand('Kd Kc As Ah Td')

  console.log(myPokerHand);
  console.log(hisPokerHand);

  const hero = 'AS JS';
  const villain = 'KD KC';

  const board = 'QS TS 7D 2C';

  const remainingCards = [
    '3C', '4C', '5C', '6C', '7C', '8C', '9C', 'TC', 'JC', 'QC', 'AC',
    '2D', '3D', '4D', '5D', '6D', '8D', '9D', 'TD', 'JD', 'QD', 'AD',
    '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', 'TH', 'JH', 'QH', 'KH', 'AH',
    '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', 'KS'
    ];

  let heroWins = 0;
  let villainWins = 0;
  let ties = 0;

  for (let i = 0; i < 52 - 8; i++) {
    let heroScore = getBestScore(hero + ' ' + board + ' ' + remainingCards[i]);
    let villainScore = getBestScore(villain + ' ' + board + ' ' + remainingCards[i]);
    // heroHand = new PokerHand(hero + ' ' + board + ' ' + remainingCards[i]);
    // villainHand = new PokerHand(villain + ' ' + board + ' ' + remainingCards[i]);

    if (heroScore < villainScore) {
      heroWins++;
    }
    else if (heroScore > villainScore) {
      villainWins++;
    }
    else {
      ties++;
    }
  }

  console.log('Hero Wins: ' + heroWins);
  console.log('Villain Wins: ' + villainWins);
  console.log('Ties: ' + ties);
  */

  /*
  console.log(myPokerHand.describe());
  // { hand: [ 'KS', 'KH', 'QC', 'AH', 'AD' ],
  //   score: 2468,
  //   rank: 'TWO_PAIRS' }
   
  console.log(hisPokerHand.describe());
  // { hand: [ 'KD', 'KC', 'AS', 'AH', 'TD' ],
  //   score: 2470,
  //   rank: 'TWO_PAIRS' }
   
  console.log(myPokerHand.getRank());
  // TWO_PAIRS
  console.log(hisPokerHand.getRank());
  // TWO_PAIRS
   
  console.log(myPokerHand.getScore());
  // 2468
  console.log(hisPokerHand.getScore());
  // 2470
   
  console.log(myPokerHand.toString());
  // KS KH QC AH AD
  console.log(hisPokerHand.toString());
  // KD KC AS AH TD
  */
   
});
