import "./App.css";
import React, { Component } from "react";
import { WeatherLog } from "./WeatherLog/WeatherLog";
import { Form } from "./Form/Form";
const apiKey = process.env.REACT_APP_API_KEY;
class App extends Component {
  state = {
    value: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false,
  };

  handleSubmit = (e) => {
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${apiKey}&lang=pl&units=metric`;

    e.preventDefault();
    console.log("Test");
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Błąd");
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          err: false,
          city: this.state.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
        });
      })
      .catch((err) => {
        this.setState((prevState) => ({ err: true, city: prevState.value }));
      });
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Aplikacja Pogodowa</h1>
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleSubmit}
        ></Form>
        <WeatherLog weather={this.state}></WeatherLog>
      </div>
    );
  }
}

export default App;
