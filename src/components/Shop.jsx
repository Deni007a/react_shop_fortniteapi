import {useEffect, useState} from "react";
import {API_URL, API_KEY} from "../config";
import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";


function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(function getGoods() {
        fetch(
            //API_URL, {headers: {'Authorization': API_KEY}})
            "https://fortniteapi.io/v2/shop?lang=ru", {headers: {'Authorization': API_KEY}})
            .then(response => response.json())
            .then(data => {
                data.shop && setGoods(data.shop);
                setLoading(false)
            })
    }, []);


    return <main className='container content'>
        {
            //loading ? <Preloader/> : goods[0].displayName
            loading ? <Preloader/> : <GoodsList goods={goods}/>
        }
    </main>

}
export {Shop}