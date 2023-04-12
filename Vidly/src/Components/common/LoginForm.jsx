import React, { useState } from "react";
import Input from "./Input";
// import { object } from "prop-types";

export default function LoginForm() {
	// const username = React.createRef();
	const [data, setData] = useState({
		username: "",
		password: "",
	});
	const [error, setError] = useState({});

	const validate = ()=>{
		const errors ={};
		if (data.username.trim() === "" )
		errors.username = "Username is required";
		if (data.password.trim() === "")
		errors.password = "Password is required"
		return errors.length === 0 ? null : errors; 
		// return errors
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		const errors = validate();
		setError(errors || {});
		if (errors) return
	};

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
		// const {name, value} = e.target

		// console.log(data);
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<Input
					name="username"
					errors={error.username}
					value={data.username}
					label="Username"
					onChange={handleChange}
				/>
                <Input
					name="password"
					errors={error.password}
					value={data.password}
					label="Password"
					onChange={handleChange}
				/>
				
				<button className="btn btn-primary" onClick={handleSubmit}>
					Login
				</button>
			</form>
		</div>
	);
}
