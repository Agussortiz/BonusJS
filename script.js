const words = [
  'californication',
  'plataforma5',
  'black',
  'summer',
  'flea',
  'aeroplane',
  'peppers',
  'unlimited',
  'arcadium',
  'love',
  'getaway',
  'stadium',
  'quixoticelixer',
  'quarter',
  'snow',
  'dylan',
  'zephyr',
  'funky',
  'chili'
];

let list = [];
let currentWordIndex = -1;
let currentWord = "";

function randomWords() {
  currentWordIndex = Math.floor(Math.random() * words.length);
  currentWord = words[currentWordIndex];
  addtoDOM(currentWord);
  list.unshift(currentWord);
}

let time = 10;
let score = 0;

function addtoDOM(palabraAleatoria) {
  let randomWordElement = document.getElementById('randomWord');
  randomWordElement.textContent = palabraAleatoria;
}

function updateScore() {
  score++;
  let scoreElement = document.getElementById('score');
  scoreElement.textContent = score;
}

function gameOver() {
    clearInterval(timeinterval);
    let endGameContainer = document.getElementById('end-game-container');
    endGameContainer.innerHTML = `
      <h3>¡Tiempo terminado!</h3>
      <p>Puntaje final: ${score}</p>
      <button onclick="resetGame()">Volver a jugar</button>
    `;
    let mainContainer = document.querySelector('.main');
    mainContainer.style.display = 'none';
  }
  
  function resetGame() {
    let endGameContainer = document.getElementById('end-game-container');
    endGameContainer.innerHTML = '';
    let mainContainer = document.querySelector('.main');
    mainContainer.style.display = 'block';
    score = 0;
    numPuntaje = 0;
    scoreActual.innerHTML = numPuntaje;
    time = 10;
    randomWords();
    actualizarTiempo(time);
    text.value = "";
  }
  
  let text = document.getElementById('text');
  let scoreActual = document.getElementById('score');
  let numPuntaje = 0;
  let spanTiempo = document.getElementById('timeSpan');
  let timeinterval;
  
  function actualizarTiempo(time) {
    timeinterval = setInterval(function() {
      if (time > 0) {
        spanTiempo.innerHTML = time + 's';
        time--;
      } else {
        gameOver();
      }
    }, 1000);
  }
  
  text.addEventListener("input", function(e) {
    let userSelect = e.target.value;
    list.unshift(userSelect);
  
    if (userSelect === currentWord) {
      updateScore();
      randomWords();
      text.value = "";
  
      if (time <= 7) {
        time += 3;
      }
  
      numPuntaje++;
      scoreActual.innerHTML = numPuntaje;
      clearInterval(timeinterval);
      actualizarTiempo(time);
    }
  });
  
  randomWords();
  actualizarTiempo(time);                 
  

    // No me sale lo del tiempo para que se sume sin que se reinicie o se hagan mas intervalos de tiempo