import React from "react";
import PropTypes from "prop-types";
import _ from "underscore";

import LinkOrAnchor from "./LinkOrAnchor";
import IFrame from "./IFrame";
import Header from "./Header";
import Footer from "./Footer";

const RowPage = ({ rowData }) => {
  const getDataByName = fieldName => {
    return _.where(rowData.fields, { name: fieldName })[0];
  };

  return (
    <>
      <div className="container">
        <div className="main-wrapper bg-white mt-5">
          <Header title={`Order No. ${getDataByName("OrderId").value}`} />
          <div className="px-4 text-right">
            <LinkOrAnchor className="btn btn-primary " to="/">
              <i className="fas fa-angle-left mr-2" />
              Back
            </LinkOrAnchor>
          </div>

          <div
            className="table-container p-4 clearfix"
            style={{ height: getDataByName("TrackingURL") ? "925px" : "auto" }}
          >
            {getDataByName("TrackingURL") ? (
              <IFrame url={getDataByName("TrackingURL").value} />
            ) : (
              <h3 className="my-5">No Tracking Url!</h3>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

RowPage.propTypes = {
  rowData: PropTypes.shape({
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    )
  }).isRequired
};
export default RowPage;
