import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isMovieDetailsAvailable: false,
    selectedMovieId: "",
    details: {}
}


const movieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState,
    reducers: {
        setIsMovieDetailsAvailable: (state, action) => {
            state.isMovieDetailsAvailable = action.payload;
        },
        setSelectedMovieId: (state, action) => {
            state.selectedMovieId = action.payload;
        },
        setMovieDetails: (state, action) => {
            state.details = action.payload;
        }
    }
})

export const movieId = (state) => state.movieDetails.selectedMovieId;
export const movieInfo = (state) => state.movieDetails.details;

export const { setIsMovieDetailsAvailable, setSelectedMovieId, setMovieDetails} = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;