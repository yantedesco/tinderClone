import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";

export const Footer = () => {
	return (
		<>
			<View style={styles.container}>
				<Image
					style={styles.tinyLogo}
					source={require("../../assets/tinder-logo.png")}
				/>
				<MaterialCommunityIcons
					name="star-four-points"
					size={24}
					color="#A9A9A9"
				/>
				<Ionicons name="chatbubbles-sharp" size={24} color="#A9A9A9" />
				<FontAwesome name="user" size={24} color="#A9A9A9" />
			</View>
		</>
	);
};
