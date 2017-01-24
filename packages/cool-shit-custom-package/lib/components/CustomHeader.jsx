

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
  var sortByClicked = false;

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

  var showSortByList = function(){
    if( sortByClicked == true){
      return false // occassional double click being activated
    } else{
    	console.log("test 2?")
        sortByClicked = true;
        var sortBy = document.getElementById("sortBy");    
        var infoCard = document.getElementById("info-card");    
        var sidebarViewsBlock = document.getElementById("sidebar-views");
        var sidebarLinks = document.querySelectorAll('.sidebar-posts-views .mdl-navigation__link');

        // errors with vanilla js slidedown implementation; temp jquery solution
        sidebarViewsBlock.className = addClass( sidebarViewsBlock, "show-sort-by-list");
        $("#sidebar-views").slideDown(300); 
        // so so sloppy -- replace with vanilla js implementation later. Works for tonight's demo purposes

        infoCard.className = addClass( infoCard, "animate-up") // temp fix for infoCard to be in the perfect spot

        for ( var x=0; x < sidebarLinks.length; x++ ) {
          //staggers each navigation link to animate opacity in
          var showLink = fadeInLink( x );
          setTimeout( showLink, x * 150 );  
        }

        setTimeout( function() { 
          sidebarViewsBlock.className = addClass( sidebarViewsBlock, "transition-complete");
          sidebarViewsBlock.className = addClass( sidebarViewsBlock, "transition-complete");
        }, sidebarLinks.length * 150)    //OKAY here is where it gets super messy; as it turns out when you click on a 
                                         //fucking nav link it becomes active and then loses the previous opacity setting uughgggggh so after the whole staggered animations; set a seperate timeout to fire after ALL the staggering happens and then adds a completed class to the navigation parent; corresponds with custom.scss file.
                                         //needs to be fixed but for now it is A-OK. I'd rather get this out sooner than later and refactor to perfection later. Sick of sitting on these things to be 'perfect'

        function fadeInLink( i ) {
          //function/closure used above to properly stagger adding transition class at appropriate timeouts
          var link = sidebarLinks[i];
          return function() {
            link.className = addClass( link, "fade-in-transition");
          }
        }

    }
  }


  var addClass = function( element, classVariable ){
    var newClassName = "";
    var classes = element.className
    newClassName =  classes + " " + classVariable;
    return newClassName;
    // should be used like this: element.className = ( element, "classVariable") 
  }


  var removeClass = function( element, classVariable ){
    var newClassName = "";
    var classes = element.className.split(" ");
    for(i = 0; i < classes.length; i++) {
      if(classes[i] !== classVariable ) {
          newClassName += classes[i] + " ";
      }
    }
    return newClassName;
    // should be used like this: element.className = removeClass( element, "classVariable") 
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

				<div className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" id="sortBy" onClick={showSortByList}><i className="mdl-color-text--cyan-500 material-icons" role="presentation">arrow_drop_down_circle</i>Sort By: New</div>
				
				<Telescope.components.SidebarPostsViews />
				
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




