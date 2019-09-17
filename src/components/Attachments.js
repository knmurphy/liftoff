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
  <div>
    {attachments.map(attachment => (
      <td
        className={`attachments field ${stripFieldName(fieldName)}`}
        key={attachment.id}
      >
        {mapAttachmentToComponent(attachment)}
      </td>
    ))}
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
