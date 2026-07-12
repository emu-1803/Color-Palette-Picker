function ColorButton({ color, onClick, isSelected }) {
  return (
    <div className="Button">
      <button
        onClick={onClick}
        style={{
          backgroundColor: color,
          borderColor: isSelected ? "Aqua" : color,
        }}
      >
        {color}
      </button>
    </div>
  );
}
function resetColor() {
  setSelectedColor(null);
}

export default ColorButton;
