import { useContext } from "react"
import Context from "../../context/ContextProvider"


const CartItem = () => {

    const { cart } = useContext(Context)
    

    /*const calcularCantidadTotal = () => {
        const cantidadTotal = cart.reduce((acc, ele) => acc + ele.cantidad, 0);
        return cantidadTotal;
      };*/
    const cartItem = cart.reduce((acc, ele) => acc + ele.cantidad, 0)
    return (
        <>
           {cartItem}
        </>
    )
}

export default CartItem;