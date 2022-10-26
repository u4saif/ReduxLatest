import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./feature/cartSlice";
import Model from "./components/Model";
import modelSlice from "./feature/modelSlice";

function App() {
  const {cartItems} = useSelector((store)=> store.cart);
  const {isOpen} = useSelector((store)=> store.model);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(calculateTotal());
  },[cartItems]);

  return (
  <main>
    <NavBar/>
    <CartContainer/>
    {isOpen &&  <Model/>}
  </main>
  );
}
export default App;
 