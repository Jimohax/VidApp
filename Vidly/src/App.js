import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import Movies from './Components/Movies';
import "./App.css"; 
import Navbar from "./Components/common/Navbar";
import Customers from "./Components/Customers";
import Rentals from "./Components/Rentals";
import NotFound from "./Components/NotFound";
import MovieForm from "./Components/MovieForm";
import LoginForm from "./Components/common/LoginForm";


// import Genres from "./Components/Genres";
// import Like from "./Components/common/Like";

const App = () => {
	return (
		<div>
			<Navbar/>

			<main className="container">
				<Routes>
					<Route 
						path="/" element={<Navigate to= "Movies"/>}
					/>
					<Route path="/Movies" element={<Movies/>} />
					<Route path="/login" element={<LoginForm/>} />
					<Route path="/Movies/:id" element={<MovieForm/>} />
					<Route path="Customers" element={<Customers/>} />
					<Route path="Rentals" element={<Rentals/>} />
					<Route path="not-found" element={<NotFound />} />
					<Route path="/" element={<Movies />} />
					<Route path="*" exact={true} element={<Navigate to={"not-found"} />} />
					
						
					
				</Routes>
	 		
						
		</main>
		</div>
		
	);
};

export default App;
