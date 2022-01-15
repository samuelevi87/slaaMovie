import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { BASE_URL } from 'utils/requests';
import './style.css';

type Props = {
    movieId: string;
}

function FormCard({ movieId }: Props) {

    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data);
            });
    }, [movieId]);


    return (
        <div className="slaamovie-form-container">
            <img className="slaamovie-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="slaamovie-card-bottom-container">
                <h3>{movie?.title}</h3>
                <form className="slaamovie-form">
                    <div className="form-group slaamovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group slaamovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="slaamovie-form-btn-container">
                        <button type="submit" className="btn btn-primary slaamovie-btn">Salvar</button>
                    </div>
                </form >
                <Link to="/">
                    <button className="btn btn-primary slaamovie-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    );

}

export default FormCard;