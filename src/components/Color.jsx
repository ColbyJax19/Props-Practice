// Exercise 4: Color Box
// Create a component called ColorBox that accepts a color prop. Render a div with the background color set to the provided color prop. Display the color name inside the box as well.

const Color = (props) => {
  return (
    <div className="color-container">
      <div className="color-output" style={{ backgroundColor: props.color }}>
        {props.color}
      </div>
    </div>
  );
};

export default Color;
