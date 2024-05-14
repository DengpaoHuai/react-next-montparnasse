"use server";

import { createMovie } from "@/services/movies.service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createMovies = async (formdata: FormData) => {
  await sleep(2000);
  const title = formdata.get("title") as string;
  const rating = formdata.get("rating") as string;

  console.log(title, rating);
  createMovie({ title, rating });
  revalidatePath("/movies");
  redirect("/movies");
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
