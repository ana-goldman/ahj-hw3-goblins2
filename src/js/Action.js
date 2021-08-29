/* eslint-disable class-methods-use-this */
/* eslint-disable no-alert */

class Action {
  constructor() {
    this.board = document.body.querySelector('.board');
    this.score = 0;
    this.missed = 0;
  }

  action() {
    this.board.addEventListener('click', (e) => {
      if (e.target.classList.contains('hole__has-mole')) {
        this.score += 1;
        e.target.classList.remove('hole__has-mole');
      } else if (e.target.classList.contains('hole')) {
        this.missed += 1;
        if (this.missed >= 5) this.gameOver();
      }
      this.scoreRender(this.score, this.missed);
    });
  }

  scoreRender(score, missed) {
    const scoreNum = document.body.querySelector('.score');
    const missedNum = document.body.querySelector('.missed');
    scoreNum.innerHTML = score;
    missedNum.innerHTML = missed;
  }

  gameOver() {
    alert('Game Over!');
    this.score = 0;
    this.missed = 0;
  }
}

const action = new Action();

export default action;
