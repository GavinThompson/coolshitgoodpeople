import Telescope from 'meteor/nova:lib';
import React from 'react';
import { ListContainer } from "meteor/utilities:react-list-container";
import Categories from "meteor/nova:categories";


// FUTURE TASK: probably put category buttons here below buffer

const PostsListHeader = () => {

  return (
    <div>
      <div className="header-buffer"></div>
    </div>
  )
}

PostsListHeader.displayName = "PostsListHeader";

module.exports = PostsListHeader;
export default PostsListHeader;
