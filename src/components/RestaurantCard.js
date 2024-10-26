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
  const { name, areaName, costForTwo, avgRating, cuisines, cloudinaryImageId } =
    resData.info;
  const { slaString } = resData.info.sla;
  return (
      <div className="res-card">
        <div className="logo-container"><img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        /></div>
        <div className="title">
          <h3>{name}</h3>
          <h4 className="rating-time">
            <FontAwesomeIcon icon={faStar} /> {avgRating}
          </h4>
        </div>
        <div className="cuisines">
          <h4>{cuisines.join(", ")}</h4>
          <h4>{costForTwo}</h4>
        </div>
        <div className="location">
          <h4>
            {areaName} <FontAwesomeIcon icon={faMapMarkerAlt} />
          </h4>
          <h4>
            {slaString} <FontAwesomeIcon icon={faStopwatch} />{" "}
          </h4>
        </div>
      </div>
  );
};

export default RestaurantCard;
