import React from "react";
import Like from "./common/Like";
import TableBody from "./common/TableBody";
import TableHeader from "./common/TableHeader";

const MoviesTable = (props) => {
	const { newMovies, onSort, sortColumn } = props;
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
				<Like liked={newMovie.liked} onClick={()=> props.onLike(newMovie)} />
			),
		},
		{
			key: "delete", 
			content: (newMovie) => (
				<button
					onClick={() => props.onDelete(newMovie)}
					className="btn btn-danger btn-sm"
				>
					Delete
				</button>
			),
		},
	];

	return (
		<table className="table">
			<TableHeader
				columns={columns}
				onSort={onSort}
				sortColumn={sortColumn}
			/>
			<TableBody data={newMovies} columns={columns} />
		</table>
	);
};

export default MoviesTable;
