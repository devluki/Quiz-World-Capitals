import View from "./View";

class quizView extends View {
  _parentElement = document.querySelector(".app");

  renderQuestion() {
    this.clearMarkup();
  }
}

export default new quizView();
