import React from "react";

const Card = (props) => (
  <div className="card">
    <img className="card--image" src={props.image} alt="profile" />
    <div className="card--info">
      <h1 className="card--name">{props.name}</h1>
      <p className="card--age">{props.age}</p>
    </div>
  </div>
);

export default Card;
