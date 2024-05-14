import { deleteMovies } from "@/actions/movies";
import { Button } from "@/components/ui/button";
import { getAllMovies } from "@/services/movies.service";
import { Movie } from "@/types/movie.type";
import Link from "next/link";
import { Fragment } from "react";
import DeleteButton from "./DeleteButton";

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
          <Fragment key={movie._id}>
            <li>{movie.title}</li>
            <li>{movie.rating}</li>
            <DeleteButton _id={movie._id} />
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Page;
