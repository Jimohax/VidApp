import React, { useState } from "react";
import Input from "./Input";
import Joi from 'joi-browser'

export default function RegisterForm() {
  // const username = React.createRef();
	const [data, setData] = useState({
		username: "",
		password: "",
    name: ""
	});
	const [error, setError] = useState({});

	const schema =  Joi.object({ 
		username: Joi.string().required(),
		password: Joi.string().required(),
		name: Joi.string().required(),
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
			<h1>Register</h1>
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
        <Input
					name="name"
					errors={error.name}
					value={data.name}
					label="name"
					onChange={handleChange}
				/>
				
				<button className="btn btn-primary mt-3" onClick={handleSubmit}>
					Register
				</button>
			</form>
		</div>
	);
}
