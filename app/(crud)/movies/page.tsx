import { getAllMovies } from "@/services/movies.service";
import { Movie } from "@/types/movie.type";
import Link from "next/link";

const Page = async () => {
  const movies = await getAllMovies();
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
