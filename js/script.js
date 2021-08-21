"use strict";
//URL и мой ключ
//ключ легко получить после регистрации на сайте. 250 бесплатных запросов.
//З.Ы. если на момент проверки уже не будет работать, нужно сказать кому-то спасибо за большое кол-во запросов :)))
const url = `http://api.weatherstack.com/current`;
const accessKey = `0f7020398bfc136d5adecbecbc63d36a`;

//заполнение карточки (аргументы через деструктуризацию)
function fillCard({
  location: {
    name: city,
    country: countryName
  },
  current: {
    "observation_time": time,
    temperature: temperature,
    "weather_icons": iconURL,
    "weather_descriptions": weather
  } }) {
  const weatherIco = document.querySelector(".card-img-top");
  weatherIco.src = iconURL;
  weatherIco.alt = weather;

  document.querySelector(".card-body>.card-title").textContent = `${time} -- ${weather}`;

  document.querySelector(".card-body p:nth-child(2)").textContent = `Temperature: ${temperature}`;

  document.querySelector(".card-body p:last-child").textContent = `${city}, ${countryName}`;

  card.hidden = false;
}


//добавление списка городов в select
const cityArr = ["New York", "Beijin", "London", "Berlin", "Kabul", "Sidney"];

function addCities(arr) {
  const select = document.querySelector("select");
  return arr.forEach(item => {
    const option = document.createElement("option");
    select.append(option);
    option.value = option.textContent = item;
  })
}
addCities(cityArr);

//fetch
async function getWeather(queryValue) {
  let response = await fetch(`${url}?access_key=${accessKey}&query=${queryValue}`);
  return response.json();
}

async function drawCards(resp) {
  let data = await getWeather(resp);
  return fillCard(data);
}

//делегирование
const select = document.querySelector("select");
select.addEventListener("change", townSelector);

//скрываем карточку
const card = document.querySelector(".card");
card.hidden = true;

function townSelector(event) {
  if (event.target.value !== "0") {
    drawCards(event.target.value);
  }
}

