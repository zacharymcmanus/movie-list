import { useEffect, useState } from "react";
import moment from "moment";
import "./App.css";
import MovieSearch from "./components/MovieSearch";
import AddMovie from "./components/AddMovie";

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/movies")
            .then((res) => res.json())
            .then((data) => setMovies(data))
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const deleteMovie = (id) => {
        console.log("id:", id);
        const init = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify(id),
        };
        console.log(init.body);
        fetch(`http://localhost:8081/movies/${id}`, init)
            .then((res) => res.json())
            .then((data) => {
                console.log("Deleted a movie successfully:", id);
            });
    };

    return (
        <div className="App">
            <MovieSearch />
            <AddMovie />
            <div className="grid-container">
                {movies.map((movie, index) => (
                    <div className="grid-item" key={index}>
                        <h3>{movie.title}</h3>
                        <p>Genre: {movie.genre}</p>
                        <p>Release Date: {moment.utc(movie.release_date).format("DD MMM YYYY")}</p>
                        <img src={movie.cover} alt="cover" className="cover-image" />
                        <button onClick={() => deleteMovie(movie.id)}>Delete movie</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
