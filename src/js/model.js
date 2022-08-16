import { API_URL, capitalsQuantity } from "./config.js";

const countriesData = [];
const quizData = [];
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
    randomIndexGenerator(0, allCountriesData.length);
    selectRandomCountries(index, allCountriesData);
  }
  return quizData;
};

const clearData = (arr) => {
  arr.splice(0, capitalsQuantity);
};

const getData = () => {
  if (countriesData.length === 0) {
    fetch(API_URL)
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
    console.log(quizData);
  }
};

export default getData;
