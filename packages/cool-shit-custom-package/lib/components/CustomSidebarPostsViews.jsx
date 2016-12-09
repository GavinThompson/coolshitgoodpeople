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


  const adminViews = ["pending", "rejected", "scheduled"];


  if (Users.canDo(context.currentUser, "posts.edit.all")) {
    views = views.concat(adminViews);
  }

  const query = _.clone(props.router.location.query);

  return (
    <div className="sidebar-posts-views">

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


// <div className="posts-views">
//   <DropdownButton 
//     bsStyle="default" 
//     className="views btn-secondary" 
//     title={context.intl.formatMessage({id: "posts.view"})} 
//     id="views-dropdown"
//   >
//     {views.map(view => 
//       <LinkContainer key={view} to={{pathname: "/", query: {...query, view: view}}} /*to={}*/ className="dropdown-item">
//         <MenuItem>
//           <FormattedMessage id={"posts."+view}/>
//         </MenuItem>
//       </LinkContainer>
//     )}
//     <LinkContainer to={"/daily"} /*to={{name: "posts.daily"}}*/ className="dropdown-item">
//       <MenuItem className={"bar"}>
//         <FormattedMessage id="posts.daily"/>
//       </MenuItem>
//     </LinkContainer>
//   </DropdownButton>
// </div>
				// <a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">home</i>Top*</a>
				// <a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">inbox</i>New*</a>
				// <a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">delete</i>Best*</a>
				// <a className="mdl-navigation__link mdl-js-button mdl-js-ripple-effect" href=""><i className="mdl-color-text--cyan-500 material-icons" role="presentation">report</i>Daily*</a>
