// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
const key = "769a3d855ec0519bc495c81caf6e8547";
let city = "";

let input = document.getElementById("input");
let btn = document.getElementById("button");
let pcity = document.getElementById("pcity");

function prtF() {
  pcity.innerText = input.value;
  console.log("ok");
  city = pcity.innerText;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
  )
    .then((response) => response.json())
    .then(myF)
    .catch((err) => console.log(err));

  function myF(result) {
    pcity.innerText = result.weather[0].description;
  }
}

btn.addEventListener("click", prtF);
