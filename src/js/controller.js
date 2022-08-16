import * as model from "./model.js";
import quizView from "./views/quizView.js";

const renderView = async function () {
  try {
    quizView.renderSpinner();
    // loading data
    await model.getData();
    // console.log(data);
    //
  } catch (error) {
    console.log(error);
  } finally {
    quizView.renderQuestion(model.quizData);
  }
};

const btn = document.querySelector(".getData");
// btn.addEventListener("click", getData);
btn.addEventListener("click", function () {
  renderView();
  console.log(model.quizData);
});
