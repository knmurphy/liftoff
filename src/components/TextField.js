import React from "react";
import PropTypes from "prop-types";
import { markdown } from "markdown";

import stripFieldName from "../utils/stripFieldName";

const TextField = ({ fieldName, data }) => {
  const isMarkdown =
    process.env.MARKDOWN_FIELDS &&
    process.env.MARKDOWN_FIELDS.split(",").includes(fieldName);

  return (
    <td className={`${stripFieldName(fieldName)} field pa3 bb b--black-20`}>
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
    </td>
  );
};

TextField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default TextField;
