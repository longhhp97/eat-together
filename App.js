import React, { Component } from "react";
import AppNav from "./src/navigation";
import navigator from "./src/navigation/navigator";
import { Provider } from "react-redux";
import store from "./src/store";

export default class App extends Component {
	render() {
		return (
			// <Provider store={store}>
				<AppNav ref={ref => navigator.setNavigator(ref)} />
			// </Provider>
		);
	}
}
