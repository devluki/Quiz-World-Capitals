import View from "./View";

class quizView extends View {
  _parentElement = document.querySelector(".app");

  renderQuestion(data) {
    // this.clearMarkup();
    const markup = '<div class="spinner">Question loaded</div>';

    this.clearMarkup();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    // console.log("renderspinner");
  }
}

export default new quizView();
