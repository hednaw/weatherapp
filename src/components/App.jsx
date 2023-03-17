import "./App.css";
import React, { Component } from "react";
import { WeatherLog } from "./WeatherLog/WeatherLog";
import { Form } from "./Form/Form";
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
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=bc33340834a92b210a8610442f99f508&lang=pl&units=metric`;

    e.preventDefault();
    console.log("Test");
    fetch(API)
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response;
        }
        throw Error("Błąd");
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
