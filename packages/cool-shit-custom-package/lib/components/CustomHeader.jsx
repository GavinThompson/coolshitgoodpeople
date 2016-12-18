

import Telescope from 'meteor/nova:lib';
import React from 'react';
//import { Messages } from "meteor/nova:core";

const CustomHeader = (props, {currentUser}) => {
  
  const logoUrl = Telescope.settings.get("logoUrl");
  const siteTitle = Telescope.settings.get("title", "Cool Shit, Good People");

  return (

	
	<div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">

		<header className="mdl-layout__header">
			<div className="mdl-layout__header-row">
				<div className="mdl-layout-spacer"></div>

				<Telescope.components.SearchForm />


				<Telescope.components.PostsNewButton/>


			</div>
		</header>
		<div className="mdl-layout__drawer">
			<span className="mdl-layout-title">
				<Telescope.components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
			</span>
			<nav className="sidebar-navigation mdl-navigation">
				<a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">home</i>Account*</a>
				<Telescope.components.SidebarPostsViews />
				<a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">home</i>Top*</a>
				<a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">inbox</i>New*</a>
				<a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">delete</i>Best*</a>
			</nav>
		</div>

	</div>

  )
}

CustomHeader.displayName = "Header";

CustomHeader.contextTypes = {
  currentUser: React.PropTypes.object,
};

module.exports = CustomHeader;




