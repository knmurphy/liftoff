import React from "react";
import PropTypes from "prop-types";

const Iframe = ({ url, className = "" }) => {
  return (
    <div
      className={`h-100 iframe-container border border-primary ${className}`}
    >
      <iframe
        title="iframe"
        src={url}
        width="100%"
        height="100%"
        className="border-0"
      />
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
