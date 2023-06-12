import React, { useState } from "react";

const MovieSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:8081?searchTerm=${searchTerm}`);
            const data = await response.json();
            setMovies(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for a movie..." />
            <button onClick={handleSearch}>Search</button>

            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default MovieSearch;
