import { StyleSheet } from "react-native";
import { CARD } from "../utils/constants";
import { StatusBar } from "expo-status-bar";

export const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: 67,
	},
	image: {
		width: CARD.WIDTH,
		height: CARD.HEIGHT,
		borderRadius: CARD.BORDER_RADIUS,
	},
	gradient: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		height: 250,
		borderRadius: CARD.BORDER_RADIUS,
	},
	descriptionContainer: {
		flex: 1,
		flexDirection: "column",
		position: "absolute",
		bottom: 100,
		left: 17,
		alignItems: "flex-start",
	},
	nameContainer: {
		flex: 1,
		flexDirection: "row",
		left: 1,
		alignItems: "center",
	},
	name: {
		fontSize: 35,
		fontWeight: "bold",
		color: "#fff",
		paddingRight: "3.5%",
		letterSpacing: 0.5,
		textShadowColor: "rgba(0, 0, 0, 0.5)",
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 10,
	},
	age: {
		fontSize: 25,
		color: "#fff",
		paddingTop: 6.5,
	},
	onlineContainer: {
		flex: 1,
		flexDirection: "row",
		marginLeft: 4,
		alignItems: "center",
	},
	online: {
		marginLeft: 13.5,
		fontSize: 15,
		color: "#fff",
		letterSpacing: 0.5,
	},
	college: {
		fontSize: 15,
		marginLeft: 1.5,
		color: "#fff",
		letterSpacing: 0.5,
		paddingTop: 5,
	},
	city: {
		fontSize: 15,
		marginLeft: 1.5,
		color: "#fff",
		paddingTop: 5,
		letterSpacing: 0.5,
	},
	distance: {
		fontSize: 15,
		color: "#fff",
		paddingTop: 5,
		letterSpacing: 0.5,
	},
	choiceContainer: {
		position: "absolute",
		top: 100,
	},
	likeContainer: {
		left: 45,
		transform: [{ rotate: "-30deg" }],
	},
	nopeContainer: {
		right: 45,
		transform: [{ rotate: "30deg" }],
	},
	superContainer: {
		top: 350,
		alignSelf: "center",
		transform: [{ rotate: "-30deg" }],
	},
});
