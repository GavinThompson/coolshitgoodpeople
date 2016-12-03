/*
This file centralizes all our custom component overrides. 
*/

import Telescope from 'meteor/nova:lib';

import CustomLogo from "./components/CustomLogo.jsx";
import CustomNewsletter from "./components/CustomNewsletter.jsx";
import CustomPostsItem from "./components/CustomPostsItem.jsx";

// Added
import CustomFooter from "./components/CustomFooter.jsx";
import CustomHeader from "./components/CustomHeader.jsx";
import CustomLayout from "./components/CustomLayout.jsx";


Telescope.components.Logo = CustomLogo;
Telescope.components.Newsletter = CustomNewsletter;
Telescope.components.PostsItem = CustomPostsItem;
Telescope.components.Footer = CustomFooter;

Telescope.components.Header = CustomHeader;
Telescope.components.Layout = CustomLayout;

