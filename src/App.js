import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import OurStore from './pages/OurStore/OurStore';
import Blogs from './pages/Blogs/Blogs';
import './App.css';
import CompareProducts from './pages/CompareProducts/CompareProducts';
import Wishlist from './pages/Wishlist/Wishlist';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="store" element={<OurStore />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="compare-products" element={<CompareProducts />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
