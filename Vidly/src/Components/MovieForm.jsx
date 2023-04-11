import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function MovieForm() {
  
  const {id} = useParams(); 
  const navigate = useNavigate();
  return (
    <div>
        <h1>Movie Form - {id}</h1>
        <button className="btn btn-primary" onClick={()=> navigate('/')}>Save</button>
    </div>
  )
}
