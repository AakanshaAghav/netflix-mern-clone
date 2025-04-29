export const API_END_POINT = "http://localhost:8080/api/v1/user";

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWFhNTY2YTUyYzYzZGVhYmQ1OGY0ZGU4ZTkyY2YzNyIsIm5iZiI6MTc0NTY4MDA4My41NTAwMDAyLCJzdWIiOiI2ODBjZjZkMzNjNzE4ZThjNTUzN2E3ZTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nScG9u-86_oCNpPRgBagKCPtNTS8Hdn-s85DAAOPVxc'
    }
  };

  export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing";
  export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
  export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";
  export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";
  export const TMDB_IMG_URL ="https://image.tmdb.org/t/p/w500";
  export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?query=";