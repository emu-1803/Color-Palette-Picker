function ColorButton({ color, onClick }) {
  return (
    <div className="Button">
      <button onClick={onClick} style={{ backgroundColor: color }}>
        {color}
      </button>
    </div>
  );
}
function resetColor() {
  setSelectedColor(null);
}

export default ColorButton;
