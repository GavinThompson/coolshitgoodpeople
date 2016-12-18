import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, intlShape } from 'react-intl';
import { Button } from 'react-bootstrap';
import { ModalTrigger } from "meteor/nova:core";

const CustomPostsNewButton = (props, context) => {

  const size = context.currentUser ? "large" : "small";
  const button = <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--6dp mdl-color--accent new-post-button"><i className="material-icons" role="presentation">add</i><span className="visuallyhidden">Add</span></button>;
  return (
    <ModalTrigger size={size} title={context.intl.formatMessage({id: "posts.new_post"})} component={button}>
      <Telescope.components.PostsNewForm/>
    </ModalTrigger>
  )
}

CustomPostsNewButton.displayName = "PostsNewButton";

CustomPostsNewButton.contextTypes = {
  currentUser: React.PropTypes.object,
  messages: React.PropTypes.object,
  intl: intlShape
}

module.exports = CustomPostsNewButton;
export default CustomPostsNewButton;