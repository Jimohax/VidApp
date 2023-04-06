import React from "react";
import Like from "./common/Like";
import Table from "./common/Table";

const MoviesTable = ({ newMovies, onSort, onLike, onDelete, sortColumn }) => {	
	// const handleLike2 = () =>{
	// 	console.log("hey boss");
	// }

	let columns = [
		{ path: "title", label: "Title" },
		{ path: "genre.name", label: "Genre" },
		{ path: "numberInStock", label: "Stock" },
		{ path: "dailyRentalRate", label: "Rate" },
		{
			key: "like",
			content: (newMovie) => (
				<Like
					liked={newMovie.liked}
					onClick={() => onLike(newMovie)}
				/>
			),
		},
		{
			key: "delete",
			content: (newMovie) => (
				<button
					onClick={() => onDelete(newMovie)}
					className="btn btn-danger btn-sm"
				>
					Delete
				</button>
			),
		},
	];

	return (
		<Table
			data={newMovies}
			onSort={onSort}
			sortColumn={sortColumn}
			columns={columns}
		/>
	);
};

export default MoviesTable;
