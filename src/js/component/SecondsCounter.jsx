import React from "react";
import PropTypes from "prop-types";

export const SecondsCounter = (props) => {
	return (
		<div className="pretty">
			{props.seconds
				.toString()
				.padStart(6, "0")
				.split("")
				.map((number, i) => {
					return (
						<div className="digit" key={i}>
							{number}
						</div>
					);
				})}
		</div>
	);
};

SecondsCounter.propTypes = {
	seconds: PropTypes.number,
};
