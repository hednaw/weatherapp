import React from "react";
const WeatherLog = (props) => {
  const { err, city, sunrise, sunset, temp, pressure, wind } = props.weather;
  let content = "";

  if (!err && city) {
    const sunriseString = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetString = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <>
        <p>{city}</p>
        <p>Temperatura: {temp}&#176;C</p>
        <p>Wschód słońca: {sunriseString}</p>
        <p>Zachód słońca: {sunsetString}</p>
        <p>Ciśnienie: {pressure} hPa</p>
        <p>Prędkość wiatru: {wind} m/s</p>
      </>
    );
  }
  return (
    <div>
      <p>{err ? `Nie mamy w bazie miasta "${city}` : content}"</p>
    </div>
  );
};

export { WeatherLog };
