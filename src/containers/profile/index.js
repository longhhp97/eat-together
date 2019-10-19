import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export default class index extends Component {
	state = {};
	render() {
		return (
			<View style={styles.container}>
				<Text>This is profile</Text>
			</View>
		);
	}
}
