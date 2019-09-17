import React from "react";
import PropTypes from "prop-types";
import _ from "underscore";

import TextField from "./TextField";
import Attachments from "./Attachments";
import * as customRenderers from "../../custom/renderers";

const getRenderer = field => {
  const { value, name } = field;
  const customRendererName = name.replace(/\s/g, "");
  if (customRenderers[customRendererName]) {
    const Component = customRenderers[customRendererName];
    return <Component key={name} name={name} value={value} />;
  }

  if (typeof value === "string" || typeof value === "number") {
    return <TextField key={name} fieldName={name} data={value} />;
  }

  if (Array.isArray(value)) {
    // is attachment
    if (value.length && value[0].size) {
      return <Attachments key={name} fieldName={name} attachments={value} />;
    }

    return (
      <tr key={name}>
        {value.map((string, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <TextField key={idx} fieldName={name} data={string} />
        ))}
      </tr>
    );
  }

  return <tr />;
};

const Row = ({ rowData, fieldsToDisplay }) => (
  <tr>
    {_.chain(rowData.fields)
      .map(field =>
        fieldsToDisplay.includes(field.name) ? getRenderer(field) : null
      )
      .filter(renderer => !!renderer)
      .value()}
  </tr>
);

Row.defaultProps = {
  rowData: {},
  fieldsToDisplay: []
};

Row.propTypes = {
  rowData: PropTypes.shape({
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    )
  }),
  fieldsToDisplay: PropTypes.arrayOf(PropTypes.string)
};

export default Row;
