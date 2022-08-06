const weatherList = document.querySelector("#weather");
fetch(
  "http://api.openweathermap.org/data/2.5/forecast?&q=Kyiv&units=metric&appid=8abba83ab8f518e7f932c74ac200adb8"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    for (const weather of data.list) {
      const cardHTML = createCard(
        weather.dt,
        Math.round(weather.main.temp),
        Math.round(weather.main.temp_min),
        weather.main.temp_max,
        weather.weather[0].icon,
        weather.weather[0].description
      );
      weatherList.innerHTML += cardHTML;
    }
  })
  .catch(function () {});

function createCard(dt, temp, tempMin, tempMax, icon, description) {
  const date = new Date(dt * 1000);
  const day = new Intl.DateTimeFormat("en", { weekday: "long" }).format(date);
  return `<div class="card_day">
    <p class="forecast_day">${day}</p>
    <div class="degrees_block">
      <p class="font_medium">${temp}°</p>
      <p class="text_gray_400 text_xs">${tempMin}°</p>
    </div>
  </div>`;
}
