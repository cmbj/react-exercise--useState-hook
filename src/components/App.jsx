import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  const [newTime, setNewTime] = useState(time);

  const getTime = () => {
    setNewTime(new Date().toLocaleTimeString());
  };

  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{newTime}</h1>
    </div>
  );
}

export default App;
