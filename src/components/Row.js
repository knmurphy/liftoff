import React from "react";
import PropTypes from "prop-types";
import _ from "underscore";

import TextField from "./TextField";
import Attachments from "./Attachments";
import * as customRenderers from "../../custom/renderers";
import LinkOrAnchor from "./LinkOrAnchor";
import stripFieldName from "../utils/stripFieldName";

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
      <tr>
        {value.map((string, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <TextField key={idx} fieldName={name} data={string} />
        ))}
      </tr>
    );
  }

  return <tr />;
};

const Col = ({ name, children, slug = null, className, ...rest }) => {
  return slug ? (
    <td className={`${stripFieldName(name)} ${className}`} {...rest}>
      <LinkOrAnchor to={`/${slug}.html`}>{children}</LinkOrAnchor>
    </td>
  ) : (
    <td className={`${stripFieldName(name)} ${className}`} {...rest}>
      {children}
    </td>
  );
};

const ColData = ({ allfields, name }) => {
  const getDataByName = fieldName => {
    return _.where(allfields, { name: fieldName })[0];
  };

  const object = getDataByName(name);

  return (
    <>{typeof object !== "undefined" ? getRenderer(getDataByName(name)) : ""}</>
  );
};

const Row = ({ rowData, fieldsToDisplay, slug }) => {
  return (
    <tr key={Number} style={{ background: `#e7e7e7` }}>
      <Col name="OrderId" slug={slug}>
        <ColData allfields={rowData.fields} name="OrderId" />
      </Col>
      <Col name="AgentName">
        <ColData allfields={rowData.fields} name="AgentName" />
      </Col>
      <Col name="ShippingName">
        <ColData allfields={rowData.fields} name="ShippingName" />
      </Col>
      <Col name="CompanyName">
        <ColData allfields={rowData.fields} name="CompanyName" />
      </Col>
      <Col name="Address" className="d-none d-lg-table-cell">
        <ColData allfields={rowData.fields} name="ShippingAddress1" />
        {`, `}
        <ColData allfields={rowData.fields} name="ShippingAddress2" />
        {`, `}
        <ColData allfields={rowData.fields} name="ShippingCity" />
        {`, `}
        <ColData allfields={rowData.fields} name="ShippingState" />
        {` `}
        <ColData allfields={rowData.fields} name="ShippingZip" />
      </Col>
      <Col name="ProductName">
        <ColData allfields={rowData.fields} name="ProductName" />
      </Col>
      <Col name="OrderQuantity">
        <ColData allfields={rowData.fields} name="OrderQuantity" />
      </Col>
      <Col name="ShippingCarrier">
        <ColData allfields={rowData.fields} name="ShippingCarrier" />
      </Col>
      <Col name="Tracking" slug={slug}>
        <ColData allfields={rowData.fields} name="Tracking" />
      </Col>
      <Col name="AgentImage">
        <ColData allfields={rowData.fields} name="ShippingStatus" />
      </Col>
      <Col name="AgentImage">
        <ColData allfields={rowData.fields} name="AgentImage" />
      </Col>
    </tr>
  );
};

Row.defaultProps = {
  rowData: {},
  fieldsToDisplay: [],
  slug: ""
};

Row.propTypes = {
  rowData: PropTypes.shape({
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    )
  }),
  fieldsToDisplay: PropTypes.arrayOf(PropTypes.string),
  slug: PropTypes.string
};

export default Row;
