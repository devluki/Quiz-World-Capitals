import View from "./View";
import { correctAnswearIndex } from "../model";

class quizView extends View {
  _data;
  _parentElement = document.querySelector(".app__main");

  renderQuiz(_data) {
    this.clearMarkup();
    // 1. Render Capital Cities
    _data.forEach((country, i) => {
      const markup = `
      <div>
      <input type="radio" id="capitalCity" name="capitalCity--${i}" value=${
        country.capital ? country.capital : "Don't have Capital City"
      }>
      <label for="capitalCity--${i}">${
        country.capital ? country.capital[0] : "Don't have Capital City"
      }</label>
      </div>`;

      this._parentElement.insertAdjacentHTML("afterbegin", markup);
    });
    // 2 Render quiz question
    const questionMarkup = `<h4>What is the Capital City of <strong>${_data[correctAnswearIndex].name.common}</strong></h4>`;
    this._parentElement.insertAdjacentHTML("afterbegin", questionMarkup);

    // 3 Render buttons

    const btnsMarkup =
      '<div class="btns__container"><button>Back</button><button class="getData unactive">Submit</button></div>';
    this._parentElement.insertAdjacentHTML("beforeEnd", btnsMarkup);
  }
}

export default new quizView();
