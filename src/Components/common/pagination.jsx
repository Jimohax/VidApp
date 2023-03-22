import React from "react";

const Pagination = ({ totalPosts, postPerPage }) => {
	let pages = [];

	for (let i = 0; i < Math.ceil(totalPosts / postPerPage); i++) {
		pages.push(i);
	}
	return (
		<nav> 
			<ul className="pagination">
				{pages.map((page, index) => {
					return (
						<li key={index} className="page-item">
							<a className="page-link" >
								{page}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Pagination;
