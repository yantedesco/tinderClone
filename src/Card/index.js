import React, { useCallback } from "react";
import { Image, Text, View, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Choice } from "../Choice";
import { ACTION_OFFSET } from "../utils/constants";
import { styles } from "./styles";

import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
export const Card = ({
	name,
	source,
	age,
	online,
	distance,
	college,
	city,
	isFirst,
	swipe,
	tiltSign,
	...rest
}) => {
	const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
		inputRange: [-ACTION_OFFSET, 0, ACTION_OFFSET],
		outputRange: ["8deg", "0deg", "-8deg"],
	});

	const likeOpacity = swipe.x.interpolate({
		inputRange: [40, ACTION_OFFSET],
		outputRange: [0, 1],
		extrapolate: "clamp",
	});

	const nopeOpacity = swipe.x.interpolate({
		inputRange: [-ACTION_OFFSET, -40],
		outputRange: [1, 0],
		extrapolate: "clamp",
	});

	const superOpacity = swipe.y.interpolate({
		inputRange: [-ACTION_OFFSET, -30],
		outputRange: [1, 0],
		extrapolate: "clamp",
	});

	const animatedCardStyle = {
		transform: [...swipe.getTranslateTransform(), { rotate }],
	};

	const renderChoice = useCallback(() => {
		return (
			<>
				<Animated.View
					style={[
						styles.choiceContainer,
						styles.likeContainer,
						{ opacity: likeOpacity },
					]}
				>
					<Choice type="like" />
				</Animated.View>
				<Animated.View
					style={[
						styles.choiceContainer,
						styles.nopeContainer,
						{ opacity: nopeOpacity },
					]}
				>
					<Choice type="nope" />
				</Animated.View>
				<Animated.View
					style={[
						styles.choiceContainer,
						styles.superContainer,
						{ opacity: superOpacity },
					]}
				>
					<Choice type="super" />
				</Animated.View>
			</>
		);
	}, [likeOpacity, nopeOpacity, superOpacity]);

	return (
		<Animated.View
			style={[styles.container, isFirst && animatedCardStyle]}
			{...rest}
		>
			<Image source={source} style={styles.image} />
			<LinearGradient
				colors={[
					"transparent",
					"rgba(0,0,0,0.8)",
					"rgba(0,0,0,0.9)",
					"rgba(0,0,0,1)",
				]}
				style={styles.gradient}
			/>
			<View style={styles.descriptionContainer}>
				<View style={styles.nameContainer}>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.age}>{age}</Text>
				</View>
				{online ? (
					<View style={styles.onlineContainer}>
						<Octicons
							name="primitive-dot"
							size={23}
							color="#2ade2a"
						/>

						<Text style={styles.online}>Online recentemente</Text>
					</View>
				) : null}

				{college ? (
					<Text style={styles.college}>
						<Ionicons
							name="school-outline"
							size={16}
							color="white"
						/>
						{`   ${college}`}
					</Text>
				) : null}

				{city ? (
					<Text style={styles.city}>
						<Ionicons name="home-outline" size={15} color="white" />
						{`   Mora em/no ${city}`}
					</Text>
				) : null}

				<Text style={styles.distance}>
					<Ionicons name="location-outline" size={17} color="white" />
					{`   ${distance} km de distância`}
				</Text>
			</View>

			{isFirst && renderChoice()}
		</Animated.View>
	);
};
