import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getCastDetails, getMovieDetails } from "./apis/apiList";
import { AppConstants } from "./constant/constant";
import Img from "./Img";

function Card(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function getMovieInfo(id) {
        navigate(`/${AppConstants.ROUTE_PATH.MOVIE_DETAILS}`)
        dispatch(getMovieDetails(id))
        dispatch(getCastDetails(id))
    }
    return (
        <div className="d-flex flex-column movie-card" onClick={()=>getMovieInfo(props.id)}>
            <Img img={`${AppConstants.IMAGE_PATH_INITIAL}${props.img}`} />
            <span>{props.title}</span>
            <span>{props.rating}</span>
        </div>
    )
}

export default Card;