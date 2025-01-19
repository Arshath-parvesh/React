import { useContext, useState } from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    const [auth,setAuth] = useState("Login");
    const data = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items)
    
    return (
        <div className="header">
            <div className="logo-container">
                <h3>AP RESTAURANT</h3>
            </div>
            <div className="nav-item ">
                <ul>
                    <li className={useOnlineStatus() ? "online" : 'offline'}><FontAwesomeIcon icon={faCircle} /></li>
                    <li className="text-decoration-none"><Link to="/">Home</Link></li>
                    <li className="text-decoration-none"><Link to="/about">About us</Link></li>
                    <li className="text-decoration-none"><Link to="/contact">Contact us</Link></li>
                    <li className="text-decoration-none"><Link to="/Cart">Cart ({cartItems.length})</Link></li>
                    <button className="auth" onClick={()=>{setAuth((auth == "Login") ? "Logout" : "Login")}}>{auth}</button>
                    <li className="text-decoration-none">{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;