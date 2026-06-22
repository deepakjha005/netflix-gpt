import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
  name: "moviesListSlice",
  initialState: {
    nowPlayingMoviesList: null,
    movieTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    setNowPlayingMoviesList: (state, action) => {
      state.nowPlayingMoviesList = action.payload;
    },
    setMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});
export default moviesListSlice.reducer;
export const {
  setNowPlayingMoviesList,
  setMovieTrailer,
  setPopularMovies,
  setTopRatedMovies,
  setUpcomingMovies,
} = moviesListSlice.actions;
