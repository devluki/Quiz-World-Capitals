import * as model from "./model.js";
import quizView from "./views/quizView.js";

const app = document.querySelector(".app");

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
  const inputs = document.querySelectorAll("#capitalCity");
  // console.log(inputs);

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
  console.log(
    submitedAnswer.value,
    correctAnswer,
    submitedAnswer.value === correctAnswer
  );
  if (submitedAnswer.value === correctAnswer[0]) {
    console.log("correct");
  } else {
    console.log("not correct");
  }
  // console.log(submitedAnswer);
};

const renderView = async function () {
  try {
    quizView.renderSpinner();

    await model.getData();

    //
    // quizView.renderQuiz(model.quizData);
    quizView._generateMarkup(model.quizData, model.correctAnswerIndex);
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
