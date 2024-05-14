"use server";

import { action } from "@/lib/actions";
import { MovieSchema } from "@/schemas/movies.schema";
import { createMovie, deleteMovie } from "@/services/movies.service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const createMovies = action(MovieSchema, async ({ title, rating }) => {
  await sleep(3000);
  await createMovie({ title, rating });
  revalidatePath("/movies");
  redirect("/movies");
});
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const MovieIdSchema = z.object({
  _id: z.string(),
});

export const deleteMovies = action(MovieIdSchema, async ({ _id }) => {
  await deleteMovie(_id);
  revalidatePath("/movies");
});
