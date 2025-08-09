const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [
  'cris1',
  'cris2',
  'cris3',
  'cris4',
  'cris5',
  'cris6',
  'cris7',
  'cris8',
  'cris9',
  'cris10',
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === 20) {
    clearInterval(this.loop);
    alert(`Moreno, quero atraves desse jogo te deseja um feliz dia dos pais; que Deus te abençoe e ilumine sua vida para andar nos caminhos dEle e que o Anthony siga seus passos, porque eu te acho um cara incrivel como homem, pessoa e em especial como pai. Quem não iria querer um pai que cuida é carinhoso, procura agradar a Deus, é desenrolado (resolve os problemas quando aparece), é calmo (eu adimiro isso em você, em ser calmo rsrs), é corajoso (apesar de se segurar em algo que não sei o que é, mas acredito que um dia você vai vencer o medo que tanto te prende de encontrar a liberdade com a felicidade), outra qualidade é que você é atencioso e luta pra ser melhor e dar o melhor pra quem ama. Enfim queria falar muito mais, só que vou acabar perdendo o foco do intuito desse presente, ele é simples mais espero que guarde com carinho porque foi feito dessa forma com carinho; é simple mais é de coração...Desejo que seu dia seja um dia abençoado, leve e tranquilo e que tambem venha ser especial igual você é pra mim. Feliz Dia dos Pais, te amo meu amor...com amor da sua Cocadinha S2 !`);
  }
}

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

  if (firstCharacter === secondCharacter) {

    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    checkEndGame();

  } else {
    setTimeout(() => {

      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';

    }, 500);
  }

}

const revealCard = ({ target }) => {

  if (target.parentNode.className.includes('reveal-card')) {
    return;
  }

  if (firstCard === '') {

    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;

  } else if (secondCard === '') {

    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards();

  }
}

const createCard = (character) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../images/${character}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', character)

  return card;
}

const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters];

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
}

const startTimer = () => {

  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 1000);

}

window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem('player');
  startTimer();
  loadGame();
}