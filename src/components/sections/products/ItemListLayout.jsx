import IconCart from "../../reUsable/IconCart";
import {Link} from "react-router-dom";

export default function ItemListLayout({item}) {
    return (
        <div className="container-products-dinamyc">
            {
                item.map((product, index) => {
                    return (
                        <div key={index} className="card-container">
                            <div className="card-container__image-product"><img src={product.imgPath} alt="Headset"/></div>
                            <div className="card-container__name-product">
                                <h2>{product.category.toUpperCase()}</h2>
                                <h4>{product.name}</h4>
                                <span id='line-span'></span>
                            </div>
                            <div className='card-container__detail-product'><Link to={`/products/${product.category.toLowerCase()}/${product.id}`}>detail</Link></div>
                            <div className="card-container__price-product">
                                <h2>${product.price}</h2>
                                <IconCart/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};
