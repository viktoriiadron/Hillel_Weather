let selectCites = document.querySelector('.form-select');

function addCity (parent,  city) {
 let newOption = new Option(city,city);
 parent.append(newOption);
}

addCity(selectCites, 'Kiev');
addCity(selectCites, 'Dnipro');
addCity(selectCites, 'Irpen');
addCity(selectCites, 'Pavlohrad');

selectCites.addEventListener('click', function(event){
    if(event.target.value === 'Kiev'){
        fetch('https://api.weatherstack.com/current?access_key=d8ac7d7c40504795f666ab61c3291478&query=Kiev')
  .then(response => response.json()).then(function(jsonObj){
    let card = document.querySelector('.card');
        card.hidden = false;
    let img = document.querySelector('.card-img-top')
    img.src = `${jsonObj.current.weather_icons}`
    let cardH5 = document.querySelector('.card-title');
    cardH5.innerHTML = `Time -- ${jsonObj.location.localtime}`;
    let p = document.querySelectorAll('.card-text')
    p[0].innerHTML = `Temperature: ${jsonObj.current.temperature}`;
    p[1].innerHTML = `${jsonObj.request.query}`;
});
    }else if(event.target.value === 'Dnipro'){
        fetch('https://api.weatherstack.com/current?access_key=d8ac7d7c40504795f666ab61c3291478&query=Dnipro')
        .then(response => response.json()).then(function(jsonObj){
          let card = document.querySelector('.card');
          card.hidden = false;  
          let img = document.querySelector('.card-img-top')
          img.src = `${jsonObj.current.weather_icons}`
          let cardH5 = document.querySelector('.card-title');
          cardH5.innerHTML = `Time -- ${jsonObj.location.localtime}`;
          let p = document.querySelectorAll('.card-text')
          p[0].innerHTML = `Temperature: ${jsonObj.current.temperature}`;
          p[1].innerHTML = `${jsonObj.request.query}`; 
})
    }else if(event.target.value === 'Pavlohrad'){
        fetch('https://api.weatherstack.com/current?access_key=d8ac7d7c40504795f666ab61c3291478&query=Pavlohrad')
        .then(response => response.json()).then(function(jsonObj){
          let card = document.querySelector('.card');
          card.hidden = false;
          let img = document.querySelector('.card-img-top')
          img.src = `${jsonObj.current.weather_icons}`
          let cardH5 = document.querySelector('.card-title');
          cardH5.innerHTML = `Time -- ${jsonObj.location.localtime}`;
          let p = document.querySelectorAll('.card-text')
          p[0].innerHTML = `Temperature: ${jsonObj.current.temperature}`;
          p[1].innerHTML = `${jsonObj.request.query}`; 
})
    }else if(event.target.value === 'Irpen'){
        fetch('https://api.weatherstack.com/current?access_key=d8ac7d7c40504795f666ab61c3291478&query=Irpen')
        .then(response => response.json()).then(function(jsonObj){
            let card = document.querySelector('.card');
            card.hidden = false;
            let img = document.querySelector('.card-img-top')
          img.src = `${jsonObj.current.weather_icons}`
          let cardH5 = document.querySelector('.card-title');
          cardH5.innerHTML = `Time -- ${jsonObj.location.localtime}`;
          let p = document.querySelectorAll('.card-text')
          p[0].innerHTML = `Temperature: ${jsonObj.current.temperature}`;
          p[1].innerHTML = `${jsonObj.request.query}`; 
})
    }else if(event.target.value === 'Kharkiv'){
        fetch('https://api.weatherstack.com/current?access_key=d8ac7d7c40504795f666ab61c3291478&query=Kharkiv')
        .then(response => response.json()).then(function(jsonObj){
          let card = document.querySelector('.card');
          card.hidden = false;
          let img = document.querySelector('.card-img-top')
          img.src = `${jsonObj.current.weather_icons}`
          let cardH5 = document.querySelector('.card-title');
          cardH5.innerHTML = `Time -- ${jsonObj.location.localtime}`;
          let p = document.querySelectorAll('.card-text')
          p[0].innerHTML = `Temperature: ${jsonObj.current.temperature}`;
          p[1].innerHTML = `${jsonObj.request.query}`; 
}) 
    }else{
        let card = document.querySelector('.card');
        card.hidden = true;
    }
})






