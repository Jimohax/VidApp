import React, { useState } from "react";
import { getMovies } from "../Services/fakeMovieService";
import Like from "./common/Like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import Genres from "./Genres";

const Movies = () => {
	// let mov =  getMovies();
	const [movies, setMovies] = useState(getMovies());
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(3);
	const [genreSelect, setGenreSelect] = useState('');

	const newMovies = paginate(movies, currentPage, postPerPage);

	const handleDelete = (movie) => {
		const newMovies = movies.filter((m) => m._id !== movie._id);

		setMovies(newMovies);
		console.log(newMovies.length);
		// return movies;
	};

	// const lastPostIndex = currentPage * postPerPage ;
	// const firstPostIndex = lastPostIndex - postPerPage;
	// const currentPosts = movies.splice(firstPostIndex, lastPostIndex);

	// console.log(firstPostIndex, lastPostIndex);
	// console.log(currentPosts);

	const handlePageChange = (page) => {
		setCurrentPage(page, currentPage, postPerPage);
	};
	const handleSelect = (g) => {
		setGenreSelect(g.name);
		// console.log(g);
	};
	// console.log(movies);

	return (
		<div className="row">
			<div className="col-2">
				<Genres onItemSelect={handleSelect} selectedItem={genreSelect} />
			</div>
			<div className="col">
				<h4>
					{newMovies.length < 1
						? "There are no movies in the database"
						: "Showing " +
						  newMovies.length +
						  " movies in the database"}
				</h4>
				<table className="table">
					<thead>
						<tr>
							<th scope="col">Title</th>
							<th scope="col">Genre</th>
							<th scope="col">Stock</th>
							<th scope="col">Rate</th>
							<th />
							<th />
						</tr>
					</thead>
					<tbody>
						{newMovies.map((m, index) => {
							return (
								<tr key={m._id}>
									<td>{m.title}</td>
									<td>{m.genre.name}</td>
									<td>{m.numberInStock}</td>
									<td>{m.dailyRentalRate}</td>
									<td>
										<Like />
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
				<Pagination
					totalPosts={movies.length}
					postPerPage={postPerPage}
					onPageChange={handlePageChange}
					currentPage={currentPage}
				/>
			</div>
		</div>
	);
};

export default Movies;
