import * as model from "./model.js";
import quizView from "./views/quizView.js";

const app = document.querySelector(".app");

const inputCheckedHandler = (inputs) => {
  inputs.forEach((input) => {
    input.checked = false;
    input.setAttribute("selected", false);
  });
};

const activeSubmitBtnHandler = () => {
  console.log(document.querySelector('[selected="true"]'));
  if (!document.querySelector('[selected="true"]')) return;
  const btn = document.querySelector(".getData");
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
      console.log("input");
      activeSubmitBtnHandler();
    })
  );
};

const renderView = async function () {
  try {
    quizView.renderSpinner();

    await model.getData();

    //
    quizView.renderQuiz(model.quizData);
    addHandlerInputs();
  } catch (error) {
    console.log(error);
  }
};

app.addEventListener("click", function (e) {
  if (!e.target.closest(".getData")) return;
  renderView();
  console.log(model.quizData, model.countriesData.length);
});
