import React from "react";

export default function LoginForm() {
    const username = React.createRef();
    username.current.focus();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const username = username.current.value
    };
    
	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input ref={username} id="username" type="text" className="form-control" />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input id="password" type="text" className="form-control" />
				</div>
                <button className="btn btn-primary" onClick={handleSubmit}>Login</button>
			</form>
		</div>
	);
}
