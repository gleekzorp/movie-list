import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import { deleteMovie } from '../actions/movieActions';

const MovieDetails = (props) => {
    const { movieDispatch } = useContext(MovieContext)
    return (
        <li onClick={() => movieDispatch(deleteMovie(props.movie.id))}>
            <div className="title">{props.movie.title}</div>
            <div className="genre">{props.movie.genre}</div>
        </li>
    )
}

export default MovieDetails