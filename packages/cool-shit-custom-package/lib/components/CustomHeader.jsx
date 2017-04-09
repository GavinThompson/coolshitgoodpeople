

import Telescope from 'meteor/nova:lib';
import React from 'react';
//import { Messages } from "meteor/nova:core";
import { FormattedMessage } from 'react-intl';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/std:accounts-ui';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';


import Users from 'meteor/nova:users';
import { ModalTrigger } from "meteor/nova:core";



const CustomHeader = (props, {currentUser}) => {
  
  const logoUrl = Telescope.settings.get("logoUrl");
  const siteTitle = Telescope.settings.get("title", "Cool Shit, Good People");

  var signInButton = <div className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" id="signInButton"><i className="mdl-color-text--cyan-500 material-icons" role="presentation">lock</i>Sign In</div>;

  var accountButton = function( user ){
    if( user ){
      return (
        <div>
          <div className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" id="accountButton">
            <i className="mdl-color-text--cyan-500 material-icons" role="presentation">more_vert</i>  {Users.getDisplayName(currentUser)} 
          </div>

          <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor="accountButton">
            <Link to={`/users/${user.telescope.slug}`}>
                <Telescope.components.AccountMenuItem menuOption={"profile"} user={user} />
            </Link>
            <Link to={`/account`}>
                <Telescope.components.AccountMenuItem menuOption={"edit"} user={user} />
            </Link>
            <Telescope.components.AccountMenuItem menuOption={"logOut"} user={user} />
          </ul>
        </div>
      )
    }else{
      return (
        <ModalTrigger size="small" title="Sign In / Sign Up" component={signInButton}>
          <Telescope.components.UsersAccountForm />
        </ModalTrigger>
      )
    }
  }

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
				
				{accountButton( currentUser )}

				<Telescope.components.SidebarPostsAdmin />
				
				<div className="sidebar-card mdl-card mdl-shadow--4dp" id="info-card">
					<div className="mdl-card__supporting-text">
						<p>
							We provide a curated list of creativity and inspiration from around the web. We showcase cool shit, and most importantly good people!
						</p>
						<p>
							Want to contribute? Click the button in the top right corner! Want the highlight reel every week? Sign up for our newsletter below!
						</p>
					</div>
					<div className="mdl-card__actions mdl-card--border">
						<a href="http://www.tinyletter.com/coolshitgoodpeople" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
							<i className="mdl-color-text--cyan-500 material-icons" role="presentation">mail_outline</i> Newsletter
						</a>
					</div>
				</div>

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




