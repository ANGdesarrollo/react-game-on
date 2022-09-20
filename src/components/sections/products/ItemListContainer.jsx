import {useState, useEffect, useContext} from "react";
import ItemListLayout from "./ItemListLayout";
import CarouselOffers from "./CarouselOffers";
import {useParams} from "react-router-dom";
import ItemFilterLayout from "./ItemFilterLayout";
import Loading from "./Loading";
import {collection, getFirestore, getDocs} from "firebase/firestore";
import {context} from "../../context/CartContext";

export default function ItemListContainer() {
    const [product, setProduct] = useState([]);
    const [directBuy, setDirectBuy] = useState([])
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const {category} = useParams()
    const con = useContext(context)

    function filterProducts(res) {
        let clearArray = []
        res.docs.forEach((item)=> {
            const cleanObject = {...item.data(), id: item.id};
            clearArray.push(cleanObject)
        })

        let arrayToSend = []
        if(category === 'allProducts') {
            clearArray.map(el => {return(el.category.map(finalEl => arrayToSend.push(finalEl)))})
            return arrayToSend
        } else {
            let arrayToSend = clearArray.filter(el => el.name.toLowerCase() === category)
            arrayToSend = arrayToSend[0].category
            return arrayToSend
        }
    }

    useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        const collectionRef = collection(db, 'products');
        getDocs(collectionRef)
            .then(res => setProduct(filterProducts(res)))
            .catch(err => setError(err))
            .finally(()=> setLoading(false))
    }, [category]);


    return (
        <>
            <CarouselOffers/>
            <div className='products-container'>
                <ItemFilterLayout/>
                {loading ? <Loading/> : <ItemListLayout item={product} addToCartDirectly={con.addItem}/>}
            </div>
        </>

    );
};
