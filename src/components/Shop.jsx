import {useEffect, useState} from "react";
import {API_URL, API_KEY} from "../config";
import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";
import {Cart} from "./Cart";
import {BasketList} from "./BasketList";
import {Alert} from "./Alert";


function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');


  const addToBasket = (item) => {

    const itemIndex = order.findIndex(orderItem => orderItem.offerId === item.offerId);

    if (itemIndex < 0) {
      const newItem = {...item, quantity: 1};
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else {
          return orderItem;
        }
      });
      // console.log(newOrder)
      setOrder(newOrder);
    }
    console.log("alert ++")
    console.log(item)
    setAlertName(item.name)
  }

  const removeFromBasket = (offerId) => {
    const newOrder = order.filter(item => item.offerId !== offerId);
    setOrder(newOrder);
  }

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  }


  const incQuantity = (offerId) => {

    const index = order.findIndex(obj => obj.offerId === offerId);
    order[index].quantity += 1;
    setOrder(order => [...order]);
  };

  const decQuantity = (offerId) => {
    const newOrder = order.map(el => {
      if (el.offerId === offerId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  }

  const closeAlert = () => {
    setAlertName('');
  }


  useEffect(function getGoods() {
    fetch(
      API_URL, {headers: {'Authorization': API_KEY}})
      .then(response => response.json())
      .then(data => {
        data.shop && setGoods(data.shop);
        setLoading(false)
      })
  }, []);

// всплывающее уведомление
//{alertName && <Alert name={alertName} closeAlert={closeAlert}/>}
  return (
    <main className='container content'>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
      {loading ? <Preloader/> : <GoodsList goods={goods} addToBasket={addToBasket}/>}
      {
        isBasketShow && <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      }

      {alertName && <Alert name={alertName} closeAlert={closeAlert}/>}

    </main>
  )

}


export {Shop}