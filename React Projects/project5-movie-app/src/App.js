import { useState } from "react";
import "./App.scss";

function App() {
    const [movieQuery, setMovieQuery] = useState("");
    const [movie, setMovie] = useState(null);

    function handleQuery(event) {
        setMovieQuery(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=73b299d9&t=${movieQuery}`
        );
        const data = await response.json();
        console.log(data);

        setMovie(data);
        setMovieQuery("");
    }

    // const { BoxOffice, Country, Director, Genre, Language, Plot, Rated, Released, Runtime, Title, Writer, Year, imdbRating} = movie;

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleQuery}
                    value={movieQuery}
                    placeholder="Search Movie By Name"
                />
                <button type="submit">Search</button>
            </form>

            {
                !movie && (
                    <div className="empty-card">
                        <div className="arrow">⬆️</div>
                        <div>SEARCH YOUR MOVIE</div>
                    </div>
                )
            }

            {movie && (
                <div className="movie-card">
                    <div className="movie-heading">
                        <h2 className="movie-title">{movie.Title}</h2>
                        <p className="movie-rating">{movie.imdbRating} ⭐</p>
                    </div>

                    <div className="movie-details">
                        <div>
                            <img
                                className="movie-img"
                                src={movie.Poster}
                                alt={movie.Title}
                            />
                        </div>
                        <div className="description-block">
                            <div className="movie-description">
                                <div className="movie-stats">
                                    <p className="movie-rated">{movie.Rated}+</p>
                                    <div className="vertical-line"></div>
                                    <p className="movie-genre">
                                        {movie.Genre}
                                    </p>
                                    <div className="vertical-line"></div>
                                    <p className="movie-runtime">{movie.Runtime}</p>
                                    <div className="vertical-line"></div>
                                    <p className="movie-year">{movie.Year}</p>
                                    <div className="vertical-line"></div>
                                    <p className="movie-country">{movie.Country}</p>
                                </div>
                            </div>

                            <p className="movie-plot">
                                {movie.Plot}
                            </p>

                            <div>
                                <p className="movie-director">
                                    Director : {movie.Director}
                                </p>
                                <p className="movie-writer">
                                    Writer : {movie.Writer}
                                </p>
                                <p className="movie-actors">
                                    Actors : {movie.Actors}
                                </p>
                                <div className="movie-collection">
                                    <p>Box Office Collection : {movie.BoxOffice}</p>
                                </div>
                            </div>
                            <div className="movie-stats2">
                                <p className="movie-language">
                                    Language: {movie.Language}
                                </p>
                                <p className="movie-release-data">
                                    Release date: {movie.Released}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
