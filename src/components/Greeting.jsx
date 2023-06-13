// Exercise 1: Displaying Props
// Create a component called Greeting that accepts a name prop and displays a greeting message with the provided name. Render the Greeting component with a different name prop and display it on the screen.

const Greeting = ({ name }) => {
  return <p>Hello {name}</p>;
};

export default Greeting;
