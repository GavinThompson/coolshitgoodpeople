import React, { PropTypes, Component } from 'react';

const CustomSiteLoading = ({color}) => {
  return (
    <div id="app.loading" className="loading-overlay">
      <div className="center">
        <Telescope.components.Loading />
      </div>
    </div>
  )
}

CustomSiteLoading.propTypes = {
  color: React.PropTypes.string
}

CustomSiteLoading.displayName = "Loading";

module.exports = CustomSiteLoading;
export default CustomSiteLoading;