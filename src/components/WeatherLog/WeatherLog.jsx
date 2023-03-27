import React from "react";

const WeatherLog = ({ weather }) => {
  const { err, city } = weather;

  return (
    <div>
      {err ? (
        <span>{`Nie mamy w bazie miasta "${city}"`}</span>
      ) : (
        !err && city && <Component weather={{ ...weather }} />
      )}
    </div>
  );
};

const getToLocaleTimeString = (arg) =>
  new Date(arg * 1000).toLocaleTimeString();
const Component = ({
  weather: { city, sunrise, sunset, temp, pressure, wind },
}) => {
  return (
    <ul className="list-group">
      <li className="list-group-item">{city}</li>
      <li className="list-group-item">Temperatura: {temp}&#176;C</li>
      <li className="list-group-item">
        Wschód słońca: {getToLocaleTimeString(sunrise)}
      </li>
      <li className="list-group-item">
        Zachód słońca: {getToLocaleTimeString(sunset)}
      </li>
      <li className="list-group-item">Ciśnienie: {pressure} hPa</li>
      <li className="list-group-item">Prędkość wiatru: {wind} m/s</li>
    </ul>
  );
};

export { WeatherLog };
