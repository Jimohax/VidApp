import _ from "lodash";

export function paginate(movies, currentPage, postPerPage) {
	const startIndex = (currentPage - 1) * postPerPage;
	return _(movies).slice(startIndex).take(postPerPage).value();
}
