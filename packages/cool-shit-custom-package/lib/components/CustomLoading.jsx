import React, { PropTypes, Component } from 'react';

const CustomLoading = ({color}) => {
  return (
    <div className="loading-overlay">
      <div className="center">
        <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
      </div>
    </div>
  )
}

CustomLoading.propTypes = {
  color: React.PropTypes.string
}

CustomLoading.defaultProps = {
  color: "black"
}

CustomLoading.displayName = "Loading";

module.exports = CustomLoading;
export default CustomLoading;