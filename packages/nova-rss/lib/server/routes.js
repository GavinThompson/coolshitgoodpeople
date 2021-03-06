import { servePostRSS, serveCommentRSS, serveRandomPostRSS } from './rss.js';

Picker.route('/feed.xml', function(params, req, res, next) {
  if (typeof params.query.view === "undefined") {
    params.query.view = 'rss';
  }
  res.end(servePostRSS(params.query, 'feed.xml'));
});

Picker.route('/rss/posts/new.xml', function(params, req, res, next) {
  res.end(servePostRSS({view: 'new'}, '/rss/posts/new.xml'));
});

Picker.route('/rss/posts/top.xml', function(params, req, res, next) {
  res.end(servePostRSS({view: 'top'}, '/rss/posts/top.xml'));
});

Picker.route('/rss/posts/best.xml', function(params, req, res, next) {
  res.end(servePostRSS({view: 'best'}, '/rss/posts/best.xml'));
});

Picker.route('/rss/category/:slug/feed.xml', function(params, req, res, next) {
  res.end(servePostRSS({view: 'new', cat: params.slug}, '/rss/category/:slug/feed.xml'));
});

Picker.route('/rss/comments.xml', function(params, req, res, next) {
  res.end(serveCommentRSS({}, '/rss/comments.xml'));
});

// ADDED CUSTOM FOR COOL SHIT GOOD PEOPLE

Picker.route('/rss/posts/clicks.xml', function(params, req, res, next) {
  res.end(servePostRSS({view: 'clicks'}, '/rss/posts/clicks.xml'));
});

Picker.route('/rss/posts/newsletter.xml', function(params, req, res, next) {
  res.end(servePostRSS({view: 'newsletter'}, '/rss/posts/newsletter.xml'));
});

Picker.route('/rss/posts/random.xml', function(params, req, res, next) {
  res.end(serveRandomPostRSS({view: 'random'}, '/rss/posts/random.xml'));
});