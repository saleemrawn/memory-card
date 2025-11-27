export default function Header({ resetOnClick }) {
  return (
    <header>
      <div className="logo">
        Memory<span>Game</span>
      </div>
      <div className="config">
        <button className="primary reset" onClick={resetOnClick}>
          Reset
        </button>
      </div>
    </header>
  );
}
