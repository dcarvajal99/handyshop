import React, { useContext } from "react";
import Context from "../../context/ContextProvider";

const CartTotal = () => {
    const { total, formatPrice } = useContext(Context);

    return (
        <div>
            <h3>Total a pagar: {formatPrice(total)}</h3>
        </div>
    );
};

export default CartTotal;