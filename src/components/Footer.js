import React from "react";
import LinkOrAnchor from "./LinkOrAnchor";

const Footer = () => (
  <footer className="pt-4">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 text-white text-center text-lg-left mb-4">
          <p>Need help? submit your email below and we&apos;ll contact you.</p>
          <form name="contact" method="POST" data-netlify="true">
            <div className="input-group mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="user@example.com"
                aria-label="User email"
                aria-describedby="button-addon"
                required
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-light"
                  type="submit"
                  id="button-addon"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-4 text-white text-center mb-4">
          <p>&copy; Copyright UviaUs 2020</p>
        </div>
        <div className="col-lg-4 mb-4 d-flex justify-content-center justify-content-lg-end">
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
