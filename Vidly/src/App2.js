import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

export default function App2() {
	const [posts, setPosts] = useState([]);
    // let posts = [];

	const handleAdd = () => {
		console.log("Add");
	};

	const handleUpdate = (post) => {
		console.log("Update", post);
	};

	const handleDelete = (post) => {
		console.log("Delete", post);
	};

	// useEffect(() => {
	// 	const result = async () => {
	// 		let res = await axios.get(
	// 			"http://jsonplaceholder.typicode.com/posts"
	// 		);
    //         console.log(res);
	// 	};
	// }, []);

    const result = async () => {
        const {data: posts} = await axios.get(
            "http://jsonplaceholder.typicode.com/posts"
        );
        // console.log(posts);
		setPosts(posts);
    };
    posts.push(result());

	return (
		<React.Fragment>
			<button className="btn btn-primary" onClick={handleAdd}>
				AddOn
			</button>
			<table className="table">
				<thead>
					<tr>
						<th>Title</th>
						<th>Update</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{posts.map((post) => (
						<tr key={post.id}>
							<td>{post.title}</td>
							<td>
								<button
									className="btn btn-info btn-sm"
									onClick={() => handleUpdate(post)}
								>
									Update
								</button>
							</td>
							<td>
								<button
									className="btn btn-danger btn-sm"
									onClick={() => handleDelete(post)}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</React.Fragment>
	);
};
