import { Movie } from "../types/movie.type";

export const getAllMovies = async () => {
  const response = await fetch(
    "https://crudcrud.com/api/3389182747ca46e8a9f1c348b0e14142/movies",
    {
      cache: "no-cache",
    }
  );
  return response.json();
};

export const createMovie = async (movie: Omit<Movie, "_id">) => {
  const response = await fetch(
    "https://crudcrud.com/api/3389182747ca46e8a9f1c348b0e14142/movies",
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
    `https://crudcrud.com/api/3389182747ca46e8a9f1c348b0e14142/movies/${id}`,
    {
      method: "DELETE",
    }
  );
  return true;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
