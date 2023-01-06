import { useEffect, useState } from 'react';
import './App.css';
import CardList from './CardList';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMovies } from './apis/apiList';
import { useLocation } from 'react-router';
import { AppConstants } from './constant/constant';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location?.state?.id || AppConstants.ROUTE_PATH.HOME;
  // }, [location]);
  // return currentPath;
  let movieList = useSelector(state => state.movies.movieList)
  let isMovieDataAvailable = Object.keys(movieList).length != 0 ? true : false;

  useEffect(() => {
    dispatch(getAllMovies(1,currentPath))
  }, [currentPath])

  return (
    <div>
      {isMovieDataAvailable &&
        <CardList />
      }
    </div>
  );
}

const findPath = () => {
}

export default App;
