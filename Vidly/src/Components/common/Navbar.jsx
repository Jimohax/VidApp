import React from "react";
import { NavLink, Link } from "react-router-dom";
import '../../App.css'

export default function Navbar() {
	return (
		<div className="Navbar">
			<nav className="navbar navbar-expand-lg bg-body-tertiary p-3 mb-2 ">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						Vidly
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink
									className="nav-link  "
									aria-current="page"
									to={"/Movies"}
								>
									Movies
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link " to={"/Customers"}>
									Customers
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link " to={"/Rentals"}>
									Rentals
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link " to={"/login"}>
									Login
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
