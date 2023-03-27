import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadAnimations from './components/animations/LoadAnimations';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import NoMatch from './components/NoMatch';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Sales from './pages/Sales';
import Search from './pages/Search';
import ProductList from './pages/ProductList';

function App() {
  return (
    <BrowserRouter>
      <LoadAnimations />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nike" element={<ProductList brandName='Nike' />} />
        <Route path="/adidas" element={<ProductList brandName='adidas' />} />
        <Route path="/jordan" element={<ProductList brandName='Jordan' />} />
        <Route path="/sales" element={<Sales />} />
        {/* <Route path="/hoodies" element={<Hoodies />} /> */}
        <Route path="/:brand/:slug" element={<ProductDetails />} />
        <Route path="/search/:searchParams" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
