import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => (
  <header className="header p-3">
    <div className="row">
      <div className="col-lg-6">
        <div className="logo-top">
          <img src="./logoTop.png" className="img-fluid" alt="" />
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
