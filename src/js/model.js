import { API_URL, capitalsQuantity } from "./config.js";

export const countriesData = [];
export const quizData = [];
let index;

const selectRandomCountries = (index, data) => {
  quizData.push(data[index]);
  data.splice(index, 1);
};

const randomIndexGenerator = (min = 0, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  index = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(index);
};

const handleQuizData = (data, capitalsQuantity) => {
  const allCountriesData = [...data];
  for (let i = 0; i < capitalsQuantity; i++) {
    randomIndexGenerator(0, allCountriesData.length - 1);
    console.log(
      "allCountries length:",
      allCountriesData.length,
      allCountriesData
    );
    selectRandomCountries(index, allCountriesData);
  }
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
