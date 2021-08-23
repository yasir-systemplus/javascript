const weatherDiv = document.getElementById("load-weather");
const request = new XMLHttpRequest();

const cityList = ["karachi"];

function get(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=04ddb0d19a88cdaba732986bb093bb7e`;

  return new Promise((resolve, reject) => {
    request.open("get", url);
    request.onload = function () {
      if (request.status == 200) {
        resolve(request.responseText);
      } else {
        reject(Error(request.status));
      }
    };
    request.send();
  });
}

const allPromise = Promise.all([get(cityList[0])]);

(async function () {
  try {
    const respArr = await allPromise;
    const tranformedInput = respArr.map((w) => JSON.parse(w));
    successHandler(tranformedInput);
  } catch (error) {
    failHandler(error);
  } finally {
    const loader = document.getElementsByClassName("loader")[0];

    loader.classList.remove("show");
    loader.classList.add("hidden");
    console.log("Bhola Record");
  }
})();

function successHandler(resp) {
  const markup = resp
    .map(
      (w) => `
  <h3>Location:${w.name}</h3>
  <strong>Temperature:</strong> ${toF(w.main.temp)} F<br/>
  <strong>Feels like:</strong> ${toF(w.main.feels_like)} F<br/>
  <strong>Temperature Min.:</strong> ${toF(w.main.temp_min)} F<br/>
  <strong>Temperature Max.:</strong> ${toF(w.main.temp_max)} F<br/>
  <strong>Pressure:</strong> ${w.main.pressure}<br/>
  <strong>Humidity:</strong> ${w.main.humidity}<br/>
  `
    )
    .join("");

  weatherDiv.innerHTML += markup;
}

function failHandler(status) {
  console.log(status);

  const markup = `
  <p>There is problem in this request. Error Code: ${status}</p>
  `;

  weatherDiv.innerHTML = markup;
}

function toF(k) {
  return ((k - 273.15) * 1.8 + 32).toFixed(0);
}

document.addEventListener("DOMContentLoaded", function () {
  const loader = document.createElement("p");
  loader.classList.add("loader");
  loader.classList.add("show");

  loader.innerHTML = "Loading...";
  weatherDiv.appendChild(loader);
});
