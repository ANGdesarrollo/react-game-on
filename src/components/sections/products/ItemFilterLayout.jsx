export default function ItemFilterLayout({lowerPrice, higherPrice, item}) {
    return (
        <div className="container-category">
            <div>
                <h2>ORDER BY</h2>
                <div>
                    <div>
                        <input onClick={() => {lowerPrice(item)}} id="LowerPrice" type="checkbox"/>
                        <label htmlFor="LowerPrice">Lower Price</label>
                    </div>
                    <div>
                        <input id="HigherPrice" type="checkbox"/>
                        <label htmlFor="HigherPrice">Higher Price</label>
                    </div>
                </div>
            </div>
        </div>
    );
};
