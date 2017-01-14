import React, { PropTypes, Component } from 'react';
import { FormattedMessage, intlShape } from 'react-intl';
import { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router'
import Users from 'meteor/nova:users';

const CustomSidebarPostsViews = (props, context) => {

  let views = [{name:"top", icon: "loyalty"},
               {name:"new", icon: "grade"},
               {name:"best", icon: "pets"}];


  const adminViews = [{name:"pending", icon: "loyalty"},
               {name:"rejected", icon: "grade"},
               {name:"scheduled", icon: "pets"}];


  if (Users.canDo(context.currentUser, "posts.edit.all")) {
    views = views.concat(adminViews);
  }

  const query = _.clone(props.router.location.query);

  return (
    <div className="sidebar-posts-views" id="sidebar-views">
    
        {views.map(view => 

          <LinkContainer key={view.name} to={{pathname: "/", query: {...query, view: view.name}}} /*to={}*/>
            <Button className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect">
              <i className="mdl-color-text--cyan-500 material-icons" role="presentation">{view.icon}</i>
              <FormattedMessage id={"posts."+view.name}/>
            </Button>
          </LinkContainer>
        )}

        <LinkContainer to={"/daily"} /*to={{name: "posts.daily"}}*/>
          <Button className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect">
            <i className="mdl-color-text--cyan-500 material-icons" role="presentation">alarm</i>
            <FormattedMessage id="posts.daily"/>
          </Button>
        </LinkContainer>

    </div>
  )
}

CustomSidebarPostsViews.propTypes = {
  defaultView: React.PropTypes.string
}

CustomSidebarPostsViews.defaultProps = {
  defaultView: "top"
}

CustomSidebarPostsViews.contextTypes = {
  currentRoute: React.PropTypes.object,
  currentUser: React.PropTypes.object,
  intl: intlShape
};

CustomSidebarPostsViews.displayName = "SidebarPostsViews";

module.exports = withRouter(CustomSidebarPostsViews);

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