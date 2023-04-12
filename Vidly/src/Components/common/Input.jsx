import React from 'react'

export default function Input({name, label, value, errors, onChange}) {

  return (
    <div className="form-group">
		<label htmlFor={name}>{label}</label>
			<input
				
				id={name}
                name={name}
				value={value}
				type="text"
				className="form-control"
				onChange={onChange}
			/>
			{errors && <div className="alert alert-danger">{errors}</div>}
	</div>
  )
}
