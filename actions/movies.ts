"use server";

import { action } from "@/lib/actions";
import { MovieSchema } from "@/schemas/movies.schema";
import { createMovie } from "@/services/movies.service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createMovies = action(MovieSchema, async ({ title, rating }) => {
  await sleep(3000);
  await createMovie({ title, rating });
  revalidatePath("/movies");
  redirect("/movies");
});
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
