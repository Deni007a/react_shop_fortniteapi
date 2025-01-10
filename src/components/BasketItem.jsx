import React from 'react';

function BasketItem(props) {
    console.log(props)
    const {
        offerId,
        displayName,
        price: {regularPrice},
        name,
        quantity,
        removeFromBasket = Function.prototype,
    } = props;
    console.log(displayName)
    return <li className="collection-item">
        {name} X {quantity} ={regularPrice * quantity} руб.
        <span  className="secondary-content basket-delete" onClick={()=>removeFromBasket(offerId)}>
            <i className="material-icons" >close</i>
        </span>
    </li>

}

export {BasketItem};