import Telescope from 'meteor/nova:lib';

import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/std:accounts-ui';
import Users from 'meteor/nova:users';


const CustomAccountMenuItem = ({ menuOption, user }) => {
  
  var listItem;
  if( menuOption == "edit"){
    listItem = (
      <li className="mdl-menu__item mdl-menu__item--full-bleed-divider">
        <i className="mdl-color-text--cyan-500 material-icons" role="presentation">settings_applications</i> <FormattedMessage id="users.edit_account"/>
      </li>
    )
  }else if( menuOption == "logOut"){
    listItem = (
      <li className="mdl-menu__item" onClick={() => Meteor.logout(Accounts.ui._options.onSignedOutHook())}>
        <i className="mdl-color-text--cyan-500 material-icons" role="presentation">power_settings_new</i> <FormattedMessage id="users.log_out"/>
      </li>
    )
  }else{
    listItem = (
      <li className="mdl-menu__item">
        <Telescope.components.UsersAvatar size="small" user={user} link={false} />  <FormattedMessage id="users.profile"/>
      </li>
    )
  }

  return (
    <div>
      {listItem}
    </div>
  );
    
}

CustomAccountMenuItem.displayName = "AccountMenuItem";

CustomAccountMenuItem.contextTypes = {
  user: React.PropTypes.object,
};

module.exports = CustomAccountMenuItem;