import React, { useContext, useState } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import { addMovie } from '../actions/movieActions';

const MovieForm = () => {
    const { movieDispatch } = useContext(MovieContext)
    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        movieDispatch(addMovie(title, genre))
        setTitle('')
        setGenre('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Movie Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Movie Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
            />
            <input type="submit" value="Add Movie"/>
        </form>
    )
}

export default MovieForm