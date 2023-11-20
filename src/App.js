import coffeeBeans from "./mockData/coffeeBeans.json";
import SelectedCoffeeBean from "./components/SelectedCoffeeBean";
import SetCoffeeBean from "./components/SetCoffeeBean";

function App() {
  return (
    <>
      <h1>Welcome to Coffee App</h1>
      <SetCoffeeBean coffeeBeans={coffeeBeans}/>
      <SelectedCoffeeBean />
    </>
  );
}

export default App;
