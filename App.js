import { StatusBar } from "expo-status-bar";
import React from "react";
import { Home } from "./src/Home";
import { Login } from "./src/Login";

export default function App() {
	return (
		<>
			<StatusBar style="light" backgroundColor="#000" />
			<Home />
			{/* <Login /> */}
		</>
	);
}
