import View from "./View";
import { correctAnswerIndex } from "../model";

class statsView extends View {
  _parentElement = document.querySelector(".app__stats");

  _updateStats(goodAnswers = 0, badAnswers = 0) {
    const markup = `<span>Good count: ${goodAnswers}</span> <span>Bad count: ${badAnswers}</span>`;
    this.render(markup);
  }
}

export default new statsView();
