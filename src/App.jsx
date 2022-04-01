import { Suspense } from "react";

const App = () => {
  return (
    <div className="app">
      <h1>Here are your Todos for today</h1>
      <p>Click on any todo to view more details about it</p>
      <h3>Pending Todos</h3>
      <Suspense fallback={<h1>Loading Pending Todos...</h1>}>

      </Suspense>
      <h3>Completed Todos</h3>
      <Suspense fallback={<h1>Loading Completed Todos...</h1>}>
        
      </Suspense>
    </div>
  )
}

export default App;