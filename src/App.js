import Dinner from "./dinner";

const App = () => {
  return (
    <div className="App">
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