const { Dimensions } = require("react-native");

const { width, height } = Dimensions.get("screen");

export const CARD = {
	WIDTH: width * 0.97,
	HEIGHT: height * 0.795,
	BORDER_RADIUS: 10,
	OUT_OF_SCREEN: width + 0.5 * width,
};

export const COLORS = {
	like: "#00eda6",
	nope: "#ff006f",
	super: "#37C8F7",
};

export const ACTION_OFFSET = 100;
