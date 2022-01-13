import MovieStars from "../MovieStars";
import './styles.css';

function MovieScore() {

    const score =3.5;
    const count = 13;

    return (
        <div className="slaamovie-score-container">
            <p className="slaamovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="slaamovie-score-count">{count} avaliações</p>
        </div>
    )
}

export default MovieScore;