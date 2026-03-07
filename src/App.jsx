import { useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Play from "./Play";
import Leaderboard from "./Leaderboard";

// 🌟 مصفوفة خلفيات جاهزة
const backgrounds = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
];

// 🌟 دالة اختيار خلفية عشوائية
const getRandomBg = () => {
  const index = Math.floor(Math.random() * backgrounds.length);
  return backgrounds[index];
};

export default function App() {
  const [page, setPage] = useState("home");
  const [dark, setDark] = useState(false);
  const [color, setColor] = useState("#4f46e5");
  const [settings, setSettings] = useState({
    name: "",
    difficulty: "easy",
    rounds: 3,
  });
  const [leaderboard, setLeaderboard] = useState({
    overallScore: 0,
    recent: [],
  });

  // 🌟 الخلفية العشوائية
  const [bg, setBg] = useState(getRandomBg());

  // 🌟 دالة تغيير الخلفية
  const changeBackground = () => {
    setBg(getRandomBg());
  };

  const appStyle = {
    minHeight: "100vh",
    width: "100%",
    color: dark ? "#f8fafc" : "#111",
    backgroundColor: dark ? "rgba(0,0,0,0.3)" : "transparent",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: dark ? "overlay" : "unset",
    transition: "all 0.5s",
  };

  return (
    <div key={bg} style={appStyle}>
      <Header
        setPage={setPage}
        dark={dark}
        setDark={setDark}
        color={color}
        setColor={setColor}
      />

      {page === "home" && (
        <Home
          settings={settings}
          setSettings={setSettings}
          color={color}
          changeBackground={changeBackground}
        />
      )}

      {page === "play" && (
        <Play
          settings={settings}
          setPage={setPage}
          leaderboard={leaderboard}
          setLeaderboard={setLeaderboard}
          color={color}
        />
      )}

      {page === "leaderboard" && (
        <Leaderboard leaderboard={leaderboard} color={color} />
      )}
    </div>
  );
}