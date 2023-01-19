import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Products from './pages/Products';
import Sidebar from './components/Sidebar';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='products/:id' element={<SingleProduct />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
