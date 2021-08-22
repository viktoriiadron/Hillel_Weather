const key = '140256757c07f3e752b265c7569c113f';
const card = document.querySelector('.card')
const cardImage = document.querySelector('.card-img-top');
const cardTitle = document.querySelector('.card-title');
const cardText = document.querySelectorAll('.card-text');
const select = document.querySelector('.form-select');
card.hidden = true;

function addNewCity(cityName) {
    let city = document.createElement('option');
    city.setAttribute('value', cityName);
    city.innerText = cityName;
    select.append(city);
}

addNewCity('New York');
addNewCity('Paris');
addNewCity('London');
addNewCity('Sydney');
addNewCity('Tokyo');

async function fillCard(event) {
    let data = await getWeather(event);
    cardImage.src = data.current.weather_icons[0];
    cardTitle.innerHTML = `${data.current.observation_time} -- ${data.current.weather_descriptions[0]}`;
    cardText[0].innerHTML = `Temperature: ${data.current.temperature}`;
    cardText[1].innerHTML = `${data.location.name}, ${data.location.country}`;
    card.hidden = false;
}

async function getWeather(event) {
    let response = await fetch(`http://api.weatherstack.com/current?access_key=${key}&query=${event.target.value}`);
    return response.json();
}

function displayCard(event) {
    if (event.target.value !== "0") {
        fillCard(event);
    } else card.hidden = true;
}

select.addEventListener('change', displayCard);