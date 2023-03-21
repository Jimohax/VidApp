import React, {useState} from 'react';
import { getMovies, deleteMovie } from '../Services/fakeMovieService';


const Movies = () => {
  
    // let mov =  getMovies();
    const [movies, setMovies] = useState(getMovies());

    const handleDelete = (movie)=>{
       const newMovies = movies.filter(m=>m._id!== movie._id);

       console.log(newMovies);
          setMovies(newMovies);
       console.log(newMovies);
        // return movies;
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
                    
                        {movies.map((m, index)=>{
    
                        return (
                            
                        <tr key={m._id}>
                            
                            <td>{m.title}</td>
                            <td>{m.genre.name}</td>
                            <td>{m.numberInStock}</td>
                            <td>{m.dailyRentalRate}</td>
                            <td><button onClick={()=>handleDelete(m)} className="btn btn-danger btn-sm">Delete</button></td>
                            
                        </tr>
                        
                        )
                        })}
                        
                    </tbody>    
                    
                    
                </table>
            </div>
       
      )
}

export default Movies