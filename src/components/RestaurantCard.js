import { CDN_URL } from "../utils/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faMapMarkerAlt,
  faStopwatch,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, price, rating, categories, image_url } =
    resData;
    const location = resData.location.city;
//   const { slaString } = resData?.info?.sla;
const cuisines = categories.map(cate => cate.title).join(", ");
  return (
      <div className="res-card">
        <div className="img-container"><img
          className="res-logo"
          alt="res-logo"
          src={image_url}
        /></div>
        <div className="title">
          <h3>{name}</h3>
          <h4 className="rating-time">
            <FontAwesomeIcon icon={faStar} /> {rating}
          </h4>
        </div>
        <div className="cuisines">
          <h4>{cuisines}</h4>
          {/* <h4>{price}</h4> */}
        </div>
        <div className="location">
          <h4>
            {location} <FontAwesomeIcon icon={faMapMarkerAlt} />
          </h4>
          {/* <h4>
            {slaString} <FontAwesomeIcon icon={faStopwatch} />{" "}
          </h4> */}
        </div>
      </div>
  );
};

export default RestaurantCard;
