import React from 'react';
import Like from "./common/Like";


const MoviesTable = props => {

    const {newMovies, onDelete} = props;
  return (
    <table className="table">
					<thead>
						<tr>
							<th scope="col">Title</th>
							<th scope="col">Genre</th>
							<th scope="col">Stock</th>
							<th scope="col">Rate</th>
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