import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';
import { FlashContainer } from "meteor/nova:core";

class CustomLayout extends Component {

  render() {

    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">

        <Telescope.components.HeadTags />

        <Telescope.components.Loading />

        <Telescope.components.UsersProfileCheck {...this.props} />

        <Telescope.components.Header {...this.props}/>

      
        <main className="mdl-layout__content">
          <FlashContainer component={Telescope.components.FlashMessages}/>

          <Telescope.components.Newsletter />
          <div className="mdl-grid">
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