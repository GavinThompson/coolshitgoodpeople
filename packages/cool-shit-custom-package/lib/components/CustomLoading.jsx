import React, { PropTypes, Component } from 'react';

const CustomLoading = ({color}) => {
  return (
    <div>
      <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
    </div>
  )
}

CustomLoading.propTypes = {
  color: React.PropTypes.string
}

CustomLoading.displayName = "Loading";

module.exports = CustomLoading;
export default CustomLoading;