import { useState } from "react";
import "./App.css";
import Buttons from "./Components/Buttons";

const App = () => {
  const [isMorning, setMorning] = useState(() => true)
  const [count, setCount] = useState(() => 0)

  return (
    <div className={`${isMorning ? "light" : "dark"} w-100 h-100`}>
      <h1>Session 4</h1>
      <div className="mt-2">
        <div>Counter: {count}</div>
        <div className="mt-2">
          <Buttons className={"btn btn-counter"} onClick={() => setCount(() => count + 1)} title={"Increase Count"} />
          <Buttons className={`btn ${isMorning ? "btn-light" : "btn-dark"} ml-2`} onClick={() => setMorning(() => !isMorning)} title={`Switch to ${isMorning ? "dark" : "light"} mode`} />
        </div>
      </div>
    </div>
  )
}

export default App;