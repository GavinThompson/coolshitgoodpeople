/*
A new custom route for our custom page. 
Browse to http://localhost:3000/my-custom-route to see it.
*/

import Telescope from 'meteor/nova:lib';

Telescope.routes.add({name:"posts.random", path:"/random", component:Telescope.components.PostsRandom});
