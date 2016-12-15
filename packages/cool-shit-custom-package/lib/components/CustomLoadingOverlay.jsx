import React, { Component } from 'react';

let width0 = { width: "0%" }
let width100 = { width: "100%" }

const CustomLoadingOverlay = ({color}) => {
  return (
    <div className="loading-overlay" id="appLoad">
      <div className="center">
        <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate">
          
          <div className="progressbar bar bar1" style={width0}></div>
          <div className="bufferbar bar bar2" style={width100}></div>
          <div className="auxbar bar bar3" style={width0}></div>

        </div>
      </div>
    </div>
  )
}


CustomLoadingOverlay.displayName = "Loading";

module.exports = CustomLoadingOverlay;
export default CustomLoadingOverlay;