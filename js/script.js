const cardImage = document.querySelector('.card-img-top');
const cardTitle = document.querySelector('.card-title');
const cardText = document.querySelectorAll('.card-text');
const select = document.querySelector('.form-select');

function newCity(cityName) {
    let city = document.createElement('option');
    city.setAttribute('value', cityName);
    city.innerText = cityName;
    select.append(city);
}
newCity('New York');
newCity('Paris');
newCity('London');
newCity('Sydney');

select.addEventListener('change', (event) => {
    const parametrs = new URLSearchParams({
        access_key: 'd980918584d58c50725729c01653726e',
        query: event.target.value
    });

    async function getWeather() {
        let response = await fetch(`http://api.weatherstack.com/current?${parametrs}`);
        return response.json();
    }

    async function drawCard() {
        let data = await getWeather();
        cardImage.src = data.current.weather_icons[0];
        cardTitle.innerHTML = `${data.current.observation_time} -- ${data.current.weather_descriptions[0]}`;
        cardText[0].innerHTML = `Temperature: ${data.current.temperature}`;
        cardText[1].innerHTML = `${data.location.name}, ${data.location.country}`;
    }
    drawCard()
});



// const parametrs = new URLSearchParams({
//   access_key: 'd980918584d58c50725729c01653726e',
//   query: 'Kharkiv'
// });

// async function getWeather() {
//     let response = await fetch(`http://api.weatherstack.com/current?${parametrs}`);
//     return response.json();
// }

// async function drawCard() {
//     let data = await getWeather();
//     cardImage.src = data.current.weather_icons[0];
//     cardTitle.innerHTML = `${data.current.observation_time} -- ${data.current.weather_descriptions[0]}`;
//     cardText[0].innerHTML = `Temperature: ${data.current.temperature}`;
//     cardText[1].innerHTML = `${data.location.name}, ${data.location.country}`;
// }

// drawCard()

