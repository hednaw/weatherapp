import React from "react";
const WeatherLog = (props) => {
  const { err, city, sunrise, sunset, temp, pressure, wind } = props.weather;
  let content = null;

  const sunriseString = new Date(sunrise * 1000).toLocaleTimeString();
  const sunsetString = new Date(sunset * 1000).toLocaleTimeString();
  if (!err && city) {
    content = (
      <>
        <ul className="list-group">
          <li className="list-group-item">{city}</li>
          <li className="list-group-item">Temperatura: {temp}&#176;C</li>
          <li className="list-group-item">Wschód słońca: {sunriseString}</li>
          <li className="list-group-item">Zachód słońca: {sunsetString}</li>
          <li className="list-group-item">Ciśnienie: {pressure} hPa</li>
          <li className="list-group-item">Prędkość wiatru: {wind} m/s</li>
        </ul>
      </>
    );
  }

  return (
    <div>
      <p>{err ? `Nie mamy w bazie miasta "${city}"` : content}</p>
    </div>
  );
};

export { WeatherLog };
