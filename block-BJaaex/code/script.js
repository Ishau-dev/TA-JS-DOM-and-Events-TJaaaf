// /* <div class="flex-20">
// <img src="./assets/question.gif" alt="">
// </div> */
// let game = document.querySelector('.game');
// let front = document.querySelector('.front');
// let back = document.querySelector('.back');
// let imageArr = ["1up.png","blueshell.png","bobomb.png","bulletbill.png","coin.png","goomba.png","logo.png","luigi.png","mario.png","mushroom.png","peach.png","star.png"];
// let grid= imageArr.concat(imageArr).sort(function(){return 0.5 - Math.random()});
// let handleClick = (event)=> {
//     console.log(event.target);
//     event.target.classList.add('img-off');
// }
// let generateBox = ()=>{
//     for(let i=0; i<24; i++){
//         let div = document.createElement('div');
//         div.classList.add('flex-20');
//         let imgFront = document.createElement('img');
//         imgFront.src = './assets/question.gif';
//         imgFront.setAttribute('data-id',i);
//         imgFront.addEventListener('click',handleClick);
//         div.append(imgFront);
//         front.append(div);
//     }
// }
// generateBox();


// let icons = () =>{
//     for(let i=0; i<24; i++){  
//         let div = document.createElement('div');
//         div.classList.add('flex-20');
//         let imgBack = document.createElement('img'); 
//         imgBack.src = './assets/' + grid[i];
//         div.append(imgBack); 
//         back.append(div);      
//   }
// }

// icons();
var cardsArray = [{
    'name': 'shell',
    'img': 'img/blueshell.png'
  }, {
    'name': 'star',
    'img': 'img/star.png'
  }, {
    'name': 'bobomb',
    'img': 'img/bobomb.png'
  }, {
    'name': 'mario',
    'img': 'img/mario.png'
  }, {
    'name': 'luigi',
    'img': 'img/luigi.png'
  }, {
    'name': 'peach',
    'img': 'img/peach.png'
  }, {
    'name': '1up',
    'img': 'img/1up.png'
  }, {
    'name': 'mushroom',
    'img': 'img/mushroom.png'
  }, {
    'name': 'thwomp',
    'img': 'img/thwomp.png'
  }, {
    'name': 'bulletbill',
    'img': 'img/bulletbill.png'
  }, {
    'name': 'coin',
    'img': 'img/coin.png'
  }, {
    'name': 'goomba',
    'img': 'img/goomba.png'
  }];

  var gameGrid = cardsArray.concat(cardsArray).sort(function () {
    return 0.5 - Math.random();
  });

var firstGuess = '';
var secondGuess = '';
var count = 0;
var previousTarget = null;
var delay = 1200;
    var game = document.getElementById('game');
    var grid = document.createElement('section');
    grid.setAttribute('class', 'grid');
    game.appendChild(grid);
  gameGrid.forEach(item => {
    var card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = item.name;
  
    var front = document.createElement('div');
    front.classList.add('front');
  
    var back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = 'url(' + item.img + ')';
  
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  });

  var match = function match() {
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
      card.classList.add('match');
    });
  };
  
  var resetGuesses = function resetGuesses() {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;
  
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
      card.classList.remove('selected');
    });
  };
  
  grid.addEventListener('click', function (event) {
  
    var clicked = event.target;
  
    if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
      return;
    }
  
    if (count < 2) {
      count++;
      if (count === 1) {
        firstGuess = clicked.parentNode.dataset.name;
        console.log(firstGuess);
        clicked.parentNode.classList.add('selected');
      } else {
        secondGuess = clicked.parentNode.dataset.name;
        console.log(secondGuess);
        clicked.parentNode.classList.add('selected');
      }
  
      if (firstGuess && secondGuess) {
        if (firstGuess === secondGuess) {
          setTimeout(match, delay);
        }
        setTimeout(resetGuesses, delay);
      }
      previousTarget = clicked;
    }
  });