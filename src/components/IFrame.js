import React from "react";
import PropTypes from "prop-types";

const Iframe = ({ url, className = "" }) => {
  return (
    <div className={className}>
      <iframe title="iframe" src={url} width="500px" height="300px" />
    </div>
  );
};

export default Iframe;

Iframe.defaultProps = {
  className: ""
};

Iframe.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string
};
