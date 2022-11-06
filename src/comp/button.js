import React from "react";

const Button = (props) => (
  <div>
    <button className="button" onClick={props.onClickHandler}>
      Clear All
    </button>
  </div>
);

export default Button;
