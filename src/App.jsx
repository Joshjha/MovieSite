import { useEffect, useState } from "react";
// import MovieCard from './movieCard';

import MovieCard from "./movieCard";
import './App.css';
import SearchIcon from './search.svg';

// external API for data about movies
// 2f34be2e 
    const API_URL = 'http://www.omdbapi.com?apikey=2f34be2e';

    const movie1 = {
        "Title": "The Amazing Spidernam 2 Webb Cut",
        "Year": "2021",
        "imbID": "tt18351128",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzI0MmQyMzYtZDAzNi00ZWZiLWFjMTgtNzQwOTRjYTFlM2Y3XkEyXkFqcGc@._V1_SX300.jpg"

    }

    const App = () => {
        const [movies, setMovies] = useState([]);
        const [searchTerm, setSearchTerm] = useState('');

        const searchMovies = async (title) => {
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();

            setMovies(data.Search);
        }

        useEffect(() => {
            searchMovies('Spiderman');
        }, []);

        return (
            <div className="app">
                <h1>MovieLand</h1>

                <div className="search">
                    <input 
                    type="text"
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}/>

                    <img 
                    src="{SearchIcon" 
                    alt="search"
                    onClick={() => searchMovies(searchTerm)} />
                </div>

                {
                    movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
                }

                {/* <div className="container">
                    <MovieCard movie1={movie1}/>
                </div> */}

                
            </div>
        )  
    }

// export every single component
export default App;





