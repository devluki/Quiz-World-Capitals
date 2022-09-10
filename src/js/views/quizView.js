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
    console.log("_choises:", this._choices);
  }

  generateQuizView(data, index) {
    console.log("data:", data, "Index:", index, data[index].capital);
    this.gnerateChoiceOptions(data);
    return `<div class="main__content"><h3 class="quiz__question">What is Capital City of <span class="bold italic">${data[index].name.common}?</span></h3><div>${this._choices}</div></div><div class="buttons__container"><button class="back btn">Back</button><button class="unactive submit btn">Submit</button></div>`;
  }

  _renderQuizView(data, index) {
    const markup = this.generateQuizView(data, index);
    this.render(markup);
  }

  _renderMessage(flag, data) {
    let markup;
    if (flag) {
      markup = `<div class="main__content"><p class="quiz__answer"><span class="bold bold--correct">That's correct!</span> ${data[0]} is a Capital City of ${data[1]}.</p></div>
     <div class="buttons__container"> <button class="back btn">Back</button><button class="getData btn">Next</button></div>`;
    } else {
      markup = `<div class="main__content"><p class="quiz__answer"><span class="bold bold--incorrect glow">Sorry this isn't correct answer...</span>  ${data[0]} is not a Capital City of ${data[1]}.</p></div>
      <div class="buttons__container"><button class="back btn">Back</button><button class="getData btn">Next</button></div>`;
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
