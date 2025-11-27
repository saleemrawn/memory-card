export default function Header({ imageTypes, imageOnChange, resetOnClick }) {
  return (
    <header>
      <div className="logo">
        Memory<span>Game</span>
      </div>
      <div className="config">
        <div className="card-image-select">
          <label htmlFor="cardImageSelect">Choose images</label>
          <select name="card-images" id="cardImageSelect" className="round" onChange={imageOnChange}>
            {imageTypes.map((type) => (
              <option key={type.name} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
        <button className="primary reset" onClick={resetOnClick}>
          Reset
        </button>
      </div>
    </header>
  );
}
