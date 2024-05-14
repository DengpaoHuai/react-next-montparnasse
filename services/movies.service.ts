import { Movie } from "../types/movie.type";

export const getAllMovies = async () => {
  await sleep(2000);
  const response = await fetch(
    "https://crudcrud.com/api/2ef2be945d4b472bb0b431f600ca2535/movies",
    {
      cache: "no-cache",
    }
  );
  return response.json();
};

export const createMovie = async (movie: Omit<Movie, "_id">) => {
  const response = await fetch(
    "https://crudcrud.com/api/2ef2be945d4b472bb0b431f600ca2535/movies",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    }
  );
  return response.json();
};

export const deleteMovie = async (id: string) => {
  const response = await fetch(
    `https://crudcrud.com/api/2ef2be945d4b472bb0b431f600ca2535/movies/${id}`,
    {
      method: "DELETE",
    }
  );
  return response.json();
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
