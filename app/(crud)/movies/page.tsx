import { getAllMovies } from "@/services/movies.service";
import { Movie } from "@/types/movie.type";
import Link from "next/link";

const getData = async () => {
  const movies = await fetch("http://localhost:3000/api/movies");
  return movies.json();
};

const Page = async () => {
  const movies = await getData();
  return (
    <div>
      <h1>Movies</h1>
      <Link href="/movies/create">Create</Link>
      <ul>
        {movies.map((movie: Movie) => (
          <li key={movie._id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
