import React, {useState} from 'react';
import { getMovies, deleteMovie } from '../Services/fakeMovieService';


const movies = () => {
  
    let mov = getMovies();
    const [movies, setMovies] = useState(mov);

    const handleDelete = (id)=>{
        console.log(movies);
    }
    
    return (
        
            <div className='row'>
                {/* <h4>Showing {m.length} movies in the database</h4> */}
                <table className='table'>
                    <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Genre</th>
                        <th scope='col'>Stock</th>
                        <th scope='col'>Rate</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    
                        {getMovies().map((m, index)=>{
    
                        return (
                            
                        <tr key={m._id}>
                            
                            <td>{m.title}</td>
                            <td>{m.genre.name}</td>
                            <td>{m.numberInStock}</td>
                            <td>{m.dailyRentalRate}</td>
                            <td><button onClick={()=>handleDelete(m._id)} className="btn btn-danger btn-sm">Delete</button></td>
                            
                        </tr>
                        
                        )
                        })}
                        
                    </tbody>    
                    
                    
                </table>
            </div>
       
      )
}

export default movies