import React from 'react';
import { getMovies } from './Services/fakeMovieService';

const App = () => {
  return (
    <main className='container'>
        <div className='row'>
            <h4>Showing 1 movies in the database</h4>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                </tr>
                <hr/>
                
                    {getMovies().map(m=>{

                    return (
                        
                    <tr>
                        
                        <td>{m.title}</td>
                        <td>{m.genre.name}</td>
                        <td>{m.numberInStock}</td>
                        <td>{m.dailyRentalRate}</td>
                        <button type="button" class="btn btn-danger">Delete</button>
                        <hr/>
                    </tr>
                    )
                    })}
                    
                    
                
                
            </table>
        </div>
    </main>
  )
}

export default App