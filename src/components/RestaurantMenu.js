import { useEffect, useState } from "react";
import { TOKEN } from "../utils/constant";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";


function RestaurantMenu() {
    const [resInfo,setResInfo] = useState(null);
    const {resId} = useParams();
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu = async () => {
        const response = await fetch(MENU_API+resId,{method : 'GET',headers:{'Authorization':`Bearer ${TOKEN}`,'Content-Type':'application/json'}});
        const result = await response.json();
        console.log(result);
        setResInfo(result);
    }

    const {name,rating,isClosed,price,phone,location,categories} = resInfo || {};
    const address = location?.display_address.join(", ");
    const cuisines = categories?.map(cate => cate.title).join(", ");
  return resInfo == null ? <Loading /> : (
    <div>
        <h1>{name}</h1>
        <h1>{rating}</h1>
        <h2>{cuisines}</h2>
        <h3>{address}</h3>
        <h4>{isClosed} {price} {phone}</h4>
    </div>
  )
}

export default RestaurantMenu;