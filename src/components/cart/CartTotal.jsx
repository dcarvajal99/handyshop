import Context from "../../context/ContextProvider";
import { useContext } from "react";

const CartTotal = () => {

    const { total } = useContext(Context)
    /*const { cart } = useContext(Context);
    const total = cart.reduce((acc, ele) => acc + ele.monto, 0)*/



    return (
        <div>
            <h3>total apagar: {total}$</h3>
        </div>
    )
}

export default CartTotal;