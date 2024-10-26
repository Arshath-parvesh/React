import { LOGO_URL } from "../utils/constant";
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <h3>AP RESTAURANT</h3>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;