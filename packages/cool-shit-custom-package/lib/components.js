/*
This file centralizes all our custom component overrides. 
*/

import CustomLoading from "./components/CustomLoading.jsx";
import CustomLoadingOverlay from "./components/CustomLoadingOverlay.jsx";
import CustomAppLoading from "./components/CustomAppLoading.jsx";

import Telescope from 'meteor/nova:lib';

import CustomLayout from "./components/CustomLayout.jsx";
import CustomHeader from "./components/CustomHeader.jsx";
import CustomLogo from "./components/CustomLogo.jsx";
import CustomNewsletter from "./components/CustomNewsletter.jsx";
import CustomSearchForm from "./components/CustomSearchForm.jsx";

import CustomPostsItem from "./components/CustomPostsItem.jsx";

import CustomFooter from "./components/CustomFooter.jsx";






Telescope.components.Loading = CustomLoading;
Telescope.components.LoadingOverlay = CustomLoadingOverlay;
Telescope.components.AppLoading = CustomAppLoading;

Telescope.components.Layout = CustomLayout;


Telescope.components.Header = CustomHeader;
Telescope.components.Logo = CustomLogo;
Telescope.components.Newsletter = CustomNewsletter;
Telescope.components.SearchForm = CustomSearchForm;

Telescope.components.PostsItem = CustomPostsItem;

Telescope.components.Footer = CustomFooter;


