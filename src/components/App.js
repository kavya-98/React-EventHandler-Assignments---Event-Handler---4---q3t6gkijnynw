import React from "react";
import "../styles/App.css";
const App = () => {
  const handleDoubleClick = (event) => {
    event.preventDefault();
    console.log("I was double clicked");
  };
  const handleSingleClick = (event) => {
    event.preventDefault();
    console.log("I was not double clicked");
  };

  return (
    <div id="main">
      <button
        onDoubleClick={handleDoubleClick}
        onClick={handleSingleClick}
        id="dblclick-btn"
      >
        Double click me
      </button>
    </div>
  );
};

export default App;
