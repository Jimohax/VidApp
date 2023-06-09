import React, { useState } from "react";
import Input from "./Input";
import Joi from 'joi-browser'
// import { object } from "prop-types";

export default function LoginForm() {
	// const username = React.createRef();
	const [data, setData] = useState({
		username: "",
		password: "",
	});
	const [error, setError] = useState({});

	const schema =  Joi.object({ 
		username: Joi.string().required(),
		password: Joi.string().required(),
	});

	
	const validate = ()=>{
			const result = schema.validate(data, {abortEarly: false});
			if (!result.error) return null;
			const errors ={};
			for (let item of result.error.details) errors[item.path[0]] = item.message
		
			return errors
		}
		
		const handleSubmit = (e) => {
			e.preventDefault();
			
		
		const errors = validate();
		console.log(errors);
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
				
				<button className="btn btn-primary mt-3" onClick={handleSubmit}>
					Login
				</button>
			</form>
		</div>
	);
}
