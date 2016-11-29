/*
This file centralizes all our custom component overrides. 
*/

import Telescope from 'meteor/nova:lib';

import CustomLogo from "./components/CustomLogo.jsx";
import CustomNewsletter from "./components/CustomNewsletter.jsx";
import CustomPostsItem from "./components/CustomPostsItem.jsx";

// Added
import CustomFooter from "./components/CustomFooter.jsx";

Telescope.components.Logo = CustomLogo;
Telescope.components.Newsletter = CustomNewsletter;
Telescope.components.PostsItem = CustomPostsItem;
Telescope.components.Footer = CustomFooter;
