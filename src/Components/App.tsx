import React from "react";
// components
import CounterClass from "./Counter/CounterClass";
import CounterFunction from "./Counter/CounterFunction";

function App() {
  return (
    <div className="App">
      <CounterClass initialCount={5} />
      <CounterFunction initialCount={10} />
    </div>
  );
}

export default App;
