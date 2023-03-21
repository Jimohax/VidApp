import React, { useState } from "react";
// import 'font-awesome/css/font-awesome.css';

// import 'bootstrap/dist/css/bootstrap.css';

const Like = () => {
	const [liked, setLiked] = useState(false);

	const onLike = () => {
		setLiked((prev) => !prev);
		console.log("hey boss");
	};

	return (
		<div>
			{liked ? (
				<i
					className="fa fa-heart"
					aria-hidden="true"
					onClick={onLike}
          style={{cursor: "pointer"}}
				></i>
			) : (
				<i
					className="fa fa-heart-o"
					aria-hidden="true"
					onClick={onLike}
          style={{cursor: "pointer"}}

				></i>
			)}
		</div>
	);
};

export default Like;
