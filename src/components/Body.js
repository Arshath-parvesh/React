import RestaurantCard ,{recommentedRes}from "./RestaurantCard";
import { useEffect, useState } from "react";
import { TOKEN, YELP_API } from "../utils/constant";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [filteredRestaurant , setFilteredRestaurant] = useState([]);

    const RecommentedRestaurant = recommentedRes(RestaurantCard);

    useEffect(()=>{fetchData()},[]);
    const fetchData = async () => {
        const response = await fetch(YELP_API,{method : 'GET',headers:{'Authorization':`Bearer ${TOKEN}`,'Content-Type':'application/json'}});
        const result = await response.json();
        setListOfRestaurant(result.businesses);
        setFilteredRestaurant(result.businesses);
    }

    if(!useOnlineStatus()) return <h1>Looks like you are offline kindly check</h1>
    return listOfRestaurant == 0 ? (<Loading />) : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredRes = listOfRestaurant.filter((res) => res.rating >= 4.5);
                    setFilteredRestaurant(filteredRes);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="search-container">
                <input className="search" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
                <button className="search-button"onClick={()=>{
                    let searchList = listOfRestaurant.filter((filterRes)=>
                        filterRes.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    setFilteredRestaurant(searchList);
                }}>search</button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <Link key = {restaurant.id} to={"/restaurant/"+restaurant.alias}>
                        {restaurant.rating >= 4.4 ? (<RecommentedRestaurant resData = {restaurant}/>) : (<RestaurantCard resData = {restaurant}/>) }
                    </Link>
                ))}                
            </div>
        </div>
    )
}

export default Body;