import { useState, useEffect } from "react";
import { MENU_API, TOKEN } from "./constant";
const useRestaurantMenu = (resId) =>{
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu = async () => {
        const response = await fetch(MENU_API+resId,{method : 'GET',headers:{'Authorization':`Bearer ${TOKEN}`,'Content-Type':'application/json'}});
        const result = await response.json();
        console.log(result);
        setResInfo(result);
    }

    return resInfo;

};

export default useRestaurantMenu;
