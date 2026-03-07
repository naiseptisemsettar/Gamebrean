export default function Home({ settings, setSettings, color, changeBackground }) {
  const cardStyle = {
    border: `2px solid ${color}`,
    borderRadius: "15px",
    padding: "20px",
    margin: "20px",
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.3)",
    minWidth: "280px",
    color: color,
    boxShadow: `0 4px 15px rgba(0,0,0,0.1)`,
  };

  const buttonStyle = {
    border: `2px solid ${color}`,
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    background: "transparent",
    color: color,
    fontWeight: "bold",
    transition: "0.3s",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: `1.5px solid ${color}`,
    background: "rgba(255,255,255,0.6)",
    outline: "none",
    fontSize: "14px",
    color: color,
  };

  return (
    <>
      <style>
        {`
          input::placeholder {
            font-size: 13px;
            color: ${color};
            opacity: 0.7;
          }
          button:hover {
            background: ${color};
            color: #fff;
          }
        `}
      </style>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "40px",
          gap: "20px",
        }}
      >
        {/* بطاقة الترحيب */}
        <div style={cardStyle}>
          <h3 style={{ marginBottom: "10px" }}>Welcome</h3>
          <p style={{ marginBottom: "20px" }}>Eptisem naeis</p>
          <button style={buttonStyle} onClick={changeBackground}>
            🌄 Change Background
          </button>
        </div>

        {/* بطاقة إعدادات اللعبة */}
        <div style={cardStyle}>
          <h3 style={{ marginBottom: "15px" }}>Game Settings</h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              width: "200px",
              margin: "0 auto",
            }}
          >
            <input
              style={inputStyle}
              placeholder="Player Name"
              value={settings.name}
              onChange={(e) =>
                setSettings({ ...settings, name: e.target.value })
              }
            />

            <select
              style={inputStyle}
              value={settings.difficulty}
              onChange={(e) =>
                setSettings({ ...settings, difficulty: e.target.value })
              }
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            <select
              style={inputStyle}
              value={settings.rounds}
              onChange={(e) =>
                setSettings({ ...settings, rounds: e.target.value })
              }
            >
              <option value="3">3 Rounds</option>
              <option value="5">5 Rounds</option>
              <option value="7">7 Rounds</option>
            </select>

            <button style={buttonStyle}>Save</button>
          </div>
        </div>
      </div>
    </>
  );
}