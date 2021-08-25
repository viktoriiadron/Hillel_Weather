let form = document.querySelector('.form-select');

async function getData(city) {
    return fetch(`http://api.weatherstack.com/current?access_key=9e154703f775ddcaafd72bf81cc9900d&query=${city}`);
}

function addCity(city) {
    let cityOption = document.createElement('option');
    cityOption.setAttribute(`value`, `${city}`);
    cityOption.innerHTML = `${city}`;
    form.append(cityOption);
}

addCity('Kiev');
addCity('Paphos');
addCity('Limassol');
addCity('New York');

form.addEventListener('change', function (e) {
    let selectedCity = e.target;
    let city = selectedCity.value;
    getWeather(city);

window.addEventListener('load', async function load() {
    await getWeather()
});

async function getWeather(city) {
    let cardElem = document.querySelector('.card');
    if (city && city !=0) {
        cardElem.hidden = false;
        let card = document.querySelector('.card-body');
        let picture = document.querySelector('.card-img-top');
        let cardTitle = document.querySelector('.card-title');
        let cardText = document.querySelector('.card-text');
        let temp = card.lastElementChild;
        let address = await getData(city);
        let data = await address.json();
        picture.setAttribute('src', `${data.current.weather_icons}`);
        cardTitle.innerHTML = `${data.current.observation_time} -- ${data.current.weather_descriptions}`;
        cardText.innerHTML = `Temperature: ${data.current.temperature}`
        temp.innerHTML = `${data.location.name}, ${data.location.country}`
    } else {
        cardElem.hidden = true;
    }
}

