import React from 'react';
import {GoodsItem} from "./GoodsItem";

function GoodsList(props) {
    const {goods = [], addToBasket = Function.prototype} = props;
    if (!goods.length) {
        return <h3>Товары не найдены</h3>
    }


    return <div className="goods">
        {goods.map(item => (
            <GoodsItem key={item.offerId} {...item} addToBasket={addToBasket}/>
        ))}
    </div>

}

export {GoodsList};