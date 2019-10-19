import {
	createAppContainer,
	createSwitchNavigator,
	createStackNavigator,
	createMaterialTopTabNavigator
} from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import React from "react";
import Containers from "../containers";
import { Router } from "./route";
import { Color, Font } from "../common";

const {
	Splash,
	Intro,
	Forgot,
	Login,
  Profile,
  Home,
	Register,
} = Containers;

const Auth = createStackNavigator(
	{
		[Router.Intro]: Intro,
		[Router.Login]: Login,
		[Router.Register]: Register,
		[Router.Forgot]: Forgot
	},
	{
		navigationOptions: {
			header: null
		},
		defaultNavigationOptions: {
			header: null
		}
	}
);

const Nav = createMaterialBottomTabNavigator(
	{
		[Router.Home]: Home,
		[Router.Profile]: Profile
	},
	{
		initialRouteName: Router.Home,
		navigationOptions: {
			header: null
		},
		activeColor: '#999',
		inactiveColor: "#ccc",
		barStyle: {
			backgroundColor: '#fff'
		}
	}
);

const Main = createStackNavigator(
	{
		[Router.Nav]: Nav
	},
	{
		navigationOptions: {
			header: null
		}
	}
);

const Switch = createSwitchNavigator(
	{
		[Router.Splash]: Splash,
		[Router.Auth]: Auth,
		[Router.Main]: Main
	},
	{
		initialRouteName: Router.Main
	}
);

const AppNav = createAppContainer(Switch);

export default AppNav;
