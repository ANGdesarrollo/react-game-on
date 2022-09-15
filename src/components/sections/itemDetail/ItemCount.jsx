import {useState, useEffect} from "react";

export default function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial)
    const [ addClass, setClass ] = useState(false);

    useEffect(() => {
        setCount(initial)
    }, []);

    function disabled() {
        if(count === 0 || count === stock) {return true} else { return false}
    }

    let classButton = addClass ? 'disable-activate' : null
    useEffect(() => {
        if(disabled() === true) {
            setClass(true)
        } else { setClass(false)}
    }, [disabled()]);

    function addProduct() {
        setCount(count < stock ? count + 1 : count)
    }
    function subtractProduct() {
        setCount(count > 0 ? count - 1 : count)
    }
    return (
        <div className='detail-item-count'>
            <button onClick={()=> onAdd(count)} className={`css-button-shadow-border-sliding--rose ${classButton}`} disabled={disabled()}>BUY</button>
            <button id='button-detail' onClick={subtractProduct}>-</button>
            <div>{count}</div>
            <button id='button-detail' onClick={addProduct}>+</button>
        </div>
    );
};
