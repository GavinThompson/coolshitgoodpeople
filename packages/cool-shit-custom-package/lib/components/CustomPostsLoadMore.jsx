import React from 'react';
import { FormattedMessage } from 'react-intl';

const CustomPostsLoadMore = ({loadMore, count, totalCount}) => {
  return (
    <button className="posts-load-more mdl-shadow--4dp mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={loadMore}>
      <span><FormattedMessage id="posts.load_more"/></span>
      &nbsp;
      {totalCount ? <span className="load-more-count">{`(${count}/${totalCount})`}</span> : null}
    </button>
  )
}

CustomPostsLoadMore.displayName = "PostsLoadMore";

module.exports = CustomPostsLoadMore;