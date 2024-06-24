import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return(
    <div className="w-screen h-screen  " >
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product/:productId" element={<ProductDetails/>} />
      </Routes>
    </div>
  );
};

export default App;
