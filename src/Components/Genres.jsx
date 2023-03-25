import React from "react";
import { genres } from "../Services/fakeGenreService";

const Genres = ({ onItemSelect }) => {
	return (
		<ul className="list-group" style={{ cursor: "pointer" }}>
			<li className="list-group-item active">All Genres</li>
			{genres.map((g, index) => {
				return (
					<li
						className={
							"list-group-item "
						}
						style={{ cursor: "pointer" }}
						key={index}
						onClick={() => onItemSelect(g)}
					>
						{g.name}
					</li>
				);
			})}
		</ul>
	);
};

export default Genres;
