import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderAnimation from '../src/components/HeaderAnimation';
import Navbar from '../src/components/Navbar';
import Home from './pages/Home';
import Kids from './pages/Kids';
import Men from './pages/Men';
import Sales from './pages/Sales';
import Women from './pages/Women';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderAnimation />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
