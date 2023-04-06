import React from "react";

const TableHeader = ({sortColumn, onSort, columns }) => {
	const raiseSort = (path) => {
		const sortColumn2 = { ...sortColumn };
		if (sortColumn2.path === path)
			sortColumn2.order = sortColumn2.order === "asc" ? "desc" : "asc";
		else {
			sortColumn2.path = path;
			sortColumn2.order = "asc";
		}
		onSort(sortColumn2);
	};

	const renderSortIcon = (column)=>{		
		if(column.path !== sortColumn.path ) return null;
		if(sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>
		return <i className="fa fa-sort-desc"></i>
	}
	return (
		<thead>
			<tr>
				{columns.map((column) => (
					<th
						key={column.path || column.key}
						onClick={() => raiseSort(column.path)}
						className="clickable"
					>
						{column.label}{renderSortIcon(column)}
					</th>
				))}
			</tr>
		</thead>
	);
};

export default TableHeader;
