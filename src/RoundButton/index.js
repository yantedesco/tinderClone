import React, { useRef, useCallback } from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";

export const RoundButton = ({ name, size, color, hxw, onPress }) => {
	const scale = useRef(new Animated.Value(1)).current;

	const animateScale = useCallback(
		(newValue) => {
			Animated.spring(scale, {
				toValue: newValue,
				friction: 4,
				useNativeDriver: true,
			}).start();
		},
		[scale]
	);

	return (
		<TouchableWithoutFeedback
			onPressIn={() => {
				animateScale(0.8);
			}}
			delayPressIn={0}
			onPressOut={() => {
				{
					animateScale(1);
					onPress();
				}
			}}
			delayPressOut={110}
		>
			<Animated.View
				style={[
					styles.container,
					{
						borderColor: color,
						height: hxw,
						width: hxw,
						transform: [{ scale }],
					},
				]}
			>
				<FontAwesome name={name} size={size} color={color} />
			</Animated.View>
		</TouchableWithoutFeedback>
	);
};
