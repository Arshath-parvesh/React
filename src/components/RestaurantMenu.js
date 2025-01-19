import Loading from "./Loading";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCard from "./RestaurantCard";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

function RestaurantMenu() {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const { name, rating, isClosed, price, phone, location, categories } = resInfo || {};
  const address = location?.display_address.join(", ");
  const cuisines = categories?.map((cate) => cate.title).join(", ");
  const [showIndex, setShowIindex] = useState(0);
  return resInfo == null ? (
    <Loading />
  ) : (
    <div className="restaurant-menu">
      <h1 className="res-name">{name}</h1>
      {/* <h1 className="rex-rating">{rating}</h1> */}
      <h2 className="res-cuisines">{cuisines} - {price}</h2>
      {/* <h3 className="res-address">{address}</h3> */}
      {/* <h4 className="res-con">  {phone} </h4> */}
      <p className="caterories">
        {categories.map((category,index) => (<RestaurantCategories key = {resInfo.id+Math.random()} category={category} showItem={index == showIndex} setShowIindex={() =>setShowIindex(index)}/>))}
      </p>
    </div>
  );
}

export default RestaurantMenu;
