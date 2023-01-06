const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    searchedText: "",
    loadingData: false,
    isHavingError: false,
    movieList: {}
}


const moviesSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setLoadingDataState: (state, action) => {
            state.loadingData = action.payload
        },
        setSearchedTextState: (state, action) => {
            state.searchedText = action.payload
        },
        setIsHavingErrorState: (state,action) => {
            state.isHavingError = action.payload
        },
        setMovieList: (state, action) => {
            state.movieList = action.payload
        }
    }
})

export const movieList = (state) => state.movies.movieList.results;
export const getSearchedText = (state) => state.movies.searchedText;


export const { setMovieList,setLoadingDataState,setIsHavingErrorState,setSearchedTextState } = moviesSlice.actions;


export default moviesSlice.reducer;