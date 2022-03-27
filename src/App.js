import "./App.css";
import Child from "./Components/Child";
import { TransactionProvider } from "./ContextApi/TransContext";

const App = () => {

  return (
    <TransactionProvider>
      <div>
        <Child />
      </div>
    </TransactionProvider>
  )
}

export default App;