import { useState, useEffect } from "react";

const KEY = "ab4d6a93";

export function useMovies(query, callback) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    callback?.();

    const controller = new AbortController();

    const getMovies = async () => {
      try {
        setIsLoading(true);
        setError("");

        let response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!response.ok)
          throw new Error("Something went wrong with fetching movies");

        let data = await response.json();
        if (data.Response === "False") throw new Error("Movie not Found");

        // console.log(data);
        setMovies(data.Search);
        setError("");
      } catch (error) {
        // console.error(error.message);
        if (error.name !== "AbortError") {
          setError(error.message);
        }
        // if (error) console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    // handleCloseMovie();
    getMovies();

    return () => {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
}
