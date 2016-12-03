

import Telescope from 'meteor/nova:lib';
import React from 'react';
//import { Messages } from "meteor/nova:core";

const CustomHeader = (props, {currentUser}) => {
  
  const logoUrl = Telescope.settings.get("logoUrl");
  const siteTitle = Telescope.settings.get("title", "Nova");
  const tagline = Telescope.settings.get("tagline");

  return (

	
	<div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
		<header className="mdl-layout__header">
			<div className="mdl-layout__header-row">
				<div className="mdl-layout-spacer"></div>

				<div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right header-search">
					<label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="fixed-header-drawer-exp">
						<i className="material-icons">search</i>
					</label>
					<div className="mdl-textfield__expandable-holder">
						<input className="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp"/>
						<label className="mdl-textfield__label" htmlFor="search-expandable"></label>
					</div>
				</div>

				<button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent new-post-button">
					<i className="material-icons" role="presentation">add</i>
					<span className="visuallyhidden">Add</span>
				</button>

			</div>
		</header>
		<div className="mdl-layout__drawer">
			<span className="mdl-layout-title">
				<Telescope.components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
			</span>
			<nav className="sidebar-navigation mdl-navigation">
				<a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">home</i>Home</a>
				<a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">inbox</i>Inbox</a>
				<a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">delete</i>Trash</a>
				<a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">report</i>Spam</a>
				<a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">forum</i>Forums</a>
				<a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">home</i>Home</a>
				<a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">inbox</i>Inbox</a>
				<a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">delete</i>Trash</a>
				<a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">report</i>Spam</a>
				<a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">forum</i>Forums</a>
				<a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">home</i>Home</a>
				<a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">inbox</i>Inbox</a>
				<a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">delete</i>Trash</a>
				<a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">report</i>Spam</a>
				<a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">forum</i>Forums</a>
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




