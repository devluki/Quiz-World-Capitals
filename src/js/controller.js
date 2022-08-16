import * as model from "./model.js";
import getData from "./model.js";
import quizView from "./views/quizView.js";
// import { quizData } from "./model.js";

// test get Data
const btn = document.querySelector(".getData");
btn.addEventListener("click", getData);
