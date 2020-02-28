import React from "react";
import PropTypes from "prop-types";
import { markdown } from "markdown";

const TextField = ({ fieldName, data }) => {
  const isMarkdown =
    process.env.MARKDOWN_FIELDS &&
    process.env.MARKDOWN_FIELDS.split(",").includes(fieldName);

  return (
    <>
      {isMarkdown ? (
        <span
          className="field-value markdown-field"
          dangerouslySetInnerHTML={{ __html: markdown.toHTML(data) }}
        />
      ) : (
        <span id={data} className="field-value">
          {data}
        </span>
      )}
    </>
  );
};

TextField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default TextField;
