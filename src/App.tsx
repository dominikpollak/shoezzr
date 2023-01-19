import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderAnimation from '../src/components/HeaderAnimation';
import Navbar from '../src/components/Navbar';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    anime({
      targets: '.navbar',
      scale: [0, 1],
      delay: 3600,
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <HeaderAnimation />
        <div className="navbar absolute top-0 w-full">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
