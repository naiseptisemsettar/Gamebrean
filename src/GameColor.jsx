import { useState, useEffect } from "react";

const colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple"];

const getTextColor = (bg) =>
  bg === "Yellow" || bg === "Orange" ? "black" : "white";

export default function GameColor({ setScore, color }) {
  const [target, setTarget] = useState("");
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  useEffect(() => {
    setTarget(colors[Math.floor(Math.random() * colors.length)]);
  }, []);

  const handleClick = (c) => {
    if (c === target) {
      setCorrect(correct + 1);
      setScore(correct + 1);
      setTarget(colors[Math.floor(Math.random() * colors.length)]);
    } else {
      setWrong(wrong + 1);
    }
  };

  const reset = () => {
    setCorrect(0);
    setWrong(0);
    setScore(0);
    setTarget(colors[Math.floor(Math.random() * colors.length)]);
  };

  const cardStyle = {
    border: `2px solid ${color}`,
    borderRadius: "15px",
    padding: "20px",
    margin: "15px",
    textAlign: "center",
    minWidth: "220px",
  };

  return (
    <div style={cardStyle}>
      <h3>Color Match</h3>

      {/* Target Color */}
      <p>
        Target Color:{" "}
        <span
          style={{
            backgroundColor: target,
            color: getTextColor(target),
            padding: "4px 10px",
            borderRadius: "6px",
            fontWeight: "bold",
          }}
        >
          {target}
        </span>
      </p>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {colors.map((c, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(c)}
            style={{
              backgroundColor: c,
              color: getTextColor(c),
              border: "none",
              padding: "8px 14px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <p>✔ {correct} | ✖ {wrong}</p>

      <button
        onClick={reset}
        style={{
          border: `2px solid ${color}`,
          padding: "6px 12px",
          borderRadius: "8px",
          cursor: "pointer",
          background: "transparent",
        }}
      >
        Reset
      </button>
    </div>
  );
}