import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	imageContainer: {
		top: 200,
		alignItems: "center",
	},
	image: {
		height: 28,
		width: 120,
	},
	loginContainer: {
		flex: 1,
		flexDirection: "column",
		bottom: 10,
		position: "absolute",
		marginHorizontal: 15,
		alignItems: "center",
		justifyContent: "center",
	},
	termosText: {
		fontSize: 12,
		color: "#fff",
		textAlign: "center",
		marginBottom: 10,
		letterSpacing: 0.1,
	},
	textUnderlineBold: {
		fontWeight: "bold",
		textDecorationLine: "underline",
	},
	button: {
		borderRadius: 40,
		backgroundColor: "#fff",
		width: "100%",
		height: 42,
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
		marginBottom: 10,
		elevation: 0,
	},
	buttonContainer: {
		width: "100%",
	},
	textIcon: {
		marginRight: 80,
		marginLeft: 15,
	},
	buttonText: {
		textTransform: "uppercase",
		fontWeight: "bold",
		fontSize: 12.2,
		color: "#808080",
		letterSpacing: 0.1,
	},
	problemasText: {
		color: "#fff",
		fontSize: 12,
		fontWeight: "bold",
		marginVertical: 15,
		letterSpacing: 0.5,
	},
});
