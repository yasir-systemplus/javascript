const weatherDiv = document.getElementById("load-weather");

const request = new XMLHttpRequest();

function get() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=04ddb0d19a88cdaba732986bb093bb7e`;

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

weatherDiv.appendChild(loader());

get()
  .then(successHandler)
  .catch(failHandler)
  .finally(() => {
    const loader = document.getElementsByClassName("loader")[0];

    loader.classList.remove("show");
    loader.classList.add("hidden");
    console.log("Bhola Record");
  });

function failHandler(status) {
  console.log(status);

  const markup = `
  <p>There is problem in this request. Error Code: ${status}</p>
  `;

  weatherDiv.innerHTML = markup;
}

function successHandler(resp) {
  const jsonResp = JSON.parse(resp);

  const markup = `

  <strong>Location:</strong> ${jsonResp.name}<br/>
  <strong>Temperature:</strong> ${toF(jsonResp.main.temp)} F<br/>
  <strong>Feels like:</strong> ${toF(jsonResp.main.feels_like)} F<br/>
  <strong>Temperature Min.:</strong> ${toF(jsonResp.main.temp_min)} F<br/>
  <strong>Temperature Max.:</strong> ${toF(jsonResp.main.temp_max)} F<br/>
  <strong>Pressure:</strong> ${jsonResp.main.pressure}<br/>
  <strong>Humidity:</strong> ${jsonResp.main.humidity}<br/>
  `;

  weatherDiv.innerHTML += markup;
}

function toF(k) {
  return ((k - 273.15) * 1.8 + 32).toFixed(0);
}

function loader() {
  const loader = document.createElement("p");
  loader.classList.add("loader");
  loader.classList.add("show");

  loader.innerHTML = "Loading...";

  return loader;
}
