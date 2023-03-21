import React, { useState } from "react";
import { getMovies } from "../Services/fakeMovieService";
import Like from "./common/Like";

const Movies = () => {
	// let mov =  getMovies();
	const [movies, setMovies] = useState(getMovies());


	const handleDelete = (movie) => {
		const newMovies = movies.filter((m) => m._id !== movie._id);

		setMovies(newMovies);
		//    console.log(newMovies.length);
		// return movies;
	};

    

	return (
		<div className="row">
			<h4>
				{movies.length < 1
					? "There are no movies in the database"
					: "Showing " + movies.length + " movies in the database"}
			</h4>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Title</th>
						<th scope="col">Genre</th>
						<th scope="col">Stock</th>
						<th scope="col">Rate</th>
						<th/>
						<th/>
					</tr>
				</thead>
				<tbody>
					{movies.map((m, index) => {
						return (
							<tr key={m._id}>
								<td>{m.title}</td>
								<td>{m.genre.name}</td>
								<td>{m.numberInStock}</td>
								<td>{m.dailyRentalRate}</td>
								<td>
									<Like/>
								</td>
								<td>
									<button
										onClick={() => handleDelete(m)}
										className="btn btn-danger btn-sm"
									>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Movies;
