import React from "react";
import { prototype } from "html-webpack-plugin";
import PropTypes from "prop-types";

export const Boilerplate = props => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.subtitle}</p>
			<hr className="my-4" />
			<p>{props.description}</p>
			<p className="lead">
				<a
					className="btn btn-primary btn-lg"
					href={props.link}
					role="button">
					{props.label}
				</a>
			</p>
		</div>
	);
};
Boilerplate.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	description: PropTypes.string,
	label: PropTypes.string,
	link: PropTypes.string
};
