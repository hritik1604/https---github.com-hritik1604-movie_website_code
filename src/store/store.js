import { configureStore } from "@reduxjs/toolkit";
import movieCastReducer from "../reducers/movieCastReducer";
import movieDetailsReducer from "../reducers/movieDetailsReducer";
import movieListReducer from "../reducers/movieListReducer";



export const store = configureStore({
    reducer: {
        movies: movieListReducer,
        movieDetails: movieDetailsReducer,
        movieCast: movieCastReducer
    }
})


