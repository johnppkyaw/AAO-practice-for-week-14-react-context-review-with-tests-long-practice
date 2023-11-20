// import { UseCoffee } from '../context/CoffeeContext';
import { useContext } from 'react';
import { CoffeeContext } from '../context/CoffeeContext';

const SelectedCoffeeBean = () => {
  const { coffeeBean } = useContext(CoffeeContext);
  // const { coffeeBean } = UseCoffee();
  return (
    <div className="selected-coffee">
      <h2>Current Selection: {coffeeBean.name} </h2>
    </div>
  );
}

export default SelectedCoffeeBean;
