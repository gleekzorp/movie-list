import React from 'react';
import MovieContextProvider from './contexts/MovieContext';
import NavBar from './components/Navbar';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <NavBar />
        <MovieList />
      </MovieContextProvider>
    </div>
  );
}

export default App;
