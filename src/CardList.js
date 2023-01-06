import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import { getSearchedText, movieList } from "./reducers/movieListReducer";


function CardList() {
        const movieListDetails = useSelector(movieList)
        const searchedText = useSelector(getSearchedText);

        return <div className="row mx-3">
            { movieListDetails?.length ?
                movieListDetails.map(movieDetail=>{
                    return <div className="col-md-3" key={movieDetail.id} >
                        <Card key={movieDetail.id} img={movieDetail.poster_path} title={movieDetail.title} rating={movieDetail.vote_average} id={movieDetail.id}/>
                        {/* <movieDetail img={movieDetail.poster_path} title={movieDetail.title} rating={movieDetail.vote_average} /> */}
                    </div>
                }) : 
                <div className="no-record">
                    Not movies found {searchedText}
                </div>

            }
        </div>
}

export default CardList;