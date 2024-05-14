import { getAllMovies } from "@/services/movies.service";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  const movies = await getAllMovies();

  return NextResponse.json(movies);
};
