import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {

	return (
		<div>
			<Link to="/about">
				<h1>My Name is Cyril</h1>
			</Link>
			<p>I'm a Web Developer</p>
			<Link to="/projects">
				<p>Projects</p>
			</Link>
			<Link to="/skills">
				<p>Skills</p>
			</Link>
			<Link to="/contact">
				<p>Contact</p>
			</Link>
		</div>
	);
};

export default Welcome;
