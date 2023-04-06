import React, { useState } from "react";
// import 'font-awesome/css/font-awesome.css';

// import 'bootstrap/dist/css/bootstrap.css';

const Like = ({liked, onClick}) => {
	// const [liked, setLiked] = useState(false);
	

	let classes = "fa fa-heart";
  if (!liked) classes += "-o";

	return (
		<i
      onClick={onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />

	);
};

export default Like;
