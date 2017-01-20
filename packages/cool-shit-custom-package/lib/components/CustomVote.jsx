import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import Users from 'meteor/nova:users';

class CustomVote extends Telescope.components.Vote {

  renderIcon( hasUpvoted ) {
    let heartIcon;
    
    if( hasUpvoted ){
      heartIcon = (
        <i className="fa fa-heart fa-2x"></i>
      )
    }else{
       heartIcon = (
        <i className="fa fa-heart-o fa-2x"></i>
      )
    }

    return heartIcon;
  }

  render() {
    const post = this.props.post;
    const user = this.context.currentUser;

    const hasUpvoted = Users.hasUpvoted(user, post);
    const hasDownvoted = Users.hasDownvoted(user, post);
    const actionsClass = classNames(
      "vote", 
      {voted: hasUpvoted || hasDownvoted},
      {upvoted: hasUpvoted},
      {downvoted: hasDownvoted}
    );

    return (
      <div className={actionsClass}>
        <a className="upvote-button" onClick={this.upvote}>
          { this.renderIcon( hasUpvoted ) }
          <div className="sr-only">Upvote</div>
          <div className="vote-count">{post.baseScore || 0}</div>
        </a>
      </div>
    )
  }
};
  
CustomVote.propTypes = {
  post: React.PropTypes.object.isRequired
}

CustomVote.contextTypes = {
  currentUser: React.PropTypes.object,
  actions: React.PropTypes.object,
  events: React.PropTypes.object,
  messages: React.PropTypes.object
};

export default CustomVote;
