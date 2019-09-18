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
        className="br4 h3 w3 dib attachment-image"
        alt={fieldName}
        height="53px"
        width="50px"
      />
    );
  }
  return <td />;
};

const Attachments = ({ attachments, fieldName }) => (
  <td className={`${stripFieldName(fieldName)} attachments field`}>
    {attachments.map(attachment => (
      <div className="pa4 tc" key={attachment.id}>
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
