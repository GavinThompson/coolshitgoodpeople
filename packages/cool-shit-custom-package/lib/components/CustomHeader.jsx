

import Telescope from 'meteor/nova:lib';
import React from 'react';
//import { Messages } from "meteor/nova:core";

const CustomHeader = (props, {currentUser}) => {
  
  const logoUrl = Telescope.settings.get("logoUrl");
  const siteTitle = Telescope.settings.get("title", "Cool Shit, Good People");

  var sortByClicked = false

  var sortByAnimation = function(){
    if( sortByClicked == true){
      return false
    } else{
        sortByClicked = true;
        var sortBy = document.getElementById("sortBy");    
        var infoCard = document.getElementById("info-card");    
        var sidebarViewsBlock = document.getElementById("sidebar-views");

        var sidebarLinks = document.querySelectorAll('.sidebar-posts-views .mdl-navigation__link');

        sidebarViewsBlock.className = addClass( sidebarViewsBlock, "show-sort-by-list");
        
        // errors with vanilla js slidedown implementation; temp jquery solution
        $("#sidebar-views").slideDown(300); 
        // so so sloppy -- replace with vanilla js implementation later. Works for tonight's demo purposes

        infoCard.className = addClass( infoCard, "animate-up")

        for ( var x=0; x < sidebarLinks.length; x++ ) {
          var showLink = fadeInLink( x );
          setTimeout( showLink, x * 150 );
        }

        function fadeInLink( i ) {
          var link = sidebarLinks[i];
          return function() {
            link.className = addClass( link, "fade-in");
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
				
				<div className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" id="account"><i className="mdl-color-text--cyan-500 material-icons" role="presentation">account_box</i>Account</div>
				<div className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" id="sortBy" onClick={sortByAnimation}><i className="mdl-color-text--cyan-500 material-icons" role="presentation">loop</i>Sort By: New</div>
				
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




