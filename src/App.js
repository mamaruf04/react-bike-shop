import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './component/Cart/Cart';
import Header from './component/Header/Header';
import NotFound from './component/NotFound/NotFound';
import Order from './component/Order/Order';
// import Product from './component/Product/Product';
import ProductDetail from './component/ProductDetail/ProductDetail';
import Shop from './component/Shop/Shop';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/productDetail" element={<ProductDetail></ProductDetail>}>
          <Route path=':productId' element={<ProductDetail></ProductDetail>}></Route>
        </Route>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
