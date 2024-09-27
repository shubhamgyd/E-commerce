import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/Wishlist";
import { Auth } from "./pages/Auth";
import { PrivateComponent } from "./privateRouter.js/PrivateComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route
        path="/cart"
        element={
          <PrivateComponent>
            <Cart />
          </PrivateComponent>
        }
      ></Route>
      <Route
        path="/wishlist"
        element={
          <PrivateComponent>
            <Wishlist />
          </PrivateComponent>
        }
      ></Route>
      <Route path="/auth/login" element={<Auth />}></Route>
    </Routes>
  );
}

export default App;
