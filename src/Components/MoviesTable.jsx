import React from 'react';
import Like from "./common/Like";


const MoviesTable = props => {

    const {newMovies, onDelete, onSort} = props;
  return (
    <table className="table">
					<thead>  
						<tr>
							<th onClick={()=>onSort('title')}>Title</th>
							<th onClick={()=>onSort('genre')}>Genre</th>
							<th onClick={()=>onSort('numberInStock')}>Stock</th>
							<th onClick={()=>onSort('dailyRentalRate')}>Rate</th>
							<th />
							<th />
						</tr>
					</thead>
					<tbody>
						{newMovies.map((m, index) => {
							return (
								<tr key={m._id}>
									<td>{m.title}</td>
									<td>{m.genre.name}</td>
									<td>{m.numberInStock}</td>
									<td>{m.dailyRentalRate}</td>
									<td>
										<Like />
									</td>
									<td>
										<button
											onClick={() => onDelete(m)}
											className="btn btn-danger btn-sm"
										>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
  )
}



export default MoviesTable