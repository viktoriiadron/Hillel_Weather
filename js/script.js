// Необходимо создать простой cелект с 5ю городами и вывести информацию 
// о текущей погоде на страницу. (обратите внимание на атрибут value, 
// заполнение его обязательно, чтобы потом можно было считать данные 
// по кликнутой опции).

// Селект заполняем через js

// По клику на опцию внутри селекта, карточка должна перерисовываться с 
// новой информацией полученной с сервера согласно тестовым данным в HTML
// . (для этого вам понадобится событие change и value целевого элемента)

// Если никакой город не выбран карточка должна скрываться.


const weatherCard = document.querySelector('.card');
const URL = 'http://api.weatherstack.com/current?access_key=287b578492e99796f2bcbfb24b9240a7&query=';

let weatherSelect = document.querySelector('.form-select');

let cities = [
    'Tbilisi',
    'Norilsk',
    'Saint-Petersburg',
    'Kotor'
];

let options = cities.map(city => {
  let value = city.toLowerCase(),
    newOption = new Option(city, value);

    weatherSelect.add(newOption);
});

weatherSelect.addEventListener('change', function(element) {
    weatherCard.classList.add('loading');
    if(element.target.value === '0') {
        weatherCard.classList.add('hidden');
    } else {
        weatherCard.classList.remove('hidden');
        start(element.target.value);
    }
});

async function getCity(city) {
    let response = await fetch(`${URL}${city}`);
    return response.json();
}

async function start(cityName) {
    let city = await getCity(cityName);
    createCard(city);
}

function createCard(data) {
    let img = weatherCard.querySelector('.card-img-top'),
        title = weatherCard.querySelector('.card-title'),
        temperature = weatherCard.getElementsByClassName('card-text')[0],
        location = weatherCard.getElementsByClassName('card-text')[1];

    img.src = data.current.weather_icons[0];
    img.alt = data.current.weather_descriptions[0];
    title.innerHTML = `${data.current.observation_time} -- ${data.current.weather_descriptions[0]}`;
    temperature.innerHTML = `Temperature: ${data.current.temperature}`;
    location.innerHTML = data.request.query;
    setTimeout(() => weatherCard.classList.remove('loading'), 300);
}