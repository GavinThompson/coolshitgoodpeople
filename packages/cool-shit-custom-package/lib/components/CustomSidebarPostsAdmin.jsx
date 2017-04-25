import React, { PropTypes, Component } from 'react';
import { FormattedMessage, intlShape } from 'react-intl';
import { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router'
import Users from 'meteor/nova:users';

const CustomSidebarPostsAdmin = (props, context) => {
  
  let viewByClicked = false;
  let currentUserAdmin = false;
  if (Users.canDo(context.currentUser, "posts.edit.all")) {
    currentUserAdmin = true
  }


  var showViewByList = function(){


    if( viewByClicked == true){
      return false // occassional double click being activated
    } else{
    	console.log("test 2?")
        viewByClicked = true;
        var viewBy = document.getElementById("viewBy");    
        var infoCard = document.getElementById("info-card");    
        var sidebarViewsBlock = document.getElementById("sidebar-views");
        var sidebarLinks = document.querySelectorAll('.sidebar-posts-views .mdl-navigation__link');

        // errors with vanilla js slidedown implementation; temp jquery solution
        sidebarViewsBlock.className = addClass( sidebarViewsBlock, "show-view-by-list");
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

  if (currentUserAdmin) {
    return (
      <div>
        <div className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" id="viewBy" onClick={showViewByList}><i className="mdl-color-text--cyan-500 material-icons" role="presentation">arrow_drop_down_circle</i>View Style: New</div>
        <Telescope.components.SidebarPostsViews />
      </div>
    )
  }else{
    return(
      <div>
        <div className="collapse"></div>
      </div>
    )
  }

}

CustomSidebarPostsAdmin.propTypes = {
  defaultView: React.PropTypes.string
}

CustomSidebarPostsAdmin.defaultProps = {
  defaultView: "top"
}

CustomSidebarPostsAdmin.contextTypes = {
  currentRoute: React.PropTypes.object,
  currentUser: React.PropTypes.object,
  intl: intlShape
};

CustomSidebarPostsAdmin.displayName = "SidebarPostsAdmin";

module.exports = withRouter(CustomSidebarPostsAdmin);

// possible implementation of disappearing shadow after DropdownButtonfor (i = 0; i < xxx.length; i++) { 
//    var link = xxx[i];
//    console.log( link.className );
//         var newClassName = "";
//         var cl;
//         var classes = link.className.split(" ");
//         for(cl = 0; cl < classes.length; cl++) {
//           if(classes[cl] !== "mdl-shadow--2dp") {
//               newClassName += classes[cl] + " ";
//           }
//         }
//         link.className = newClassName;
  
// }