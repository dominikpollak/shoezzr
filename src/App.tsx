import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import LoadAnimations from './components/animations/LoadAnimations';
import Home from './pages/Home';
import Jordan from './pages/Jordan';
import Adidas from './pages/Adidas';
import Sales from './pages/Sales';
import Nike from './pages/Nike';
import NoMatch from './components/NoMatch';
import ProductDetails from './pages/ProductDetails';

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
