import {useState, useEffect} from "react";
import ItemListLayout from "./ItemListLayout";
import CarouselOffers from "./CarouselOffers";
import GetItem from "./GetItem";
import arrayProducts from '../../utils/products.json';
import {useParams} from "react-router-dom";
import ItemFilterLayout from "./ItemFilterLayout";
import Loading from "./Loading";

export default function ItemListContainer() {
    const [product, setProduct] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const {category} = useParams()

    function filterProducts(res) {
        let arrayToSend = []
        if(category === 'allProducts') {
            res.map(el => {return(el.category.map(finalEl => arrayToSend.push(finalEl)))})
            return arrayToSend
        } else {
            let arrayToSend = res.filter(el => el.name.toLowerCase() === category)
            arrayToSend = arrayToSend[0].category
            return arrayToSend
        }
    }
    useEffect(() => {
        setLoading(true)
        GetItem(arrayProducts)
            .then(res => setProduct(()=>filterProducts(res)))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [category]);

    return (
        <>
            <CarouselOffers/>
            <div className='products-container'>
                <ItemFilterLayout/>
                {loading ? <Loading/> : <ItemListLayout item={product}/>}
            </div>
        </>

    );
};
