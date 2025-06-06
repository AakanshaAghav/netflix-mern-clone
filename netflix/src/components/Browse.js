import React, { useEffect } from 'react';
import Header from './Header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcominMovies from '../hooks/useUpcomingMovies';
import SearchMovie from './SearchMovie';


function Browse() {
  const user = useSelector(store => store.app.user);
    const toggle = useSelector(store => store.movie.toggle);
  const navigate = useNavigate();
 // const dispatch = useDispatch();

  //my custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcominMovies();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  
  return (
    <div>
      <Header />
      <div>
        {
          toggle ? <SearchMovie/> :(
            <>
            <MainContainer/>
            <MovieContainer/>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Browse;
