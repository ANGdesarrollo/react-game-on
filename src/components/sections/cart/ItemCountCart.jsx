import {useEffect, useState} from "react";

export default function ItemCountCart({initial, stock , updateQty, el , onAdd}) {
    const [count, setCount] = useState(initial)
    useEffect(() => {
        setCount(initial)
    }, []);

    useEffect(() => {
        onAdd(count)
        updateQty(el, count)
    }, [count]);

    function addProduct() {
        setCount(count < stock ? count + 1 : count)
    }

    function subtractProduct() {
        setCount(count > 1 ? count - 1 : count)
    }

    return (
        <>
            <button onClick={() => {subtractProduct()}}>-</button>
            <div>{count}</div>
            <button onClick={() => {addProduct()}}>+</button>
        </>

    );
};
