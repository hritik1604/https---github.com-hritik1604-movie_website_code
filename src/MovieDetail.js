import { useSelector } from "react-redux";
import Cast from "./Cast";
import { AppConstants } from "./constant/constant";
import "./MovieDetail.css"
import { castList } from "./reducers/movieCastReducer";
import { movieInfo } from "./reducers/movieDetailsReducer";

function MovieDetail(props) {
    let genres = []
    const movieDetails = useSelector(movieInfo);
    const castListDetails = useSelector(castList)
    if(movieDetails.genres && movieDetails.genres.length) {
        genres = movieDetails.genres.map(genre=>genre.name);
    }

    return(
        <div className="movie-details d-flex flex-column">
            <div className="movie-info mx-4 mt-4 p-3">
                <div className="movie-meta-info">
                    <div className="movie-title-info d-flex">
                        <div className="movie-poster">
                            <img src={`${AppConstants.IMAGE_PATH_INITIAL}${movieDetails.poster_path}`} />
                        </div>
                        <div className="movie-title ms-3">
                            <h1>{movieDetails.title}</h1>
                            <h4>Rating: {movieDetails.vote_average}</h4>
                            <p>
                                {movieDetails.runtime}
                                <span className="ms-1">{genres.join(",")}</span>
                            </p>
                            <p>Release Date: {movieDetails.release_date}</p>
                        </div>
                    </div>
                    <div className="movie-overview">
                        <h4>Overview</h4>
                        <p>{movieDetails.overview}</p>
                    </div>
                </div>
                <div className="backDrop-image">
                    <img src={`${AppConstants.IMAGE_PATH_INITIAL}${movieDetails.backdrop_path}`} />
                </div>
            </div>
            <div className="movie-cast">
                <h1>Cast</h1>
                <div className="d-flex overflow-auto">
                {
                    castListDetails && castListDetails.cast && castListDetails.cast.map(castDetail=> {
                        return <Cast key={castDetail.id} img={castDetail.profile_path} name={castDetail.name} character={castDetail.character}/>
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;