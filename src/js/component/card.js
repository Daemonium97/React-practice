import React from "react";
import PropTypes from "prop-types";

export const MyCard = props => {
	return (
		<div className="card-deck">
			<div className="card">
				<div className="card-body">
					<h4 className="card-title">{props.cardTitle}</h4>
					<p className="card-text">{props.description}</p>
				</div>
			</div>
			<div className="card">
				<div className="card-body">
					<h4 className="card-title">{props.cardTitle}</h4>
					<p className="card-text">{props.description}</p>
				</div>
			</div>
			<div className="card">
				<div className="card-body">
					<h4 className="card-title">{props.cardTitle}</h4>
					<p className="card-text">{props.description}</p>
				</div>
			</div>
		</div>
	);
};

MyCard.propTypes = {
	cardTitle: PropTypes.string,
	description: PropTypes.string,
	cardTitle2: PropTypes.string,
	description2: PropTypes.string,
	cardTitle3: PropTypes.string,
	description3: PropTypes.string
};
