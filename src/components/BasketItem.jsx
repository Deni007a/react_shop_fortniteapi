import React from 'react';

function BasketItem(props) {
  console.log(props)
  const {
    offerId,
    //displayName,
    price: {regularPrice},
    name,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <li className="collection-item">
      {name}{' '}
      <i
        className="material-icons basket-quantity"
        onClick={() => decQuantity(offerId)}
      >
        remove
      </i>{' '}
      x{quantity}{' '}
      <i
        className="material-icons basket-quantity"
        onClick={() => incQuantity(offerId)}
      >
        add
      </i>{' '}
      = {regularPrice * quantity} руб.
      <span className="secondary-content" onClick={() => removeFromBasket(offerId)}>
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );

}

export {BasketItem};