import React from "react";

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.submit}>
        <input
          type="text"
          value={props.value}
          placeholder="Wpisz miasto"
          onChange={props.change}
        />
        <button>wyszukaj Miasto</button>
      </form>
    </div>
  );
};

export { Form };
