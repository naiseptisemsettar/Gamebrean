export default function Leaderboard({ leaderboard, color }) {
  const cardStyle = {
    border: `2px solid ${color}`,
    borderRadius: "15px",
    padding: "20px",
    margin: "15px",
    textAlign: "center",
    minWidth: "260px",
  };

  const itemStyle = {
    borderBottom: `1px solid ${color}`,
    paddingBottom: "12px",
    marginBottom: "12px",
  };

  const labelStyle = {
    color,
    fontWeight: "bold",
  };

  // ✅ تاريخ اليوم بشكل بسيط
  const todayDate = () => {
    const d = new Date();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {/* Overall Score */}
      <div style={cardStyle}>
        <h3 style={{ color }}>Overall Score</h3>
        <p style={{ fontSize: "22px", fontWeight: "bold", color }}>
          {leaderboard.overallScore}
        </p>
      </div>

      {/* Recent Games */}
      <div style={cardStyle}>
        <h3 style={{ color }}>Recent Games</h3>

        {leaderboard.recent.length === 0 && (
          <p style={{ opacity: 0.7 }}>No games played yet.</p>
        )}

        {leaderboard.recent.map((r, idx) => (
          <div key={idx} style={itemStyle}>
            <p>
              <span style={labelStyle}>Player:</span> {r.name}
            </p>

            <p>
              <span style={labelStyle}>Date:</span> {todayDate()}
            </p>

            <p>
              <span style={labelStyle}>Time:</span>{" "}
              {r.start} → {r.end}
            </p>

            <p>
              <span style={labelStyle}>Score:</span>{" "}
              <b style={{ color }}>{r.score}</b>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}