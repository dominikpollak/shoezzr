import anime from "animejs/lib/anime.es.js";
import { useEffect, useRef } from "react";
import HeaderAnimation from "./components/HeaderAnimation";
import Navbar from "./components/Navbar";

function App() {
  // var tl = anime.timeline({});
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    anime({
      targets: ".bodydiv .card",
      scale: [0, 1],
      duration: 500,
      easing: "easeInOutQuad",
      delay: 3500,
    });
    anime({
      targets: ".navbar",
      scale: [0, 1],
      // overflow: "hidden",
      delay: 3600,
    });
  });

  return (
    <div className="h-[2000px] bg-gray-900 w-screen box-border overflow-x-hidden">
      <HeaderAnimation />
      <div className="navbar absolute top-0 w-full">
        <Navbar />
      </div>
      <div className="bodydiv h-screen w-full flex justify-around items-center bg-gray-900 border-t-[0.5rem] border-orange-600 box-border overflow-x-hidden">
        <div className="card bg-white w-[250px] h-[350px] rounded-lg"></div>
        <div className="card bg-white w-[250px] h-[350px] rounded-lg"></div>
        <div className="card bg-white w-[250px] h-[350px] rounded-lg"></div>
        <div className="card bg-white w-[250px] h-[350px] rounded-lg"></div>
      </div>
    </div>
  );
}

export default App;
