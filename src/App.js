import Counter from './components/Counter';
import Greeting from './components/Greeting';
import UserList from './components/UserList';
import Color from './components/Color';

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Greeting name="Mikael" />
      <UserList name="Colby" age={33} />
      <Counter count={count} setCount={setCount} />
      <Color color="red" />
      <Color color="blue" />
      <Color color="aqua" />
    </div>
  );

  // Exercise 5: Todo List
  // Create a component called TodoList that accepts an array of todo objects as a prop. Each todo object should have properties like id, title, and completed. Display the list of todos, including their titles, and indicate if they are completed or not using a checkbox or a different styling.
}

export default App;
