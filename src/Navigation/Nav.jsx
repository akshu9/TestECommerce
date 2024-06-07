import { Link, useLocation } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "../Navigation/Nav.css";

const Nav = ({ handleInputChange, query }) => {
    const location = useLocation();

    // Check if the current location is the dashboard page
    const isDashboardPage = location.pathname === "/dashboard";
    
    return (
        <nav>
            <div className="nav-container">
                <input
                    className="search-input"
                    type="text"
                    onChange={handleInputChange}
                    value={query}
                    placeholder="Enter your search shoes."
                />
            </div>
            <div className="profile-container">
               
                    <Link to="/dashboard" className="nav-link">
                        DashBoard
                        <FiHeart className="nav-icons" />
                    </Link>
                <Link to="/products" className="nav-link">
                    Products
                    <AiOutlineShoppingCart className="nav-icons" />
                </Link>
                <Link to="/orders" className="nav-link">
                    Orders
                    <AiOutlineUserAdd className="nav-icons" />
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
