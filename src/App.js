import React from "react";
import Movies from './Components/Movies';
import "./App.css";
// import Like from "./Components/common/Like";

const App = () => {
	return (
		<main className="container">
			<Movies />   
			{/* <Like /> */}
		</main>
	);
};

export default App;
