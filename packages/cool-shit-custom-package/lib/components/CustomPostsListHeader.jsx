import Telescope from 'meteor/nova:lib';
import React from 'react';
import { ListContainer } from "meteor/utilities:react-list-container";
import Categories from "meteor/nova:categories";

const PostsListHeader = () => {

  return (
    <div>
      <div className="header-buffer"></div>
      <div><p className="demo-text">Unsure what to put here yet</p></div>
    </div>
  )
}

PostsListHeader.displayName = "PostsListHeader";

module.exports = PostsListHeader;
export default PostsListHeader;
