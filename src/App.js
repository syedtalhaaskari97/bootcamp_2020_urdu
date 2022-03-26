import { useState } from "react";
import "./App.css";
import Parent from "./Components/Parent";
import CounterContext from "./ContextApi/CounterContext";

const App = () => {
  let counter = useState(() => 1)

  return (
    <CounterContext.Provider value={counter}>
      <div>
        <h1>Session 5 After Deployment on Surge</h1>
        <div className="mt-2">
          <Parent />
        </div>
      </div>
    </CounterContext.Provider>
  )
}

export default App;