import { Link } from "react-router-dom";
import websiteLogo from '../../images/website_logo.png'
import profile from '../../images/profile.png'
import React from "react";
import "./index.css";

const Header = (props) => {
   const { isButtonRequired } = props 
  return (
    <div className="nav-header">
      <div className="nav-content">
        <div className="nav-container">
          <Link to="/resource-management-portal">
            <img
              className="website-logo"
              src={websiteLogo}
              alt="website logo"
            />
          </Link>
          <div className="button-logo-container">
            { isButtonRequired &&              
            <Link to="/add-resource">
                <button type="button" className="add-item-btn">
                  ADD ITEM
                </button>
            </Link>}
            <Link to="/login">
                <img
                    className="profile-logo"
                    src={profile}
                    alt="profile logo"
                />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header