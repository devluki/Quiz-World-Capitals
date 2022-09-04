import { correctAnswerIndex } from "../model";

export default class View {
  data;
  _parentElement = document.querySelector(".app__main");

  addAtributeHandler(handler) {
    handler();
  }

  // General functions
  clearMarkup() {
    this._parentElement.innerHTML = "";
    console.log("clearMarkup");
  }

  render(markup) {
    this.clearMarkup();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderSpinner() {
    const markup =
      '<div class="spinner"><i class="fa-solid fa-spinner fa-spin"></i></div>';

    this.clearMarkup();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    console.log("renderspinner");
  }

  // Render Index page
  _renderIndex() {
    const markup = ` <div class="app__main">
    <p>
      <strong>Take the quiz and test your knowledge!</strong> How many of
      world capitals can you guess correctly? Good luck! :)
    </p>
    <button class="getData">Get data</button>
  </div>`;
    this.render(markup);
  }
}
