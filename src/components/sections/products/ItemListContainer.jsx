import {useState, useEffect, useContext} from "react";
import ItemListLayout from "./ItemListLayout";
import CarouselOffers from "./CarouselOffers";
import {useParams} from "react-router-dom";
import ItemFilterLayout from "./ItemFilterLayout";
import Loading from "./Loading";
import {collection, getFirestore, getDocs} from "firebase/firestore";
import {context} from "../../context/CartContext";
import VideoBackground from "./VideoBackground";
import NotLoggedIn from "./NotLoggedIn";
import {CSSTransition} from "react-transition-group";


export default function ItemListContainer() {
    const [orderProductHigh, setOrderProductHigh] = useState(false)
    const [orderProductLow, setOrderProductLow] = useState(false)
    const [product, setProduct] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const {category} = useParams()
    const con = useContext(context)

    //ORDENA PRODUCTOS DE MENOR A MAYOR
    function orderProductsLowerPrice(item) {
        setOrderProductHigh(false)
        item.sort((a, b) => {
            if (a.price === b.price) {
                return 0;
            } else if (a.price < b.price) {
                return -1
            } else {
                return 1
            }
        })
        setProduct(item)
        setOrderProductLow(true)
    }

    //ORDENA PRODUCTOS DE MAYOR A MENOR
    function orderProductsHigherPrice(item) {
        setOrderProductLow(false)
        item.sort((a, b) => {
            if (a.price === b.price) {
                return 0;
            } else if (a.price < b.price) {
                return 1
            } else {
                return -1
            }
        })
        setProduct(item)
        setOrderProductHigh(true)
    }

    //FILTRA PRODUCTOS PARA RENDERIZAR, EL RETURN ES ENVIADO AL RES DE LA PROMESA
    function filterProducts(res) {
        let clearArray = []
        res.docs.forEach((item) => {
            const cleanObject = {...item.data(), id: item.id};
            clearArray.push(cleanObject)
        })

        let arrayToSend = []
        if (category === 'allProducts') {
            clearArray.map(el => {
                return (el.category.map(finalEl => arrayToSend.push(finalEl)))
            })
            return arrayToSend
        } else {
            let arrayToSend = clearArray.filter(el => el.name.toLowerCase() === category)
            arrayToSend = arrayToSend[0].category
            return arrayToSend
        }
    }

    //PROMESA QUE RECIBE EL ARRAY DE LA BASE DE DATOS
    useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        const collectionRef = collection(db, 'products');
        getDocs(collectionRef)
            .then(res => setProduct(filterProducts(res)))
            .catch(err => {
                setError(err);
                console.log(error)
            })
            .finally(() => setLoading(false))
    }, [category]);

    //FUNCION PARA QUE SI NO ESTAS LOGUEADO TE APAREZCA UN COMPONENTE QUE EXIJA LOGUEARTE.
    function logged() {
        if (con.userLogged) {
            return loading ? <Loading/> :
                <CSSTransition in={true} appear={true} timeout={300} classNames="fade"><ItemListLayout item={product}
                                                                                                       addToCartDirectly={con.addItem}/></CSSTransition>
        } else {
            return <NotLoggedIn/>

        }
    }

    // FUNCION RENDER PARA NO REPETIR EL CODIGO VARIAS VECES
    function render() {
        return (
            <>
                <CSSTransition in={true} appear={true} timeout={300} classNames="fade"><CarouselOffers/></CSSTransition>
                    <div className='products-container'>
                        <VideoBackground/>
                        <ItemFilterLayout lowerPrice={orderProductsLowerPrice} higherPrice={orderProductsHigherPrice}
                                          item={product} checkedHigher={orderProductHigh}
                                          checkedLower={orderProductLow}/>
                        {logged()}
                    </div>
            </>
        )
    }

    if (orderProductHigh || orderProductLow) {
        return (
            render()
        )

    } else {
        return (
            render()
        )
    }

};
