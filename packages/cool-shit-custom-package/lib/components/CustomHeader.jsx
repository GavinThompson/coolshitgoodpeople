

import Telescope from 'meteor/nova:lib';
import React from 'react';
//import { Messages } from "meteor/nova:core";

const Header = (props, {currentUser}) => {
  
  const logoUrl = Telescope.settings.get("logoUrl");
  const siteTitle = Telescope.settings.get("title", "Nova");
  const tagline = Telescope.settings.get("tagline");

  return (

	
	<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
	  <header className="mdl-layout__header">
		<div className="mdl-layout__header-row">
			<span className="mdl-layout-title">
				<Telescope.components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
			</span>
		</div>
		<div className="mdl-layout__tab-bar mdl-js-ripple-effect">
			<a href="#scroll-tab-1" className="mdl-layout__tab is-active">Tab 1</a>
			<a href="#scroll-tab-2" className="mdl-layout__tab">Tab 2</a>
			<a href="#scroll-tab-3" className="mdl-layout__tab">Tab 3</a>
			<a href="#scroll-tab-4" className="mdl-layout__tab">Tab 4</a>
			<a href="#scroll-tab-5" className="mdl-layout__tab">Tab 5</a>
			<a href="#scroll-tab-6" className="mdl-layout__tab">Tab 6</a>
		</div>
	  </header>
	  <div className="mdl-layout__drawer">
		<span className="mdl-layout-title">
			<Telescope.components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
		</span>
	  </div>
	  <main className="mdl-layout__content">
		<section className="mdl-layout__tab-panel is-active" id="scroll-tab-1">
			<div className="page-content">
				Test
			</div>
		</section>
		<section className="mdl-layout__tab-panel" id="scroll-tab-2">
			<div className="page-content">
				Test
			</div>
		</section>
		<section className="mdl-layout__tab-panel" id="scroll-tab-3">
			<div className="page-content">
				Test
			</div>
		</section>
		<section className="mdl-layout__tab-panel" id="scroll-tab-4">
			<div className="page-content">
				Test
			</div>
		</section>
		<section className="mdl-layout__tab-panel" id="scroll-tab-5">
			<div className="page-content">
				Test
			</div>
		</section>
		<section className="mdl-layout__tab-panel" id="scroll-tab-6">
			<div className="page-content">
				Test
			</div>
		</section>
	  </main>
	</div>
  )
}

Header.displayName = "Header";

Header.contextTypes = {
  currentUser: React.PropTypes.object,
};

module.exports = Header;




