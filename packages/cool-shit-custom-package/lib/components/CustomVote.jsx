import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import Users from 'meteor/nova:users';

class CustomVote extends Telescope.components.Vote {

  renderIcon( hasUpvoted ) {
    let heartIcon;
    if( hasUpvoted ){
      heartIcon = (
        <i className="fa fa-heart fa-2x vote-icon"></i>
      )
    }else{
       heartIcon = (
        <i className="fa fa-heart-o fa-2x vote-icon"></i>
      )
    }
    return heartIcon;
  }

  heartExplosion(x, y) {

    console.log( x, y);

    var particles = 15,
    // explosion container and its reference to be able to delete it on animation end
    explosion = $('<div class="explosion"></div>');

    // put the explosion container into the body to be able to get it's size
    $('body').append(explosion);

    // position the container to be centered on click
    explosion.css('left', x - explosion.width() / 2);
    explosion.css('top', y - explosion.height() / 2);

    for (var i = 0; i < particles; i++) {
      console.log("test")
      // positioning x,y of the particle on the circle (little randomized radius)
      var x = (explosion.width() / 2) + this.rand(80, 150) * Math.cos(2 * Math.PI * i / this.rand(particles - 10, particles + 10)),
        y = (explosion.height() / 2) + this.rand(80, 150) * Math.sin(2 * Math.PI * i / this.rand(particles - 10, particles + 10)),
        color = this.rand(0, 255) + ', ' + this.rand(0, 255) + ', ' + this.rand(0, 255), // randomize the color rgb
          // particle element creation (could be anything other than div)
        elm = $('<div class="particle" style="' +
          'background-color: rgb(' + color + ') ;' +
          'top: ' + y + 'px; ' +
          'left: ' + x + 'px"></div>');

      if (i == 0) { // no need to add the listener on all generated elements
        // css3 animation end detection
        elm.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
          //explosion.remove(); // remove this explosion container when animation ended
        });
      }
      explosion.append(elm);
    }
  }

  // get random number between min and max value
  rand(min, max) {
    return Math.floor(Math.random() * (max + 1)) + min;
  }

  upvote(e) {
    e.preventDefault();

    const post = this.props.post;
    const user = this.context.currentUser;

    if(!user){
      this.context.messages.flash("Please log in first");
      // RESTYLE FLASH MESSAGES
    } else if (user.hasUpvoted(post)) {
      this.context.actions.call('posts.cancelUpvote', post._id, () => {
        this.context.events.track("post upvote cancelled", {'_id': post._id});
      });        
    } else {
      this.heartExplosion( e.pageX, e.pageY );
      this.context.actions.call('posts.upvote', post._id, () => {
        this.context.events.track("post upvoted", {'_id': post._id});
      });
    }

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
        </a>
        <div className="sr-only">Upvote</div>
        <div className="vote-count">{post.baseScore || 0}</div>
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
