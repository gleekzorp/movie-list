export const addMovie = (title, genre) => {
    return {
        type: 'ADD_MOVIE',
        movie: {
            title: title,
            genre: genre
        }
    }
}

export const deleteMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id: id
    }
}