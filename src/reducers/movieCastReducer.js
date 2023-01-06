import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    castList: []
}


const movieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState,
    reducers: {
        setCastDetails: (state, action) => {
            state.castList = action.payload;
        }
    }
})

export const castList = (state) => state.movieCast.castList;

export const { setCastDetails } = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;