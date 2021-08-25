let form = document.querySelector('.form-select');

for (cityName of ['Kiev', 'London', 'New-York', 'Milan']) {
    let newCity = document.createElement('option');
    newCity.value = cityName;
    newCity.textContent = cityName;
    form.appendChild(newCity);
}

form.addEventListener("change", function (event) {
    if (event.target.value !== '0') {
        document.querySelector('.card').hidden = false;
        const promise = fetch(`http://api.weatherstack.com/current?access_key=d68227bc6661e1d8090828ff098a83dc&query=${event.target.value}`)
            .then(response => response.json())
            .then((data) => {
                const { current, location } = data;
                document.querySelector('.card-img-top').src = `${current.weather_icons}`;
                document.querySelector('.card-text').textContent = `Temperature : ${current.temperature}`;
                document.querySelector('.card-title').textContent = `${current.observation_time} -- ${current.weather_descriptions}`;
                document.querySelector('.card-body').lastElementChild.textContent = `${location.name}, ${location.country} `
            });

    } else { document.querySelector('.card').hidden = true; }
})
document.querySelector('.card').hidden = true;
