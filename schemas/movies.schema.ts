import z from "@/lib/zod";

export const MovieSchema = z.object({
  title: z.string().min(3),
  rating: z.string(),
});

export type Movie = z.infer<typeof MovieSchema>;
