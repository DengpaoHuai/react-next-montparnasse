import { getAllMovies } from "@/services/movies.service";
import { Movie } from "@/types/movie.type";

const Page = async () => {
  const movies = await getAllMovies();
  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie: Movie) => (
          <li key={movie._id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
