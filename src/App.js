import React, { useEffect } from "react"
import { CartContainer, Modal, Navbar } from "./components";
import { useSelector,  useDispatch } from "react-redux"
import { calculateTotal } from "./features/cart/cartSlice"



function App() {
  const dispatch = useDispatch()
  const { cartItems } = useSelector(store => store.cart)
  const { isOpen } = useSelector( store => store.modal)

  useEffect(() => {
    dispatch(calculateTotal())


  }, [cartItems])






  return (
    <div >
      { isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
