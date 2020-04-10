import React from "react";

let d = new Date();
function App() {
  return (
    <div>
      <h1>{d.getFullYear() - 1}</h1>
    </div>
  );
}

export default App;
