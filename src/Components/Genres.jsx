import React from 'react';
import {genres} from '../Services/fakeGenreService';

const Genres = () => {
  return (
    <ul className="list-group">
  <li className="list-group-item active">All Genres</li>
  {console.log(genres)}
  {genres.map((g, index)=>{
    return (
  <li className="list-group-item" key={index}>{g.name}</li>
  )
  })}
  
</ul>
  )
}

export default Genres