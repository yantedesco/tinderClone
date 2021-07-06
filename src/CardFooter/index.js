import React from "react";
import { View } from "react-native";
import { RoundButton } from "../RoundButton";
import { COLORS } from "../utils/constants";
import { styles } from "./styles";

export const CardFooter = ({ handleNormalChoice, handleSuperChoice }) => {
	return (
		<View style={styles.container}>
			<RoundButton
				name="undo"
				size={25}
				color="#FAD265"
				hxw={45}
				onPress={() => null}
			/>
			<RoundButton
				name="times"
				size={40}
				color={COLORS.nope}
				hxw={68}
				onPress={() => handleNormalChoice(-1)}
			/>
			<RoundButton
				name="star"
				size={25}
				color={COLORS.super}
				hxw={45}
				onPress={() => handleSuperChoice(-1)}
			/>
			<RoundButton
				name="heart"
				size={34}
				color={COLORS.like}
				hxw={68}
				onPress={() => handleNormalChoice(1)}
			/>
			<RoundButton
				name="bolt"
				size={25}
				color="#AE41ED"
				hxw={45}
				onPress={() => null}
			/>
		</View>
	);
};
