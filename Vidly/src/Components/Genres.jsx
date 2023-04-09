import React, { useState } from "react";
// import { genres } from "../Services/fakeGenreService";
import { getGenres  } from "../Services/fakeGenreService";



const Genres = ({ onItemSelect, selectedItem}) => {

	const newGenre = [{name: "All Genres"}, ...getGenres()]
	const [genre, setGenre] = useState(newGenre);
	           

// setGenre([{name: "All Genres"}, ...getGenres()]);
// setGenre(getGenres())
// console.log(newGenre);
// console.log(getGenres());

	return (
		<ul className="list-group" style={{ cursor: "pointer" }}>
			
			{genre.map((g, index) => {
				return (
					<li
						className={
							g.name === selectedItem.name? "list-group-item active": "list-group-item"
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
