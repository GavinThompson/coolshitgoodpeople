import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';
import { FlashContainer } from "meteor/nova:core";

class CustomLayout extends Component {



  constructor () {
    super()
    this.state = {
      initLoading: true
    }
  }

  componentDidMount() {
   
      {this.setState({ initLoading: false })}

  }


  render() {

    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">

        {this.state.initLoading ? <Telescope.components.LoadingOverlay /> : null}

        <Telescope.components.HeadTags />

        <Telescope.components.UsersProfileCheck {...this.props} />

        <Telescope.components.Header {...this.props}/>

      
        <main className="mdl-layout__content content">
          <div className="header-buffer"></div>
          <FlashContainer component={Telescope.components.FlashMessages}/>

          <div className="mdl-grid mdl-cell mdl-cell--9-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone">
            {this.props.children}
          </div>
        </main>
      
        <Telescope.components.Footer {...this.props} />

      
      </div>
    )

  }
}

CustomLayout.displayName = "Layout";

module.exports = CustomLayout;