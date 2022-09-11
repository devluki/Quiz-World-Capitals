import * as model from "./model.js";
import quizView from "./views/quizView.js";
import statsView from "./views/statsView.js";

const app = document.querySelector(".app");
let goodAnswers = 0;
let badAnswers = 0;

const letterBounceUnActive = (letter) => {
  setTimeout(() => {
    letter.classList.remove("bounce--active");
  }, 900);
};

const letterBounceActive = () => {
  app.addEventListener("mouseover", function (e) {
    const letter = e.target.closest(".bounce");
    // console.log("hover", letter);
    if (!letter) return;
    letter.classList.add("bounce--active");
    letterBounceUnActive(letter);
  });
};

const inputCheckedHandler = () => {
  const inputs = document.querySelectorAll("#capitalCity");
  inputs.forEach((input) => {
    input.checked = false;
    input.setAttribute("selected", false);
  });
};

const activeSubmitBtnHandler = () => {
  const btn = document.querySelector(".submit");
  btn.classList.remove("unactive");
};

const addHandlerInputs = () => {
  const inputs = document.querySelectorAll(".input-capital-city");
  inputs.forEach((input) =>
    input.addEventListener("change", function (e) {
      inputCheckedHandler(inputs);
      e.target.setAttribute("selected", true);
      e.target.checked = true;
      activeSubmitBtnHandler();
    })
  );
};

const checkAnswer = () => {
  const submitedAnswer = document.querySelector('[selected="true"]');
  const correctAnswer = model.quizData[model.correctAnswerIndex].capital;

  if (!submitedAnswer) return;
  const submitedAnswerIndex = submitedAnswer.getAttribute("id").slice(13) * 1;
  const data = [
    submitedAnswer.value,
    model.quizData[model.correctAnswerIndex].name.common,
  ];

  console.log(
    "Model Index:",
    model.correctAnswerIndex,
    "Submited Index:",
    submitedAnswerIndex
  );

  if (submitedAnswerIndex === model.correctAnswerIndex) {
    console.log("correct");
    goodAnswers++;
    quizView._renderMessage(true, data);
  } else {
    console.log("not correct");
    badAnswers++;
    quizView._renderMessage(false, data);
  }
  quizView._updateStats(goodAnswers, badAnswers);
};

const renderView = async function () {
  try {
    quizView.renderSpinner();

    await model.getData();

    //
    // quizView.renderQuiz(model.quizData);
    quizView._renderQuizView(model.quizData, model.correctAnswerIndex);
    quizView.addAtributeHandler(inputCheckedHandler);
    quizView.addAtributeHandler(addHandlerInputs);
    quizView.submitBtnHandler(checkAnswer);
  } catch (error) {
    console.log(error);
  }
};

app.addEventListener("click", function (e) {
  if (!e.target.closest(".getData")) return;
  renderView();
  console.log(model.quizData, model.countriesData.length);
});
app.addEventListener("click", function (e) {
  if (!e.target.closest(".back")) return;
  // renderView();
  goodAnswers = 0;
  badAnswers = 0;
  statsView.clearMarkup();
  quizView._renderIndex();
  console.log("back");
});

quizView.addAtributeHandler(letterBounceActive);
// quizView._renderCanvas();
