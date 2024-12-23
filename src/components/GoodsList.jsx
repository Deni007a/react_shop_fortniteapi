import React from 'react';
import {GoodsIntem} from "./GoodsIntem";

function GoodsList(props) {
    const {goods = []} = props;
    if (!goods.length) {
        return <h3>Товары не найденны</h3>
    }


    return <div className="goods">
        {goods.map(item => (
            <GoodsIntem key={item.offerId} {...item}/>
        ))}
    </div>

}

export {GoodsList};