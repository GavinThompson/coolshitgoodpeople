/*
This file centralizes all our custom component overrides. 
*/

import CustomLoadingOverlay from "./components/CustomLoadingOverlay.jsx";
import CustomAppLoading from "./components/CustomAppLoading.jsx";

import Telescope from 'meteor/nova:lib';

import CustomLayout from "./components/CustomLayout.jsx";
import CustomHeader from "./components/CustomHeader.jsx";
import CustomLogo from "./components/CustomLogo.jsx";
import CustomAccountMenuItem from "./components/CustomAccountMenuItem.jsx";
import CustomPostsNewButton from "./components/CustomPostsNewButton.jsx";
import CustomSearchForm from "./components/CustomSearchForm.jsx";
import CustomSidebarPostsViews from "./components/CustomSidebarPostsViews.jsx";

import CustomPostsListHeader from "./components/CustomPostsListHeader.jsx";

import CustomPostsList from "./components/CustomPostsList.jsx";
import CustomPostsItem from "./components/CustomPostsItem.jsx";
import CustomVote from "./components/CustomVote.jsx";
import CustomPostsLoadMore from "./components/CustomPostsLoadMore.jsx";

import CustomFooter from "./components/CustomFooter.jsx";

import CustomPostsRandom from "./components/CustomPostsRandom.jsx";
import CustomUsersAccountForm from "./components/CustomUsersAccountForm.jsx";



Telescope.components.LoadingOverlay = CustomLoadingOverlay;
Telescope.components.AppLoading = CustomAppLoading;
Telescope.components.Layout = CustomLayout;


Telescope.components.Header = CustomHeader;
Telescope.components.Logo = CustomLogo;
Telescope.components.AccountMenuItem = CustomAccountMenuItem;
Telescope.components.PostsNewButton = CustomPostsNewButton;
Telescope.components.SidebarPostsViews = CustomSidebarPostsViews;
Telescope.components.SearchForm = CustomSearchForm;


Telescope.components.PostsListHeader = CustomPostsListHeader;


Telescope.components.PostsList = CustomPostsList;
Telescope.components.PostsItem = CustomPostsItem;
Telescope.components.Vote = CustomVote;
Telescope.components.PostsLoadMore = CustomPostsLoadMore;


Telescope.components.Footer = CustomFooter;

Telescope.components.PostsRandom = CustomPostsRandom;
