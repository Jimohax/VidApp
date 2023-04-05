import React, { useState } from "react";
import { getMovies } from "../Services/fakeMovieService";
import { getGenres } from "../Services/fakeGenreService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import Genres from "./Genres";
import MoviesTable from "./MoviesTable";
import _ from "lodash";

const Movies = () => {
	// let mov =  getMovies();
	const genre = [{ name: "All Genres" }, ...getGenres()];

	const [movies, setMovies] = useState(getMovies());
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(3);
	const [genreSelect, setGenreSelect] = useState(genre);
	const [sortColumn, setSortColumn] = useState({
		path: "title",
		order: "asc",
	});

	const filtered =
		genreSelect && genreSelect._id
			? movies.filter((m) => m.genre._id == genreSelect._id)
			: movies;

	const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

	const newMovies = paginate(sorted, currentPage, postPerPage);

	const handleDelete = (movie) => {
		const newMovies = movies.filter((m) => m._id !== movie._id);

		setMovies(newMovies);
		// console.log(newMovies.length);
		// return movies;
	};
	const handleLike = (movie) => {
		const newMovies = [...movies];
		const index = newMovies.indexOf(movie);
		// newMovies[index] = { ...movies[index] };
		newMovies[index].liked = !newMovies[index].liked;
		setMovies(newMovies);
		
	};

	const handleSort = (sortColumn2) => {
		setSortColumn(sortColumn2);
	};


	const handlePageChange = (page) => {
		setCurrentPage(page, currentPage, postPerPage);
	};
	const handleSelect = (g) => {
		setGenreSelect(g);
		setCurrentPage(1);
		// console.log(g);
	};
	// console.log(movies);

	return (
		<div className="row">
			<div className="col-2">
				<Genres
					onItemSelect={handleSelect}
					selectedItem={genreSelect}
					allmovies={movies}
				/>
			</div>
			<div className="col">
				<h4>
					{filtered.length < 1
						? "There are no movies in the database"
						: "Showing " +
						  filtered.length +
						  " movies in the database"}
				</h4>
				<MoviesTable
					newMovies={newMovies}
					onDelete={handleDelete}
					onSort={handleSort}
					onLike={handleLike}
					sortColumn={sortColumn}
				/>
				<Pagination
					totalPosts={filtered.length}
					postPerPage={postPerPage}
					onPageChange={handlePageChange}
					currentPage={currentPage}
				/>
			</div>
		</div>
	);
};

export default Movies;
