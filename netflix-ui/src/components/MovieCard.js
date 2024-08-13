// import React from 'react'

// const MovieCard = () => {
//     return (
//         <div className=' w-48 p-2'>
//             <img src="https://gossipandgab.com/wp-content/uploads/2018/10/best-scary-movies.jpeg" alt="movie banner"/>
//         </div>
//     )
// }

// export default MovieCard

import React from 'react'
import { TMDB_IMG_URL } from '../utils/constant';
import { useDispatch } from "react-redux";
import { getId, setOpen } from '../redux/movieSlice';

const MovieCard = ({ posterPath,movieId}) => {
  const dispatch = useDispatch();

  if (posterPath === null) return null;

  

  const handleOpen = () => {
    dispatch(getId(movieId));
    dispatch(setOpen(true));
  }

  return (
    <div className='w-48 pr-2' onClick={handleOpen}>
      <img src={`${TMDB_IMG_URL}/${posterPath}`} alt="movie-banner" />
    </div>
  )
}

export default MovieCard;
