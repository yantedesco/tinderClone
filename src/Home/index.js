import React, { useState, useRef, useCallback, useEffect } from "react";
import { PanResponder, View, Animated } from "react-native";

import { Card } from "../Card";
import { CardFooter } from "../CardFooter";
import { ACTION_OFFSET, CARD } from "../utils/constants";
import { girls as girlsArray } from "./data";
import { styles } from "./styles";
import { Footer } from "../Footer";

export const Home = () => {
	const [girls, setGirls] = useState(girlsArray);
	const swipe = useRef(new Animated.ValueXY()).current;
	const tiltSign = useRef(new Animated.Value(1)).current;

	useEffect(() => {
		if (!girls.length) {
			setGirls(girlsArray);
		}
	}, [girls.length]);

	const panResponder = PanResponder.create({
		onMoveShouldSetPanResponder: () => true,
		onPanResponderMove: (_, { dx, dy, y0 }) => {
			swipe.setValue({ x: dx, y: dy });
			tiltSign.setValue(y0 > CARD.HEIGHT / 2 ? 1 : -1);
		},
		onPanResponderRelease: (_, { dx, dy }) => {
			const directionX = Math.sign(dx);
			const directionY = Math.sign(dy);
			const isActionActiveX = Math.abs(dx) > ACTION_OFFSET;
			const isActionActiveY = dy < ACTION_OFFSET;

			if (isActionActiveX) {
				Animated.timing(swipe, {
					duration: 200,
					toValue: {
						x: directionX * CARD.OUT_OF_SCREEN,
						y: dy,
					},
					useNativeDriver: true,
				}).start(removeTopCard);
			} else if (isActionActiveY) {
				Animated.timing(swipe, {
					duration: 200,
					toValue: {
						x: dx,
						y: directionY * CARD.OUT_OF_SCREEN,
					},
					useNativeDriver: true,
				}).start(removeTopCard);
			} else {
				Animated.spring(swipe, {
					toValue: {
						x: 0,
						y: 0,
					},
					useNativeDriver: true,
					friction: 5,
				}).start();
			}
		},
	});

	const removeTopCard = useCallback(() => {
		setGirls((prevState) => prevState.slice(1));
		swipe.setValue({ x: 0, y: 0 });
	}, [swipe]);

	const handleNormalChoice = useCallback(
		(direction) => {
			Animated.timing(swipe.x, {
				toValue: direction * CARD.OUT_OF_SCREEN,
				duration: 400,
				useNativeDriver: true,
			}).start(removeTopCard);
		},
		[removeTopCard, swipe.x]
	);

	const handleSuperChoice = useCallback(
		(direction) => {
			Animated.timing(swipe.y, {
				toValue: direction * CARD.OUT_OF_SCREEN,
				duration: 400,
				useNativeDriver: true,
			}).start(removeTopCard);
		},
		[removeTopCard, swipe.y]
	);

	return (
		<>
			<View style={styles.container}>
				{girls
					.map(
						(
							{
								name,
								source,
								age,
								online,
								distance,
								college,
								city,
							},
							index
						) => {
							const isFirst = index === 0;
							const dragHandlers = isFirst
								? panResponder.panHandlers
								: {};

							return (
								<Card
									key={name}
									source={source}
									name={name}
									age={age}
									online={online}
									college={college}
									distance={distance}
									city={city}
									isFirst={isFirst}
									swipe={swipe}
									tiltSign={tiltSign}
									{...dragHandlers}
								/>
							);
						}
					)
					.reverse()}

				<CardFooter
					handleNormalChoice={handleNormalChoice}
					handleSuperChoice={handleSuperChoice}
				/>
				<Footer />
			</View>
		</>
	);
};
