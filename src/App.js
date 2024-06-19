import logo from './logo.svg';
import './App.css';
import Shop from './pages/shop/Shop';
import { Navbar } from './component/navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import menbanner from './assests/Catebanner/mensbanner.jpg'
import trend from './assests/Catebanner/trendingimage.jpg'
import womenbanner from './assests/Catebanner/womenbanner.jpg'
import fashion from './assests/Catebanner/fashion.jpg'
import Shopcategories from './pages/categories/Shopcategories';
import Product  from './pages/products/Product'
import Login from './pages/login/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/men' element={<Shopcategories category="men" image={menbanner}/>}/>
      <Route path='/women' element={<Shopcategories category="women" image={womenbanner}/>}/>
      <Route path='/trend' element={<Shopcategories category="trend" image={trend}/>}/>
      <Route path='/fashion' element={<Shopcategories category="fashion" image={fashion}/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/product/:productid' element={<Product/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
