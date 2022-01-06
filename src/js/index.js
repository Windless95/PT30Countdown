//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { SecondsCounter } from "./component/SecondsCounter.jsx";

const startTime = Date.now();

//render your react application
setInterval(() => {
	let timediff = Date.now() - startTime;
	let increase = Math.floor(timediff / 1000);
	ReactDOM.render(
		<SecondsCounter seconds={increase} />,
		document.querySelector("#app")
	);
}, 1000);
