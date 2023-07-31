import React, { useContext } from "react";
import Context from "../../context/ContextProvider";

const CartTotal = () => {
    const { total } = useContext(Context);

    return (
        <div>
            <h3>Total a pagar: {total}$</h3>
        </div>
    );
};

export default CartTotal;