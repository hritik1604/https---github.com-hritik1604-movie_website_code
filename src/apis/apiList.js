import { AppConstants } from "../constant/constant"
import { setIsMovieDetailsAvailable, setMovieDetails } from "../reducers/movieDetailsReducer"
import { setMovieList, setIsHavingErrorState, setLoadingDataState, setSearchedTextState } from "../reducers/movieListReducer"
import { useSelector } from 'react-redux'
import { setCastDetails } from "../reducers/movieCastReducer"



export const getAllMovies = (page,currentPath,searchText = "") => {
    return async dispatch => {
        dispatch(setLoadingDataState(true))
        dispatch(setSearchedTextState(searchText))
        try {
          let url = `https://api.themoviedb.org/3/movie/popular?api_key=${AppConstants.API_KEY}&language=en-US&page=${page}`;
            if(currentPath === AppConstants.ROUTE_PATH.TOP_RATED) {
              url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${AppConstants.API_KEY}&language=en-US&page=${page}`
            } else if (currentPath === AppConstants.ROUTE_PATH.UPCOMING) {
              url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${AppConstants.API_KEY}&language=en-US&page=${page}`
            }
            if(searchText.length) {
              url = `https://api.themoviedb.org/3/search/movie?api_key=${AppConstants.API_KEY}&language=en-US&query=${searchText}&page=${page}`
            }
            const response = await fetch(url)
            const data = await response.json()
            dispatch(setLoadingDataState(false));
      
            dispatch(setMovieList(data))
          } catch (error) {
            dispatch(setIsHavingErrorState(true))
          }
    }
} 

export const getMovieDetails = (movieId) => {
    return async dispatch => {

        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${AppConstants.API_KEY}&language=en-US`)
            const data = await response.json()
            dispatch(setIsMovieDetailsAvailable(true));
      
            dispatch(setMovieDetails(data))
          } catch (error) {
            dispatch(setIsMovieDetailsAvailable(false))
          }
    }
} 

export const getCastDetails = (movieId) => {
  return async dispatch => {

      try {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${AppConstants.API_KEY}&language=en-US`)
          const data = await response.json()
          dispatch(setCastDetails(data));
        } catch (error) {
          console.log("error",error)
        }
  }
} 