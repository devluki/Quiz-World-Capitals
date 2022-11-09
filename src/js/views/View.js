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
  }

  // Render Index page
  _renderIndex() {
    const markup = `   
    <div class="main__content">
      <p>
        <strong>Take the quiz and test your knowledge!</strong> How many
        of world capitals can you guess correctly? Good luck! :)
      </p>
    </div>

    <div class="buttons__container">
      <button class="getData btn slide">Start</button>
    
  </div>`;

    this.render(markup);
  }
}
