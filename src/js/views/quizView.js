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
    <input type="radio" id="capitalCity" name="capitalCity" value='${
      el.capital ? el.capital[0] : "Do not have Capital City"
    }'>
    <label for="capitalCity--${i}">${
        el.capital ? el.capital[0] : "Do not have Capital City"
      }</label>
    </div>`;
    });
    this._choices = markup;
    console.log("_choises:", this._choices);
  }

  generateQuizView(data, index) {
    console.log("data:", data, "Index:", index, data[index].capital);
    this.gnerateChoiceOptions(data);
    return `<h3>What is Capital City of ${data[index].name.common}</h3><div>${this._choices}<button class="back">Back</button><button class="unactive submit">Submit</button></div>`;
  }

  _renderQuizView(data, index) {
    const markup = this.generateQuizView(data, index);
    this.render(markup);
  }

  _renderMessage(flag, data) {
    let markup;
    if (flag) {
      markup = `<p>That's correct! ${data[0]} is a Capital City of ${data[1]}</p>
      <button class="back">Back</button><button class="getData">Next question</button>`;
    } else {
      markup = `<p>Sorry this isn't correct answer...${data[0]} is not a Capital City of ${data[1]}</p>
      <button class="back">Back</button><button class="getData">Next question</button>`;
    }
    this.render(markup);
  }

  _clearStats() {
    this._stats.innerHTML = "";
  }

  _updateStats(goodAnswers = 0, badAnswers = 0) {
    this._clearStats();
    const markup = `<span>Good count: ${goodAnswers}</span> <span>Bad count: ${badAnswers}</span>`;
    this._stats.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new quizView();
