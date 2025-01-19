import ItemList from "./Itemlist";
import { FOOD_JSON } from "../utils/constant";
import { useState } from "react";

const RestaurantCategories = ({category,showItem,setShowIindex}) => {
    const [hideItem, setHideItem] = useState(true)
    const handleClick =() => {
        setShowIindex();
        setHideItem(!hideItem);
    }
    return (
        <div>
            <div className="res-categories">
                <div className="d-flex justify-content-between" style={{cursor:"pointer"}} onClick={handleClick}>
                    <span>{category.title}({FOOD_JSON.categories[category.title]?.length || 0})</span>
                    <span>🔻</span>
                </div>
                {showItem && hideItem && <ItemList key ={FOOD_JSON.categories[category.title]?.[name] || Math.random()} item={FOOD_JSON.categories[category.title]}/>}
            </div>
        </div>
    );
}

export default RestaurantCategories;