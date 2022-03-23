import Dinner from "./dinner";

const App = () => {
  return (
    <div className="App">
      <h1>Session 3 Check</h1>
      <hr />

      <Dinner dishName="Nihaari" sweetDish="Kheer" />
      <hr />
      <Dinner dishName="Biryani" sweetDish="Jaleebi" />
      <hr />
      <Dinner dishName="Karahi" sweetDish="Gajar ka Halwa" />
      <hr />
    </div>
  )
}

export default App;