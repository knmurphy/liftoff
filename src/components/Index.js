import React from "react";
import _ from "underscore";
import PropTypes from "prop-types";

import LinkOrAnchor from "./LinkOrAnchor";
import Header from "./Header";
import Footer from "./Footer";
import Row from "./Row";
import getFieldsToDisplay from "../utils/getFieldsToDisplay";

const Index = ({ rows, pagination }) => (
  <>
    <div className="container">
      <div className="main-wrapper bg-white mt-5">
        {/* this needs to be refactored, shouldn't have check for window here */}
        {process.env.HEADER_TITLE && (
          <Header title={process.env.HEADER_TITLE} />
        )}
        <div className="table-container p-4">
          <table className="table table-responsive table-hover mb-0">
            <thead>
              <tr className="bg-primary text-white">
                <th className="">Order</th>
                <th className="">Agent Name</th>
                <th className="">Recipient</th>
                <th className="">Company</th>
                <th className="d-none d-lg-table-cell">Address</th>
                <th className="">Product</th>
                <th className="">Qty</th>
                <th className="">Method</th>
                <th className="">Tracking</th>
                <th className="">Shipping Status</th>
                <th className="">Agent Photo</th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              {rows.map(row => {
                const slugField = _.find(
                  row.fields,
                  field => field.name === "Slug"
                );
                const slug =
                  (typeof window === "undefined" &&
                    slugField &&
                    slugField.value) ||
                  row.id;

                return (
                  <Row
                    fieldsToDisplay={getFieldsToDisplay(
                      process.env.HOMEPAGE_FIELD_ORDER
                    )}
                    rowData={row}
                    key={slug}
                    slug={slug}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
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
    </div>
    <Footer />
  </>
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
