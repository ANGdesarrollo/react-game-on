import {useContext, useEffect, useState} from "react";
import {context} from "../cart/CartContext";
import GetItem from "../products/GetItem";
import arrayProducts from "../../utils/products.json";
import {useParams} from "react-router-dom";
import ItemDetailLayout from "./ItemDetailLayout";
import ItemCount from "./ItemCount";
import CheckOut from "./CheckOut";


export default function ItemDetailContainer() {
    const [detail, setDetail] = useState({})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(0);
    const {category} = useParams()
    const {id} = useParams()

    const contextImported = useContext(context)

    function onAdd(qty) {
        setCount(qty)
        contextImported.addItem(detail, qty)
    }


    function getProduct(res) {
        let filterArray = res.filter(el => el.name.toLowerCase() === category)
        filterArray = filterArray[0].category.filter(el => el.id == id)
        filterArray = filterArray[0]
        return filterArray
    }

    useEffect(() => {
        setLoading(true)
        GetItem(arrayProducts)
            .then(res => setDetail(() => getProduct(res)))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [category, id]);

    return (
        <>
            <div className='container-detail'>
                {loading ? <p>Loading</p> : <ItemDetailLayout array={detail}/>}
                {
                    count === 0 ?  <ItemCount stock={detail.stock} initial={1} onAdd={onAdd}/> : <CheckOut/>
                }

            </div>
        </>
    );
};
