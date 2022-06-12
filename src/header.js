import React from "react";
import "./header.css"
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="header_logo">
                    <LunchDiningIcon className="header_logo_Image" fontSize="large" />
                    <h2 className="header_logoTitle">BurgeRoad</h2>
                </div>
            </Link>

            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <Link to="/login" style={{ textDecoration: "none" }}>
                    <div className="nav_item">
                        <span className="nav_itemLineOne">Hello Guest</span>
                        <span className="nav_itemLineTwo">Sign In</span>
                    </div>
                </Link>
                <div className="nav_item">
                    <span className="nav_itemLineOne">Your</span>
                    <span className="nav_itemLineTwo">Favorites</span>

                </div>
                <div className="nav_itemStar">
                    <StarBorderIcon className="itemStar" fontSize="medium" />
                    <span className="nav_itemLineTwo nav_starCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
