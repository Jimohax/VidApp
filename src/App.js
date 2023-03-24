import React from "react";
import Movies from './Components/Movies';
import "./App.css";
import Genres from "./Components/Genres";
// import Like from "./Components/common/Like";

const App = () => {
	return (
		<main className="container">
			<div className="row">
				<div className="col-2">
					<Genres/>

				</div>
				<div className="col">
					<Movies />   
				</div>
			</div>
			
			
		</main>
	);
};

export default App;
