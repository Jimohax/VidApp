import React from "react";
import  _ from 'lodash'; 
import PropTypes from 'prop-types';

const Pagination = ({ totalPosts, postPerPage, onPageChange, currentPage }) => {
	// let pages = [];

	// for (let i = 1; i < Math.ceil(totalPosts / postPerPage) + 1; i++) {
	// 	pages.push(i);
	// }
	// console.log(currentPage);

	const pagesCount = Math.ceil(totalPosts / postPerPage);
	if (pagesCount === 1) return null;
	const pages = _.range(1, pagesCount + 1);


	return (
		<nav> 
			{/* {console.log(pages)} */}
			<ul className="pagination">
				{pages.map((page, index) => {
					return (
						<li key={index} className={page === currentPage? "page-item active": "page-item "} style={{cursor: "pointer"}} >
							<a className="page-link" onClick={()=>onPageChange(page)}>
								{page}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

Pagination.propTypes = {
	totalPosts: PropTypes.number.isRequired,
	postPerPage: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired,
}

export default Pagination;
