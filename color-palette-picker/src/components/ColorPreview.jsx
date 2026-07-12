function ColorPreview({ color }) {
  return (
    <div className="container">
      <h2>Preview:</h2>
      {!color ? (
        <div className="board">
          <p className="no">No color is Selected!</p>
        </div>
      ) : (
        <>
          <div className="selected" style={{ backgroundColor: color }}></div>
          <p className="para">Selected Color is: {color}</p>
        </>
      )}
    </div>
  );
}

export default ColorPreview;
