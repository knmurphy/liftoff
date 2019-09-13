import React from "react";
import _ from "underscore";
import PropTypes from "prop-types";

import LinkOrAnchor from "./LinkOrAnchor";
import Header from "./Header";
import Row from "./Row";
import getFieldsToDisplay from "../utils/getFieldsToDisplay";

const Index = ({ rows, pagination }) => (
  <div className="index-page overflow-wrap">
    {/* this needs to be refactored, shouldn't have check for window here */}
    {process.env.HEADER_TITLE && <Header title={process.env.HEADER_TITLE} />}
    <table className="f6 w-100 mw8 center" cellSpacing="0">
      <thead>
        <tr>
          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Order</th>
          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Product</th>
          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">From</th>
          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">To</th>
          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Company</th>
          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Notes</th>
          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Qty</th>
          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Carrier</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
        {rows.map(row => {
          const slugField = _.find(row.fields, field => field.name === "Slug");
          const slug =
            (typeof window === "undefined" && slugField && slugField.value) ||
            row.id;
          return (
            <LinkOrAnchor key={row.id} to={`/${slug}.html`}>
              <Row
                fieldsToDisplay={getFieldsToDisplay(
                  process.env.HOMEPAGE_FIELD_ORDER
                )}
                rowData={row}
              />
            </LinkOrAnchor>
          );
        })}
      </tbody>
    </table>
    {pagination && (
      <div>
        {pagination.back && (
          <LinkOrAnchor className="nav-button" to={pagination.back}>
            <span>Back</span>
          </LinkOrAnchor>
        )}
        {pagination.next && (
          <LinkOrAnchor className="nav-button" to={pagination.next}>
            <span>Next</span>
          </LinkOrAnchor>
        )}
      </div>
    )}
  </div>
);

Index.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string
        })
      ),
      name: PropTypes.string
    })
  ),
  pagination: PropTypes.shape({
    back: PropTypes.string,
    next: PropTypes.string
  })
};

Index.defaultProps = {
  rows: [],
  pagination: null
};

export default Index;
