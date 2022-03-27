import "./App.css";
import AddTransaction from "./Components/AddTransaction";
import CurrentBalance from "./Components/CurrentBalance";
import ExpenseBoard from "./Components/ExpenseBoard";
import Header from "./Components/Header";
import TransactionHistory from "./Components/TransactionHistory";
import { TransactionProvider } from "./Context/TransContext";

const App = () => {

  return (
    <TransactionProvider>
      <div className="container">
        <Header />
        <CurrentBalance />
        <ExpenseBoard />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </TransactionProvider>
  )
}

export default App;