const BASE_URL = "https://api.themoviedb.org/3";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchData(path, { query = "" } = {}) {
    /* await delay(1000); */

    try {
        const res = await fetch(
            `${BASE_URL}${path}?api_key=${process.env.THE_MOVIE_DB_API_KEY}&${query}`
        );
        return res.json();
    } catch (error) {
        throw new Error(error);
    }
}

export async function fetchGenres() {
    try {
        const res = await fetchData("/genre/movie/list");
        return res.genres;
        
    } catch (error) {
        throw new Error("Error happened while fetching genres", error);
    }
}

export async function fetchPopularMovies() {
  try {
    const res = await fetchData("/movie/popular");
    return res.results;
  } catch (error) {
    throw new Error("Error happened while fetching popular movies", error);
  }
}

export async function fetchTopRatedMovies() {
  try {
    const res = await fetchData("/movie/top_rated");
    return res.results;
  } catch (error) {
    throw new Error("Error happened while fetching top rated movies", error);
  }
}

export async function fetchUpcomingMovies() {
  try {
    const res = await fetchData("/movie/upcoming");
    return res.results;
  } catch (error) {
    throw new Error("Error happened while fetching upcoming movies", error);
  }
}

export async function fetchSingleMovie(movieId) {
  try {
    const res = await fetchData(`/movie/${movieId}`);
    return res;
  } catch (error) {
    throw new Error("Error happened while fetching top rated movies", error);
  }
}

export async function fetchSimilarMovies(movieId) {
  try {
    const res = await fetchData(`/movie/${movieId}/similar`);
    return res.results;
  } catch (error) {
    throw new Error("Error happened while fetching similar movies", error);
  }
}

export async function searchMovies(keyword) {
  try {
    const res = await fetchData("/search/movie", {
      query: `query=${keyword}`,
    });
    return res.results;
  } catch (error) {
    throw new Error("Error happened while searching movies", error);
  }
}