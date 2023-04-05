import React from "react";

const TableHeader = () => {
	const raiseSort = (path) => {
		const sortColumn2 = { ...props.sortColumn };
		if (sortColumn2.path === path)
			sortColumn2.order = sortColumn2.order === "asc" ? "desc" : "asc";
		else {
			sortColumn2.path = path;
			sortColumn2.order = "asc";
		}
		props.onSort(sortColumn2);
	};
	return (
		<thead>
			<tr>
				{props.columns.map((column) => (
					<th onClick={() => raiseSort(column.path)}>{column.label}</th>
				))}
			</tr>
		</thead>
	);
};

export default TableHeader;
