import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from './pages/Home';
import Kids from './pages/Kids';
import Men from './pages/Men';
import Sales from './pages/Sales';
import Women from './pages/Women';
import LoadAnimations from './components/LoadAnimations';

function App() {
  return (
    <div className="bg-gray-900 ">
      <BrowserRouter>
        <LoadAnimations />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
