import {useState} from "react";

export default function ItemFilterLayout({lowerPrice, higherPrice, item, checkedLower, checkedHigher}) {
    return (
        <div className="container-category">
            <div>
                <h2>ORDER BY</h2>
                <div>
                    <div>
                        <input onChange={() => {lowerPrice(item)}} id="LowerPrice" type="checkbox" checked={checkedLower}/>
                        <label htmlFor="LowerPrice">Lower Price</label>
                    </div>
                    <div>
                        <input onChange={() => {higherPrice(item)}} id="HigherPrice" type="checkbox" checked={checkedHigher}/>
                        <label htmlFor="HigherPrice">Higher Price</label>
                    </div>
                </div>
            </div>
        </div>
    );
};
