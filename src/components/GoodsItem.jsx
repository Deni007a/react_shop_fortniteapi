import React from 'react';
import {Preloader} from "./Preloader";

function GoodsIntem(props) {
    const {
        offerId,
        displayName,
        displayDescription,
        price: {regularPrice},
        displayAssets,
        section,
        addToBasket = Function.prototype,
    } = props;


    return <div className="card" id={offerId}>
        <div className="card-image">
            <img
                src={displayAssets[0]?.url}
                loading="lazy"
                alt={displayName}/>
        </div>
        <div className="card-content">
            <span className="card-title">{displayName || section?.name}</span>
            <p>{displayDescription || section?.category}</p>
        </div>
        <div className="card-action">
            <button className="btn" onClick={() => addToBasket({
                offerId,
                name:displayName || section?.name,
                price: {regularPrice}
            })}>Купить
            </button>
            <span className="right" style={{fontSize: '1.8rem'}}>
          {regularPrice} руб.
        </span>
        </div>
    </div>
}

export {GoodsIntem};