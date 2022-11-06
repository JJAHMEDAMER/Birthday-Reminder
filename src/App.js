import React from "react";

// Data
import data from "./data";
//Components
import Card from "./comp/card";
import Button from "./comp/button";

const CardList = data.map((item) => <Card {...item} />);

const App = () => (
  <div className="app">
    {CardList}
    <Button />
  </div>
);

export default App;
