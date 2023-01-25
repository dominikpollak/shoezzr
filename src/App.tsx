import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import LoadAnimations from './components/LoadAnimations';
import Home from './pages/Home';
import Jordan from './pages/Jordan';
import Adidas from './pages/Adidas';
import Sales from './pages/Sales';
import Nike from './pages/Nike';

function App() {
  return (
    <div className="bg-gray-900 ">
      <BrowserRouter>
        <LoadAnimations />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jordan" element={<Jordan />} />
          <Route path="/nike" element={<Nike />} />
          <Route path="/adidas" element={<Adidas />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
