import RestaurantCard from "./RestaurantCard";
import resList from "../utils/data";
import { useState } from "react";
const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(resList)
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredRes = listOfRestaurant.filter((res) => res.info.avgRating >= 4.5);
                    setListOfRestaurant(filteredRes);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurant.map((restaurant) => (
                    <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
                ))}                
            </div>
        </div>
    )
}

export default Body;