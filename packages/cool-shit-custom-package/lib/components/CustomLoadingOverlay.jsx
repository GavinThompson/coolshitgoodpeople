import React, { Component } from 'react';

const CustomLoadingOverlay = ({color}) => {
  return (
    <div className="loading-overlay" id="appLoad">
      <div className="center">
        <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
      </div>
    </div>
  )
}


CustomLoadingOverlay.displayName = "Loading";

module.exports = CustomLoadingOverlay;
export default CustomLoadingOverlay;