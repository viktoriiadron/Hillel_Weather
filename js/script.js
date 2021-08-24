let select = document.querySelector(".form-select")
let img = document.querySelector(".card-img-top")
let h5 = document.querySelector(".card-title")
let p = document.querySelectorAll(".card-text")
let card = document.querySelector(".card")
crtOption("Kiev", "Kiev", true, false)
crtOption("London", "London", true, false)
crtOption("Paris", "Paris", true, false)
crtOption("Berlin", "Berlin", true, false)
select.addEventListener("change", async function (event) {
  if (event.target.value === "0") {
    card.style.display = "none"
  } else {
    card.style.display = "flex"
    let target = await getCity(event.target.value)
    chgCard(target)
  }
})
async function getCity(target) {
  let response = await fetch(
    `http://api.weatherstack.com/current?access_key=5e0d49c552d761ba4c5e2b3dd95fb384&query=${target}`
  )
  return response.json()
}

function crtOption(text, value, defaultSelected, selected) {
  let option = new Option(text, value, defaultSelected, selected)
  select.append(option)
}

function chgCard(data) {
  img.src = data.current.weather_icons
  h5.innerHTML = `${data.current.observation_time} -- ${data.current.weather_descriptions}`
  p[0].innerHTML = `Temperature: ${data.current.temperature}`
  p[1].innerHTML = data.request.query
}
