/*
This file centralizes all our custom component overrides. 
*/

import Telescope from 'meteor/nova:lib';

import CustomLogo from "./components/CustomLogo.jsx";
import CustomNewsletter from "./components/CustomNewsletter.jsx";
import CustomPostsItem from "./components/CustomPostsItem.jsx";

// Added
import CustomLayout from "./components/CustomLayout.jsx";

import CustomHeader from "./components/CustomHeader.jsx";
import CustomSearchForm from "./components/CustomSearchForm.jsx";

import CustomFooter from "./components/CustomFooter.jsx";


Telescope.components.Logo = CustomLogo;
Telescope.components.Newsletter = CustomNewsletter;
Telescope.components.PostsItem = CustomPostsItem;

Telescope.components.Layout = CustomLayout;

Telescope.components.Header = CustomHeader;
Telescope.components.SearchForm = CustomSearchForm;


Telescope.components.Footer = CustomFooter;


