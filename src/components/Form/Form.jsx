import React from "react";
import "./Form.css";
const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.submit} className="input-group mb-3">
        <input
          type="text"
          value={props.value}
          placeholder="Wpisz miasto"
          onChange={props.change}
        />
        <button className="btn btn-outline-dark btn-sm">wyszukaj Miasto</button>
      </form>
    </div>
  );
};

export { Form };
