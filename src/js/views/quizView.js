// import View from "./View";
import { correctAnswerIndex } from "../model";

class quizView {
  data;
  _choices;
  _parentElement = document.querySelector(".app__main");

  // General functions
  clearMarkup() {
    this._parentElement.innerHTML = "";
    console.log("clearMarkup");
  }
  render(markup) {
    // const markup = this._generateMakrup();
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

  //

  addAtributeHandler(handler) {
    handler();
  }

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
      markup = `<p>That's correct! ${data[0]} is a Capital City of ${data[1]}</p><button class="back">Back</button><button class="getData">Next question</button>`;
    } else {
      markup = `<p>Sorry this isn't correct answer...${data[0]} is not a Capital City of ${data[1]}</p><button class="back">Back</button><button class="getData">Next question</button>`;
    }
    this.render(markup);
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

export default new quizView();
