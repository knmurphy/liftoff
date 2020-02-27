import React from "react";
import LinkOrAnchor from "./LinkOrAnchor";

const Footer = () => (
  <footer className="pt-4">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 text-center text-lg-left mb-4">
          <LinkOrAnchor
            className="btn btn-light font-italic font-weight-bold"
            to="/"
          >
            Need Help? Click Here
          </LinkOrAnchor>
        </div>
        <div className="col-lg-4 text-white text-center mb-4">
          <p>&copy; Copyright UviaUs 2020</p>
        </div>
        <div className="col-lg-4 mb-4 d-flex justify-content-lg-end">
          <div className="logo-bottom">
            <LinkOrAnchor className="nav-button" to="/">
              <img src="./logoBottom.png" className="img-fluid" alt="" />
            </LinkOrAnchor>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
