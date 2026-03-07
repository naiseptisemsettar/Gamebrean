export default function Header({ setPage, dark, setDark, color, setColor }) {
  const style = {
    borderBottom: `2px solid ${color}`,
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: color, // كل النصوص تتأثر باللون
    fontSize: "1.1rem", // تكبير الخط شوي
  };

  const buttonStyle = {
    margin: "5px",
    padding: "8px 14px", // شوي أكبر
    borderRadius: "8px",
    border: `2px solid ${color}`,
    background: "transparent",
    color: color, // النصوص بالأزرار تتأثر باللون
    cursor: "pointer",
    fontSize: "1rem", // تكبير الخط داخل الأزرار
  };

  const inputStyle = {
    marginLeft: "10px",
    width: "40px",
    height: "30px",
    border: `2px solid ${color}`,
    borderRadius: "5px",
    cursor: "pointer",
    background: "transparent",
  };

  return (
    <div style={style}>
      <h2 style={{ margin: "0", fontSize: "1.5rem" }}>Brain Games</h2>

      <div>
        <button style={buttonStyle} onClick={() => setPage("home")}>Home</button>
        <button style={buttonStyle} onClick={() => setPage("play")}>Play</button>
        <button style={buttonStyle} onClick={() => setPage("leaderboard")}>Leaderboard</button>
        <button style={buttonStyle} onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={inputStyle}
        />
      </div>
    </div>
  );
}