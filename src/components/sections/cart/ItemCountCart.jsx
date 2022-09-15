import {useEffect, useState} from "react";

export default function ItemCountCart({initial, stock, onAdd, el, update}) {
    const [count, setCount] = useState(initial)

    useEffect(() => {
        setCount(initial)
    }, []);



    function addProduct() {
        setCount(count < stock ? count + 1 : count)

    }

    function subtractProduct() {
        setCount(count > 1 ? count - 1 : count)

    }

    return (
        <>
            <button onClick={() => {subtractProduct(); onAdd(count);}}>-</button>
            <div>{count}</div>
            <button onClick={() => {addProduct(); onAdd(count);}}>+</button>
        </>

    );
};
