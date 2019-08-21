import React from "react";
import PropTypes from "prop-types";

import stripFieldName from "../utils/stripFieldName";

const mapAttachmentToComponent = (attachment, fieldName) => {
  if (attachment.type.includes("image")) {
    const src = attachment.url;
    return (
      <img
        key={attachment.id}
        src={src}
        className="attachment-image"
        alt={fieldName}
      />
    );
  }
  return <div />;
};

const Attachments = ({ attachments, fieldName }) => (
  <div
    className={`attachments field dark-green dtc tc pv4 bg-black-10 ${stripFieldName(
      fieldName
    )}`}
  >
    <h2 className="field-name">{fieldName}</h2>
    <ul className="field-value dark-green">
      {attachments.map(attachment => (
        <li className="dark-green" key={attachment.id}>
          {mapAttachmentToComponent(attachment)}
        </li>
      ))}
    </ul>
  </div>
);

Attachments.propTypes = {
  fieldName: PropTypes.string.isRequired,
  attachments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Attachments;
