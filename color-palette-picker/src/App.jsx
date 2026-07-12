import React from "react";
import ColorButton from "./components/ColorButton";
import ColorPreview from "./components/ColorPreview";
import { useState } from "react";

function App() {
  const color = [
    "AliceBlue",
    "Beige",
    "AntiqueWhite",
    "BurlyWood",
    "Chocolate",
    "Brown",
    "Maroon",
    "Black",
  ];
  const [selectColor, setSelectedColor] = useState(null);
  function resetColor() {
    setSelectedColor(null);
  }
  return (
    <div>
      <div>
        <h1 className="head">Color Palette Picker</h1>
        <p className="par">Pick a color to preview it below!</p>
      </div>
      <div className="colorButton">
        {color.map((color) => (
          <ColorButton
            key={color}
            color={color}
            onClick={() => setSelectedColor(color)}
          ></ColorButton>
        ))}
      </div>
      <ColorPreview color={selectColor} />
      <div className="Reset">
        <button onClick={resetColor}>Reset</button>
      </div>
    </div>
  );
}
export default App;
