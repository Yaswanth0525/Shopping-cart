import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import ProductListPage from "./pages/productList";
import ProductDetailsPage from "./pages/productDetails"
import CartListPage from "./pages/cartList"
import Authonavigation from "./components/auth_navigation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useContext } from "react";
import { ShoppingCartContext } from "./context/indexs";


function App() {
  const {isLoggedIn} =useContext(ShoppingCartContext);
  
  return (
    <>
    {isLoggedIn ? <Navigation /> : <Authonavigation />}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductListPage/>}/>
        <Route path="/product-details/:id" element={<ProductDetailsPage/>}/>
        <Route path="/cart" element={<CartListPage/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
    </Routes>
    </>
  )
}

export default App
