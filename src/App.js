import React from "react";

// Data
import data from "./data";
//Components
import Card from "./comp/card";
import Button from "./comp/button";

const App = () => {
  const [bDayData, setBDayData] = React.useState(data);
  const CardList = bDayData.map((item) => <Card {...item} />);
  let num = bDayData.length;

  function viewAllButton() {
    setBDayData([]);
    num = 0;
  }

  return (
    <div className="app">
      <h1 className="app--header">{num} Birthdays Today</h1>
      {CardList}
      <Button onClickHandler={viewAllButton} />
    </div>
  );
};

export default App;
