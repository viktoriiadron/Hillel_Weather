// add options to select from array
function addOptions(){
    let citys = document.querySelector('.form-select');
    let array = ['Kiev', 'Berdyansk', 'Lviv', 'Odessa', 'Chernivtsi'];
    for(let item in array){
        let option = document.createElement('option');
        option.value = array[item];
        option.text = array[item];
        citys.appendChild(option);
    }
    if(citys[0]){
        let card = document.querySelector('.card');
        card.style.display = 'none';
    } else {
        let card = document.querySelector('.card');
        card.style.display = 'flex';
    }
}
addOptions();

// get value from option
let select = document.querySelector('.form-select');
select.addEventListener('change', getValue);
function getValue(){
    let cityName = select.value;
    // hide the card if the city isn't selected
    if(cityName === '0'){
        let card = document.querySelector('.card');
        card.style.display = 'none';
    } else if (cityName !== '0'){
        let card = document.querySelector('.card');
        card.style.display = 'flex';
    }
    async function getResponse(cityName){
        return await fetch(`http://api.weatherstack.com/current?access_key=7700738807dd33f7c50e7af6fe6fc345&query=${cityName}`);
    }
    async function start(){
        let responce = await getResponse(cityName);
        let data = await responce.json();
        let foto = document.querySelector('.card-img-top'); // get foto
        foto.src = `${data.current.weather_icons}`; // insert foto
        document.querySelector('.card-title').innerHTML = `${data.current.observation_time} -- ${data.current.weather_descriptions}` // time and description
        document.querySelector('.card-text:first-of-type').innerHTML = `Температура: ${data.current.temperature} &deg`; // temperature
        document.querySelector('.card-text:last-of-type').innerHTML = `${data.request.query}`; // city and country
    }
    start();
}