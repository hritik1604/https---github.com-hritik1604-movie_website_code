import { AppConstants } from "./constant/constant";

function Cast(props) {
    return (
        <div className="d-flex flex-column me-2">
            <img src={`${AppConstants.IMAGE_PATH_INITIAL}${props.img}`} className="cast-image"/>
            <span>{props.name}</span>
            <span>Character: {props.character}</span>
        </div>
    )
}


export default Cast;