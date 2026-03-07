import { useState, useEffect } from "react";
import GameMemory from "./GameMemory";
import GameColor from "./GameColor";

export default function Play({ settings, setPage, leaderboard, setLeaderboard, color }) {
  const [startTime] = useState(new Date());
  const [memoryScore, setMemoryScore] = useState(0);
  const [colorScore, setColorScore] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(1 * 60); // 3 دقائق

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          finishGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const finishGame = () => {
    const endTime = new Date();
    const totalScore = memoryScore + colorScore;

    setLeaderboard({
      overallScore: leaderboard.overallScore + totalScore,
      recent: [
        ...leaderboard.recent,
        {
          name: settings.name || "Player",
          start: startTime.toLocaleString(),
          end: endTime.toLocaleString(),
          score: totalScore,
        },
      ],
    });

    setPage("leaderboard");
  };

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  };

  const timerStyle = {
    border: `2px solid ${color}`,
    borderRadius: "15px",
    padding: "20px",
    textAlign: "center",
    minWidth: "220px",
    color: color,
    fontSize: "1.5rem",
  };

  const titleStyle = {
    color: color,
    fontSize: "2rem",
    margin: "0",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>playing as {settings.name || "Player"}</h1>
      <div style={timerStyle}>
        ⏱ {minutes}:{seconds < 10 ? "0" : ""}{seconds}
      </div>

      <GameMemory difficulty={settings.difficulty} setScore={setMemoryScore} color={color} />
      <GameColor setScore={setColorScore} color={color} />

      <div>
        <button
          style={{ border: `2px solid ${color}`, padding: "6px 12px", borderRadius: "8px", margin: "5px", color: color, background: "transparent" }}
          onClick={finishGame}
        >
          Finish
        </button>
      </div>
    </div>
  );
}