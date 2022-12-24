import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Login from "./component/Accounts/Login/Login";
import Register from "./component/Accounts/Register/Register";
import Cart from "./component/Cart/Cart";
import Header from "./component/Header/Header";
import Inventory from "./component/Inventory/Inventory";
import NotFound from "./component/NotFound/NotFound";
import Order from "./component/Order/Order";
// import Product from './component/Product/Product';
import ProductDetail from "./component/ProductDetail/ProductDetail";
import RequireAuth from "./component/RequireAuth/RequireAuth";
import Shipment from "./component/Shipment/Shipment";
import Shop from "./component/Shop/Shop";

export const CartContext = createContext();

function App() {
  const [addedCart, setAddedCart] = useState([]);

  return (
    <div>
      <CartContext.Provider value={[addedCart, setAddedCart]}>
        <Header></Header>
        <Routes>
          <Route
            path="/productDetail"
            element={<ProductDetail></ProductDetail>}
          >
            <Route
              path=":productId"
              element={<ProductDetail></ProductDetail>}
            ></Route>
          </Route>

          <Route path="/" element={<Shop></Shop>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/inventory" element={<Inventory></Inventory>}></Route>
          <Route
            path="/shipment"
            element={
              <RequireAuth>
                <Shipment></Shipment>
              </RequireAuth>
            }
          ></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/order" element={<Order></Order>}>
            <Route
              path="productDetail"
              element={<ProductDetail></ProductDetail>}
            >
              <Route
                path=":productId"
                element={<ProductDetail></ProductDetail>}
              ></Route>
            </Route>
          </Route>
          <Route
            path="/productDetails/:productId"
            element={<ProductDetail></ProductDetail>}
          ></Route>
          <Route path="/registration" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;
