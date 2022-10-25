import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./feature/cartSlice";

function App() {
  const {cartItems} = useSelector((store)=> store.cart)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(calculateTotal());
  },[cartItems]);

  return (
  <main>
    <NavBar/>
    <CartContainer/>
  </main>
  );
}
export default App;
