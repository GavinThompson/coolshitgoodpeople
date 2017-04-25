import React, { Component } from 'react';

let width0 = { width: "0%" }
let width100 = { width: "100%" }


class CustomLoadingOverlay extends Component {


  componentDidMount() {
    //
    // set el height and width etc.

      var isMobileDevice = function(){
        var checkDevice = {
          Android: function() {
              return window.navigator.userAgent.match(/Android/i);
          },
          BlackBerry: function() {
              return window.navigator.userAgent.match(/BlackBerry/i);
          },
          iOS: function() {
              return window.navigator.userAgent.match(/iPhone|iPad|iPod/i);
          },
          Opera: function() {
              return window.navigator.userAgent.match(/Opera Mini/i);
          },
          Windows: function() {
              return window.navigator.userAgent.match(/IEMobile/i);
          },
          any: function() {
              return (checkDevice.Android() || checkDevice.BlackBerry() || checkDevice.iOS() || checkDevice.Opera() || checkDevice.Windows());
          }
        };

        console.log( window.navigator.userAgent )

        if( checkDevice.any() ){
          window.location = "http://m.coolshitgoodpeople.co"
        }
      }

      isMobileDevice();
    }

    render() {
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
  
}


CustomLoadingOverlay.displayName = "Loading";

module.exports = CustomLoadingOverlay;
export default CustomLoadingOverlay;