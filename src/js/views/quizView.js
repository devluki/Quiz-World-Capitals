import View from "./View";
import { correctAnswerIndex } from "../model";

class quizView extends View {
  data;
  _choices;
  _parentElement = document.querySelector(".app__main");

  addAtributeHandler(handler) {
    handler();
  }

  submitBtnHandler(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const submitBtn = e.target.closest(".submit");
      if (!submitBtn) return;

      console.log("submit");
      handler();
    });
  }

  gnerateChoiceOptions(data) {
    let markup = "";
    data.map((el, i) => {
      markup += ` <div>
    <input type="radio" id="capitalCity" name="capitalCity" value='${
      el.capital ? el.capital[0] : "Don't have Capital City"
    }'>
    <label for="capitalCity--${i}">${
        el.capital ? el.capital[0] : "Don't have Capital City"
      }</label>
    </div>`;
    });
    this._choices = markup;
    console.log("_choises:", this._choices);
  }

  renderQuizView(data, index) {
    console.log("data:", data, "Index:", index, data[index].capital);
    this.gnerateChoiceOptions(data);
    return `<h3>What is Capital City of ${data[index].name.common}</h3><div>${this._choices}<button>Back</button><button class="unactive submit">Submit</button></div>`;
    // return `<h3>What is Capital City of ${data[index].capital}</h3><form>${this._choices}</form><button>Back</button><button class="unactive submit">Submit</button>`;
  }

  _generateMarkup(data, index) {
    this.clearMarkup();
    const markup = this.renderQuizView(data, index);

    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new quizView();
