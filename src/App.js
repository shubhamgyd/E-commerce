import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/Wishlist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cart" element={<Cart />}>
        {" "}
      </Route>
      <Route path="/wishlist" element={<Wishlist />}>
        {" "}
      </Route>
    </Routes>
  );
}

export default App;
