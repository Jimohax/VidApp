import React, { useState } from "react";
import { getMovies } from "../Services/fakeMovieService";
import { getGenres } from "../Services/fakeGenreService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import Genres from "./Genres";
import MoviesTable from "./MoviesTable";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";


const Movies = () => {
	// let mov =  getMovies();
	const genre = [{ name: "All Genres" }, ...getGenres()];

	const [movies, setMovies] = useState(getMovies());
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(3);
	const [searchQuery, setSearchQuery] = useState('');
	const [genreSelect, setGenreSelect] = useState(genre);
	const [sortColumn, setSortColumn] = useState({
		path: "title",
		order: "asc",
	});
const getPagedData =  ()=>{
	let filtered = movies;
    if (searchQuery)
      filtered = movies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (genreSelect && genreSelect._id)
      filtered = movies.filter(m => m.genre._id === genreSelect._id);


	const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

	const newMovies = paginate(sorted, currentPage, postPerPage);
	return {totalCount : filtered.length, newMovies}
}
	

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

	const handleSearch = query => {
		setSearchQuery(query);
		setGenreSelect('');
		setCurrentPage(1);
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
		setSearchQuery("")
		// console.log(g);
	};
	// console.log(movies);

	const {totalCount, newMovies} = getPagedData();
	const navigate = useNavigate();

	return (
		<div>
		<div className="row">
			<div className="col-2">
				<Genres
					onItemSelect={handleSelect}
					selectedItem={genreSelect}
					allmovies={movies}
				/>
			</div>
			<div className="col"> 
			<button className="btn btn-primary " onClick={()=> navigate("/Movies/new")}>New Movies</button>
				<h4>
					{totalCount < 1
						? "There are no movies in the database"
						: "Showing " +
						  totalCount +
						  " movies in the database"}
				</h4>
				<SearchBox value={searchQuery} onChange={handleSearch} />
				<MoviesTable
					newMovies={newMovies}
					onDelete={handleDelete}
					onSort={handleSort}
					onLike={handleLike}
					sortColumn={sortColumn}
				/>
				<Pagination
					totalPosts={totalCount}
					postPerPage={postPerPage}
					onPageChange={handlePageChange}
					currentPage={currentPage}
				/>
			</div>
		</div>
		</div>
	);
};

export default Movies;
