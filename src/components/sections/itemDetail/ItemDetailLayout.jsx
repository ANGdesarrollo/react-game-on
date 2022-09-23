export default function ItemDetailLayout({array}) {
    return (
        array.details !== undefined &&
        <>
            <div className='detail-image'>
                <img src={array.backgroundPath} alt=""/>
            </div>
            <div className='detail-info'>
                <div className='detail-title'><h1>TECH SPECS</h1></div>
                <div className='detail-info-ul-container'>
                    <ul>
                        {array.details.map((el, i) => {
                            return (
                                <li className='detail-name' key={i}>{el.name}</li>
                            )
                        })}
                    </ul>
                    <ul>
                        {array.details.map((el, i) => {
                            return (
                                <li key={i}>{el.description.toUpperCase()}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className='detail-price'>
                <h2>PRICE: US <span>${array.price}</span></h2>
            </div>
        </>
    );
};
