// Exercise 3: Counter

import { useState } from 'react';

// Create a component called Counter that accepts an initial count prop. Display the count value and add buttons to increment and decrement the count. Implement the logic for updating the count when the buttons are clicked.
const Counter = ({ count, setCount }) => {
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
