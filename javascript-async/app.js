const loadWearher = document.getElementById("load-weather");

const request = new XMLHttpRequest();

function get(success) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=04ddb0d19a88cdaba732986bb093bb7e`;
  request.open("get", url);
  request.onload = function () {
    success(request.responseText);
  };
  request.send();
}

get(successHandler);

function successHandler(resp) {
  const jsonResp = JSON.parse(resp);

  const markup = `
  <strong>Temperature:</strong> ${toF(jsonResp.main.temp)} F<br/>
  <strong>Feels like:</strong> ${toF(jsonResp.main.feels_like)} F<br/>
  <strong>Temperature Min.:</strong> ${toF(jsonResp.main.temp_min)} F<br/>
  <strong>Temperature Max.:</strong> ${toF(jsonResp.main.temp_max)} F<br/>
  <strong>Pressure:</strong> ${jsonResp.main.pressure}<br/>
  <strong>Humidity:</strong> ${jsonResp.main.humidity}<br/>
  `;

  loadWearher.innerHTML = markup;
}

function toF(k) {
  return ((k - 273.15) * 1.8 + 32).toFixed(0);
}
