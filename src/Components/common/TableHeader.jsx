import React from "react";

const TableHeader = (props) => {
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
					<th key={column.path || column.key} onClick={() => raiseSort(column.path)}>{column.label}</th>
				))}
			</tr>
		</thead>
	);
};

export default TableHeader;
