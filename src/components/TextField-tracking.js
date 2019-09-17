import React from "react";
import PropTypes from "prop-types";

import stripFieldName from "../utils/stripFieldName";

const TextField = ({ fieldName, data }) => {
  const isTracking =
    process.env.TRACKING_FIELD &&
    process.env.TRACKING_FIELD.split(",").includes(fieldName);

  return (
    <td className={`${stripFieldName(fieldName)} field pa3`}>
      {isTracking ? (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <a
          className="tracking-link"
          href={data}
          dangerouslySetInnerHTML={{ __html: "Track Oder" }}
        />
      ) : (
        <span className="field-value">{data}</span>
      )}
    </td>
  );
};

TextField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default TextField;
