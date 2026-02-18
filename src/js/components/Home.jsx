import React from "react";
import TrafficLight from "./TrafficLight";

// Styles
const container = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
}

const containerTop = {
	display: "block",
	width: "20px",
	height: "150px",
	backgroundColor: "black",
}

const containerBottom = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "10px",
	padding: "20px",
	borderRadius: "10px",
	backgroundColor: "black",
}

//create your first component
const Home = () => {
	return (
		<div style={container}>
			<div style={containerTop}></div>
			<div style={containerBottom}>
				<TrafficLight />
			</div>
		</div>
	);
};

export default Home;