import { API_URL, capitalsQuantity } from "./config.js";

export const countriesData = [];
export const quizData = [];
let index;
export let correctAnswearIndex;

const selectRandomCountries = (index, data) => {
  quizData.push(data[index]);
  data.splice(index, 1);
};

const randomIndexGenerator = (max, flag) => {
  const min = 0;
  max = Math.floor(max);
  if (flag === true) {
    index = Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    correctAnswearIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("answear index:", correctAnswearIndex);
  }

  // console.log(index);
};

const handleQuizData = (data, capitalsQuantity) => {
  const allCountriesData = [...data];
  for (let i = 0; i < capitalsQuantity; i++) {
    randomIndexGenerator(allCountriesData.length - 1, true);
    console.log(
      "allCountries length:",
      allCountriesData.length,
      allCountriesData
    );
    selectRandomCountries(index, allCountriesData);
  }
  randomIndexGenerator(capitalsQuantity - 1, false);
};

const clearData = (arr) => {
  arr.splice(0, capitalsQuantity);
};

export const getData = async function () {
  if (countriesData.length === 0) {
    await fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        data.map((country) => countriesData.push(country));
        handleQuizData(countriesData, capitalsQuantity);
        // console.log(quizData);
      })
      .catch((err) => console.log(err));
  } else {
    clearData(quizData);
    handleQuizData(countriesData, capitalsQuantity);
    // console.log(quizData);
  }
};
