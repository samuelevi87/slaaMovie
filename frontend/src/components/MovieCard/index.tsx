import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";

function MovieCard() {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gZlZLxJMfnSeS60abFZMh1IvODQ.jpg",
        title: "The Matrix Resurrections",
        count: 20,
        score: 4.5
    };

    return (
        <div>
            <img className="slaamovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="slaamovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />

                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary slaamovie-btn">Avaliar</div>
                </Link>

            </div>
        </div >
        
    );
}

export default MovieCard;