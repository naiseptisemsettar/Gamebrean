import { useState, useEffect } from "react";

const allIcons = ["🍎", "🍌", "🍇", "🍉", "🍒", "🥝", "🍍", "🥭"];

export default function GameMemory({ difficulty, color }) {
  const [sequence, setSequence] = useState([]);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [showing, setShowing] = useState(false);

  const count = difficulty === "easy" ? 4 : difficulty === "medium" ? 6 : 8;

  useEffect(() => {
    generateSequence();
  }, [difficulty]);

  const generateSequence = () => {
    const seq = Array.from({ length: count }, () =>
      allIcons[Math.floor(Math.random() * allIcons.length)]
    );
    setSequence(seq);
    setStep(0);
    setCorrect(0);
    setWrong(0);
    setShowing(true);

    let flashes = 0;
    const interval = setInterval(() => {
      // 🔀 وميض عشوائي
      setHighlightIndex(Math.floor(Math.random() * seq.length));
      flashes++;
      if (flashes >= count * 2) { // مدة الوميض
        clearInterval(interval);
        setHighlightIndex(-1);
        setShowing(false);
      }
    }, 400); // سرعة الوميض
  };

  const handleClick = (icon) => {
    if (showing) return; // منع الضغط أثناء العرض

    if (icon === sequence[step]) {
      setCorrect((c) => c + 1);
      setStep((s) => s + 1);
    } else {
      setWrong((w) => w + 1);
    }
  };

  const cardStyle = {
    border: `2px solid ${color}`,
    borderRadius: "12px",
    padding: "15px",
    textAlign: "center",
    color,
  };

  const iconStyle = (active) => ({
    fontSize: "30px",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: `2px solid ${color}`,
    borderRadius: "10px",
    cursor: showing ? "default" : "pointer",
    background: active ? color : "transparent",
    color: active ? "#fff" : "inherit",
    transform: active ? "scale(1.3)" : "scale(1)",
    transition: "all 0.2s",
  });

  return (
    <div style={cardStyle}>
      <h3>Memory Game</h3>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        {sequence.map((icon, i) => (
          <div
            key={i}
            style={iconStyle(highlightIndex === i)}
            onClick={() => handleClick(icon)}
          >
            {icon}
          </div>
        ))}
      </div>

      <p>✅ Correct: {correct}</p>
      <p>❌ Wrong: {wrong}</p>

      <button
        onClick={generateSequence}
        style={{
          border: `2px solid ${color}`,
          background: "transparent",
          color,
          padding: "6px 12px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </div>
  );
}