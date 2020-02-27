import React from "react";
import PropTypes from "prop-types";
import LinkOrAnchor from "./LinkOrAnchor";

const Header = ({ title }) => (
  <header className="header p-4">
    <div className="row">
      <div className="col-lg-6">
        <div className="logo-top">
          <LinkOrAnchor className="nav-button" to="/">
            <span>
              <img src="./logoTop.png" className="img-fluid" alt="" />
            </span>
          </LinkOrAnchor>
        </div>
      </div>
      <div className="col-lg-6">
        <h1 className="text-lg-right">{title}</h1>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title: ""
};

export default Header;
