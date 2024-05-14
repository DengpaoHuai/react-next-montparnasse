"use client";

import { createMovies } from "@/actions/movies";
import { Button } from "@/components/ui/button";
import { Movie, MovieSchema } from "@/schemas/movies.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Movie>({
    resolver: zodResolver(MovieSchema),
  });
  const { execute, status } = useAction(createMovies);
  const router = useRouter();

  const onSubmit = (data: Movie) => {
    execute(data);
    router.back();
  };

  return (
    <div>
      <h1>Create</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input type="text" placeholder="Title" {...register("title")} />

        <input type="text" placeholder="note" {...register("rating")} />
        {errors && errors.title && <p>{errors.title.message}</p>}
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};

export default Create;
