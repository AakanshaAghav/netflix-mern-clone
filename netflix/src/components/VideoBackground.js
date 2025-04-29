import React from 'react';
import useMovieById from '../hooks/useMovieById';
import { useSelector } from 'react-redux';

function VideoBackground({ movieId, bool }) {
  const trailerMovie = useSelector(store => store.movie.trailerMovie);
  useMovieById(movieId);

  if (!trailerMovie) {
    return (
      <div className='w-screen h-screen bg-black flex items-center justify-center'>
        <p className="text-white text-xl">Loading...</p>
      </div>
    ); // or you can show a spinner/loading screen
  }

  return (
    <div className='w-[vw] overflow-hidden'>
      <iframe 
        className={`${bool ? "w-[100%]" : "w-screen aspect-video"}`}
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
