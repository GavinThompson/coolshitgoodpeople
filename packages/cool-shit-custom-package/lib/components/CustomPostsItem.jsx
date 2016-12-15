import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import { ModalTrigger } from "meteor/nova:core";
import { Link } from 'react-router';
import Posts from "meteor/nova:posts";
import Categories from "meteor/nova:categories";

class CustomPostsItem extends Telescope.components.PostsItem {


  render() {

    const post = this.props.post;

    const postImage = Posts.getThumbnailUrl(post)
    const inlineBubbleStyle = {
      backgroundColor: "rgb(0,188,212)", //mdl cyan
      backgroundImage: "url("+postImage+")"
    }

    let postClass = "post-item"; 
    if (post.sticky) postClass += " posts-sticky";

    // ⭐ custom code starts here ⭐
    if (post.color) {
      postClass += " post-"+post.color;
    }
    // ⭐ custom code ends here ⭐

    return (
      <li className={postClass}>

        <div className="post-wrap -has-border -event-list -is-link">
          <div className="post-header">
            <Link to={Posts.getLink(post)} target={Posts.getLinkTarget(post)}>
              <div className="_bubble mdl-shadow--4dp " style={inlineBubbleStyle}>
              </div>
            </Link>
          </div>
  

          <div className="post-detail">
            <div className="_title-block">
            
              <h3 className="_title">
                <Link to={Posts.getLink(post)} target={Posts.getLinkTarget(post)}>
                  {post.title}
                  <span className="_arrow">
                    <svg className="svg-icon tile-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path opacity="1" d="M9 4L7.6 5.4l6.6 6.6-6.6 6.6L9 20l8-8"></path>
                    </svg>
                  </span>
                </Link>
              </h3>
            </div>
            
            <p className="_meta">
              {post.user? <Telescope.components.UsersName user={post.user}/> : null}
              <span className="_date">
                <FormattedRelative value={post.postedAt}/>
              </span>
            </p>
            <p className="_summary">
              <Link to={Posts.getPageUrl(post)}>
                <FormattedMessage id="comments.count" values={{count: post.commentCount}}/>
              </Link>
            </p>
            {this.context.currentUser && this.context.currentUser.isAdmin ? <Telescope.components.PostsStats post={post} /> : null}

          </div> 
        </div>     
      </li>
    )
  }
};
  
CustomPostsItem.propTypes = {
  post: React.PropTypes.object.isRequired
}

CustomPostsItem.contextTypes = {
  currentUser: React.PropTypes.object
};

export default CustomPostsItem;

// <span class="_arrow">
//   <svg class="svg-icon tile-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//     <path class="_fill-color" opacity="1" fill="#000000" d="M9 4L7.6 5.4l6.6 6.6-6.6 6.6L9 20l8-8"></path>
//   </svg>
// </span>

// <span class="_arrow">
//   <svg class="svg-icon svg-external-link" width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
//     <path class="_fill-color" d="M14 14.04H2V2.005h4V0H2C.83 0 0 .833 0 2.006V14.04c0 1.17.83 2.005 2 2.005h12c1.168 0 2-.835 2-2.006v-4.02h-2v4.01zM9 2.005h3.51l-7.998 8.022L6 11.52l8-8.023V7.02h2V0H9v2.006z" fill="#000000" fill-rule="evenodd" opacity="1"></path>
//   </svg>
// </span>

  

// <li class="list-item">
//   <a class="list-wrap -has-border -event-list -is-link" href="/span-2016-la/" aria-labelledby="label-item-list-item-span-2016-la" aria-describedby="description-item-list-item-span-2016-la">
//     <div class="list-header">
//       <div class="_bubble" style="background-color: #7b63f1; background-image: url(https://g-design.storage.googleapis.com/production/v6/assets/span-la-thumb.svg)">
//       </div>
//     </div>
//     <div class="list-detail">
//       <div class="_title-block">
//         <h3 id="label-span-2016-la" class="_title">
//           SPAN 2016: Los Angeles
//           <span class="_arrow">
//             <svg class="svg-icon tile-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//               <path class="_fill-color" opacity="1" fill="#000000" d="M9 4L7.6 5.4l6.6 6.6-6.6 6.6L9 20l8-8"></path>
//             </svg>
//           </span>
//         </h3>
//       </div>
//       <p class="_meta">
//         <span class="_date">October 27, 2016</span><span class="_location">Los Angeles</span>
//       </p>
//       <p id="description-item-list-item-span-2016-la" class="_summary">
//         Conversations on everything from Processing and robotics to production design, with Casey Reas, Peter Shire, Jessie Kawata, Shannon Ebner, and many more. Workshops on type design, design writing, and making by hand and eye.
//       </p>
//     </div>
//   </a>
// </li>
