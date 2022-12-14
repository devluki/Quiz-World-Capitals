import View from "./View";
import { correctAnswerIndex } from "../model";

class quizView extends View {
  data;
  _choices;
  _parentElement = document.querySelector(".app__main");
  _stats = document.querySelector(".app__stats");

  submitBtnHandler(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const submitBtn = e.target.closest(".submit");
      if (!submitBtn) return;

      handler();
    });
  }

  gnerateChoiceOptions(data) {
    let markup = "";
    data.map((el, i) => {
      markup += ` <div>
    <input class="input-capital-city"type="radio" id="capitalCity--${i}" name="capitalCity" value='${
        el.capital ? el.capital[0] : "Do not have Capital City"
      }'>
    <label class="label-capital-city" for="capitalCity--${i}">${
        el.capital
          ? el.capital[0]
          : "Do not have Capital City <i class='fa-solid fa-volcano'></i>"
      }</label>
    </div>`;
    });
    this._choices = markup;
  }

  generateQuizView(data, index) {
    this.gnerateChoiceOptions(data);
    return `<div class="main__content"><h3 class="quiz__question">What is Capital City of <span class="bold italic">${data[index].name.common}?</span></h3><div>${this._choices}</div></div><div class="buttons__container"><button class="back btn">Back</button><button class="unactive submit btn">Submit</button></div>`;
  }

  _renderQuizView(data, index) {
    const markup = this.generateQuizView(data, index);
    this.render(markup);
  }

  renderError(error) {
    const markup = `<div class="error">
   <div class="error__img"></div>
    <p class="error__code">${error.message}</p>
    <p class="error__message">Something went wrong, can't fetch data. Try refresh the page.</p> </div>`;

    this.clearMarkup();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _renderMessage(flag, data) {
    let markup;

    if (flag) {
      if (data[0] === "Do not have Capital City") {
        markup = `<div class="main__content"><p class="quiz__answer"><span class="bold bold--correct">That's correct!</span> ${data[1]} do not have Capital City!</p></div>

        <div class="buttons__container"> <button class="back btn">Back</button><button class="getData btn">Next</button></div>`;
      } else {
        markup = `<div class="main__content"><p class="quiz__answer"><span class="bold bold--correct">That's correct!</span> ${data[0]} is a Capital City of ${data[1]}.</p></div>
        <div class="buttons__container"> <button class="back btn">Back</button><button class="getData btn">Next</button></div>`;
      }
    } else {
      if (data[0] === "Do not have Capital City") {
        markup = `<div class="main__content"><p class="quiz__answer"><span class="bold bold--incorrect">Sorry this isn't correct answer...</span> ${data[1]} definitely have a Capital City...</p></div>
 
         <div class="buttons__container"> <button class="back btn">Back</button><button class="getData btn">Next</button></div>`;
      } else {
        markup = `<div class="main__content"><p class="quiz__answer"><span class="bold bold--incorrect glow">Sorry this isn't correct answer...</span>  ${data[0]} is not a Capital City of ${data[1]}.</p></div>
      <div class="buttons__container"><button class="back btn">Back</button><button class="getData btn">Next</button></div>`;
      }
    }
    this.render(markup);
  }

  _clearStats() {
    this._stats.innerHTML = "";
  }

  _updateStats(goodAnswers = 0, badAnswers = 0) {
    this._clearStats();
    const markup = `<span class="good__count bold">Good count: ${goodAnswers}</span> <span class="bad__count bold">Bad count: ${badAnswers}</span>`;
    this._stats.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new quizView();
