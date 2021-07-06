import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { styles } from "./styles";

export const Login = () => {
	return (
		<LinearGradient
			colors={["#FD287C", "#FF7655"]}
			style={{ flex: 1 }}
			start={{ x: 0, y: 1 }}
			end={{ x: 1, y: 0 }}
		>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require("../../assets/tinder_logo_white.png")}
				/>
			</View>
			<View style={styles.loginContainer}>
				<Text style={styles.termosText}>
					Ao tocar em entrar, você concorda com os nossos{" "}
					<Text style={styles.textUnderlineBold}>Termos</Text>. Saiba
					como processamos seus dados em nossa{" "}
					<Text style={styles.textUnderlineBold}>
						Política de Privacidade
					</Text>{" "}
					e{" "}
					<Text style={styles.textUnderlineBold}>
						Política de Cookies
					</Text>
					.
				</Text>

				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.button}>
						<View>
							<Image
								style={{
									height: 18,
									width: 18,
									marginRight: 80,
									marginLeft: 15,
								}}
								source={require("../../assets/imagem-google-logo-com-fundo-transparente-1.png")}
								name="google"
							/>
						</View>

						<Text style={styles.buttonText}>
							Entrar com o google
						</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.button}>
						<View>
							<FontAwesome5
								style={styles.textIcon}
								name="facebook"
								size={18}
								color="#4267B2"
							/>
						</View>
						<Text style={styles.buttonText}>
							Entrar com Facebook
						</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.button}>
						<View>
							<Ionicons
								style={[styles.textIcon, { marginRight: 40 }]}
								name="chatbubble-sharp"
								size={18}
								color="#595959"
							/>
						</View>
						<Text style={styles.buttonText}>
							Entrar com número de telefone
						</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.problemasText}>
					Problemas para fazer o login?
				</Text>
			</View>
		</LinearGradient>
	);
};
