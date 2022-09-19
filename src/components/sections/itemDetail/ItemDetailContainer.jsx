import {useContext, useEffect, useState} from "react";
import {context} from "../../context/CartContext";
import {useParams} from "react-router-dom";
import ItemDetailLayout from "./ItemDetailLayout";
import ItemCount from "./ItemCount";
import CheckOut from "./CheckOut";
import {collection, getFirestore, getDocs} from "firebase/firestore";


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
        let clearArray = []
        res.docs.forEach((item)=> {
            const cleanObject = {...item.data(), id: item.id};
            clearArray.push(cleanObject)
        })
        let filterArray =  clearArray.filter(el => el.name.toLowerCase() === category)
        filterArray = filterArray[0].category.filter(el => el.id == id)
        filterArray = filterArray[0]
        return filterArray
    }

    useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        const collectionRef = collection(db, 'products');
        getDocs(collectionRef)
            .then(res => setDetail(getProduct(res)))
            .catch(err => setError(err))
            .finally(()=> setLoading(false))
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
