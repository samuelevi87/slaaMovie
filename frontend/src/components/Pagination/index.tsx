import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import './style.css';

function Pagination() {
    return (
        <div className="slaamovie-pagination-container">
            <div className="slaamovie-pagination-box">
                <button className="slaamovie-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="slaamovie-pagination-button" disabled={false} >
                    <Arrow className="slaamovie-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;