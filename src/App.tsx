import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import LoadAnimations from './components/animations/LoadAnimations';
import NoMatch from './components/NoMatch';
import Adidas from './pages/Adidas';
import Home from './pages/Home';
import Jordan from './pages/Jordan';
import Nike from './pages/Nike';
import ProductDetails from './pages/ProductDetails';
import Sales from './pages/Sales';

function App() {
  return (
    <BrowserRouter>
      <LoadAnimations />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jordan" element={<Jordan />} />
        <Route path="/nike" element={<Nike />} />
        <Route path="/adidas" element={<Adidas />} />
        <Route path="/sales" element={<Sales />} />
        {/* <Route path="/hoodies" element={<Hoodies />} /> */}
        <Route path="/:brand/:slug" element={<ProductDetails />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
