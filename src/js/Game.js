/* eslint-disable radix */
import action from './Action';

export default class Game {
  constructor() {
    this.board = document.body.querySelector('.board');
    this.currentHole = null;
    this.boardSize = 16;
    this.previousScore = 0;
  }

  run() {
    action.action();
    this.findHole();

    setInterval(() => {
      this.moleMove();
    }, 1000);
  }

  randomizer() {
    return Math.floor(1 + Math.random() * (this.boardSize - 1));
  }

  findHole() {
    const getHole = (index) => document.getElementById(index);

    const random = this.randomizer();
    this.currentHole = getHole(random);
    this.currentHole.classList.add('hole__has-mole');

    return this.currentHole;
  }

  moleMove() {
    if (this.previousScore === action.score) {
      action.missed += 1;
      action.scoreRender(action.score, action.missed);
      if (action.missed >= 5) action.gameOver();
    }
    let random = this.randomizer();

    if (random === parseInt(this.currentHole.id)) {
      random = this.randomizer();
    }
    this.currentHole.classList.remove('hole__has-mole');
    this.currentHole = null;
    this.findHole();

    this.previousScore = action.score;
  }
}
