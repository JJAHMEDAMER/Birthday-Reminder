import React from "react";

// Data
import data from "./data";
//Components
import Card from "./comp/card";
import Button from "./comp/button";

const CardList = data.map((item) => <Card {...item} />);

const App = () => (
  <div className="app">
    <h1 className="app--header">{data.length} Birthdays Today</h1>
    {CardList}
    <Button />
  </div>
);

export default App;
