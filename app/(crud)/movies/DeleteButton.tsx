"use client";
import { deleteMovies } from "@/actions/movies";
import { Button } from "@/components/ui/button";
import { useAction } from "next-safe-action/hooks";

const DeleteButton = ({ _id }: { _id: string }) => {
  const { execute, result } = useAction(deleteMovies);
  console.log(result);
  return (
    <Button
      onClick={() => {
        execute({ _id: _id });
      }}
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
