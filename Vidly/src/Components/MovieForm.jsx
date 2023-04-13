import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import {Link} from 'react-router-dom'
import Joi from "joi-browser";
import Input from "./common/Input";
import { getGenres } from "../Services/fakeGenreService";
import { getMovie, saveMovie } from "../Services/fakeMovieService";
import Select from "./common/Select";

export default function MovieForm() {
	const { id } = useParams();
	const navigate = useNavigate();

	const [data, setData] = useState({
		title: "",
		genreId: "",
		numberInStock: "",
		dailyRentalRate: "",
	});
	const [error, setError] = useState({});
	const [genres, setGenres] = useState([]);

	const schema = Joi.object({
		_id: Joi.string(),
		title: Joi.string().required().label("Title"),
		genreId: Joi.string().required().label("Genre"),
		numberInStock: Joi.number()
			.required()
			.min(0)
			.max(100)
			.label("Number in Stock"),
		dailyRentalRate: Joi.number()
			.required()
			.min(0)
			.max(10)
			.label("Daily Rental Rate"),
	});

  useEffect(() => {  
	const genre = getGenres();
  console.log(genre);
	setGenres(genre);

	const movieId = id;
	if (movieId === "new") return;

	const movie = getMovie(movieId);
	if (!movie) return navigate("/not-found", { replace: true });
  
  setData(mapToViewModel(movie));
}, []);

  const mapToViewModel = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  };

 const  doSubmit = () => {
    saveMovie(data);

    navigate("/movies");
  };

	const validate = () => {
		const result = schema.validate(data, { abortEarly: false });
		if (!result.error) return null;
		const errors = {};
		for (let item of result.error.details)
			errors[item.path[0]] = item.message;

		return errors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const errors = validate();
		console.log(errors);
		setError(errors || {});
		if (errors) return;
	};

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
		// const {name, value} = e.target

		// console.log(data);
	};
	return (
		<div>
			<h1>Movie Form {id && "-" + id}</h1>
			<div>
				<form onSubmit={handleSubmit}>
					<Input
						name="title"
						errors={error.title}
						value={data.title}
						type={"text"}
						label="Title"
						onChange={handleChange}
					/>
          <Select 
          name="genre"
          errors={error.genre}
          value={genres}
          options={genres}
          type={"select"}
          label="Genre"
          onChange={handleChange}
          />					
					<Input
						name="numberInStock"
						errors={error.numberInStock}
						value={data.numberInStock}
						type={"text"}
						label="Number In Stock"
						onChange={handleChange}
					/>
					<Input
						name="dailyRentalRate"
						errors={error.rate}
						value={data.rate}
						type={"text"}
						label="Rate"
						onChange={handleChange}
					/>

					<button
						className="btn btn-primary mt-3"
						onClick={handleSubmit}
					>
						Save
					</button>
				</form>
			</div>
		</div>
	);
}
