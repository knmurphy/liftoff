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
        className="h3 w3 dib attachment-image"
        alt={fieldName}
      />
    );
  }
  return <td />;
};

const Attachments = ({ attachments, fieldName }) => (
  <td
    className={`${stripFieldName(fieldName)} attachments field  bb b--black-20`}
  >
    {attachments.map(attachment => (
      <div className="img-span p1 tc" key={attachment.id}>
        {mapAttachmentToComponent(attachment)}
      </div>
    ))}
  </td>
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
