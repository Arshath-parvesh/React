import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const Header = () => {
    const [auth,setAuth] = useState("Login")
    
    return (
        <div className="header">
            <div className="logo-container">
                <h3>AP RESTAURANT</h3>
            </div>
            <div className="nav-item">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                    <button className="auth" onClick={()=>{setAuth((auth == "Login") ? "Logout" : "Login")}}>{auth}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;