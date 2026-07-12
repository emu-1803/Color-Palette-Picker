import React from "react";
import ColorButton from "./components/ColorButton";
import ColorPreview from "./components/ColorPreview";
import { useState } from "react";

function App() {
  const color = [
    "AliceBlue",
    "Beige",
    "BurlyWood",
    "DarkKhaki",
    "Chocolate",
    "Brown",
    "DarkRed",
    "Maroon",
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
        {color.map((colors) => (
          <ColorButton
            key={colors}
            color={colors}
            isSelected={colors == selectColor}
            onClick={() => setSelectedColor(colors)}
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
